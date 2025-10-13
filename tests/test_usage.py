import json

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

    dash_duo.wait_until(layout_changed, timeout=5)
