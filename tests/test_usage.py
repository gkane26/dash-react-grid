import json

import dash_react_grid
from dash import Dash, Input, Output, dcc, html, no_update
from dash.testing.application_runners import import_app
from selenium.webdriver.common.action_chains import ActionChains


def test_grid_updates_layout_on_drag(dash_duo):
    app = import_app('usage')
    dash_duo.start_server(app)

    dash_duo.wait_for_element('.react-grid-layout')

    tiles = dash_duo.find_elements('.react-grid-item')
    assert len(tiles) == 3

    output = dash_duo.find_element('#grid-output')
    initial_text = output.text
    initial_layout = json.loads(initial_text)
    initial_map = {item['i']: item for item in initial_layout}

    ActionChains(dash_duo.driver).click_and_hold(tiles[0]).move_by_offset(160, 0).pause(0.1).release().perform()

    def layout_changed():
        text = dash_duo.find_element('#grid-output').text
        if text == initial_text:
            return False

        try:
            updated_layout = json.loads(text)
        except json.JSONDecodeError:
            return False

        layout_by_id = {item['i']: item for item in updated_layout}
        chart_initial = initial_map['chart']
        chart_updated = layout_by_id.get('chart')
        if not chart_updated:
            return False
        return chart_updated['x'] != chart_initial['x'] or chart_updated['y'] != chart_initial['y']

    # Wait a moment for the callback to fire and update the output
    import time
    time.sleep(0.5)
    
    # Verify layout changed
    assert layout_changed(), "Layout should have changed after drag"


def test_responsive_layout_switches_breakpoints(dash_duo):
    import time
    
    app = Dash(__name__)

    breakpoints = {"lg": 1200, "sm": 768}
    cols = {"lg": 12, "sm": 6}

    lg_layout = [
        {"i": "alpha", "x": 0, "y": 0, "w": 6, "h": 3},
        {"i": "beta", "x": 6, "y": 0, "w": 6, "h": 3},
    ]
    sm_layout = [
        {"i": "alpha", "x": 0, "y": 0, "w": 6, "h": 3},
        {"i": "beta", "x": 0, "y": 3, "w": 6, "h": 3},
    ]

    trimmed_lg = [{k: item[k] for k in ("i", "x", "y", "w", "h")} for item in lg_layout]
    trimmed_sm = [{k: item[k] for k in ("i", "x", "y", "w", "h")} for item in sm_layout]

    app.layout = html.Div(
        [
            dcc.Store(id="layout-store", data=trimmed_lg),
            dash_react_grid.ReactResponsiveGridLayout(
                id="responsive-grid",
                layouts={"lg": lg_layout, "sm": sm_layout},
                breakpoints=breakpoints,
                cols=cols,
                rowHeight=30,
                children=[
                    html.Div("Alpha", id="alpha"),
                    html.Div("Beta", id="beta"),
                ],
            ),
            html.Pre(id="responsive-output", children=json.dumps(trimmed_lg)),
        ]
    )

    @app.callback(Output("responsive-output", "children"), Input("responsive-grid", "layout"))
    def _record_layout(layout):
        if not layout:
            return no_update
        reduced = [{k: item[k] for k in ("i", "x", "y", "w", "h")} for item in layout]
        return json.dumps(reduced)

    def layout_positions(layout):
        return {item["i"]: (item["x"], item["y"], item["w"], item["h"]) for item in layout}
    
    def wait_for_layout(expected_positions, timeout=5.0, poll_interval=0.1):
        """Poll until layout matches expected positions or timeout"""
        start = time.time()
        while time.time() - start < timeout:
            current_text = dash_duo.find_element('#responsive-output').text
            current = json.loads(current_text)
            if layout_positions(current) == expected_positions:
                return True
            time.sleep(poll_interval)
        # One final check
        current_text = dash_duo.find_element('#responsive-output').text
        current = json.loads(current_text)
        return layout_positions(current) == expected_positions

    expected_lg = layout_positions(trimmed_lg)
    expected_sm = layout_positions(trimmed_sm)

    dash_duo.start_server(app)
    # Set window size before waiting for elements
    dash_duo.driver.set_window_size(1400, 800)
    dash_duo.wait_for_element('.react-grid-layout')

    # Wait for large breakpoint layout
    assert wait_for_layout(expected_lg), f"Layout should match lg breakpoint. Expected {expected_lg}"

    # Resize to small breakpoint
    dash_duo.driver.set_window_size(700, 800)
    assert wait_for_layout(expected_sm), f"Layout should match sm breakpoint. Expected {expected_sm}"

    # Resize back to large breakpoint
    dash_duo.driver.set_window_size(1300, 800)
    assert wait_for_layout(expected_lg), f"Layout should match lg breakpoint again. Expected {expected_lg}"
