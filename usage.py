import json

import dash_react_grid
from dash import Dash, Input, Output, State, dcc, html, no_update

app = Dash(__name__)

initial_layout = [
    {"i": "chart", "x": 0, "y": 0, "w": 4, "h": 8},
    {"i": "table", "x": 4, "y": 0, "w": 4, "h": 8},
    {"i": "controls", "x": 8, "y": 0, "w": 4, "h": 4},
]

tile_style = {
    "background": "#1e1e2f",
    "borderRadius": "8px",
    "color": "white",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "fontWeight": 600,
}

app.layout = html.Div(
    [
        dcc.Store(id="grid-layout-store", data=initial_layout),
        dash_react_grid.ReactGridLayout(
            id="grid",
            layout=initial_layout,
            cols=12,
            rowHeight=30,
            margin=[12, 12],
            children=[
                html.Div("Chart", id="chart", style=tile_style),
                html.Div("Table", id="table", style=tile_style),
                html.Div("Controls", id="controls", style=tile_style),
            ],
        ),
        html.H4("Current layout"),
        html.Pre(
            id="grid-output",
            style={"background": "#f6f8fa", "padding": "16px"},
            children=json.dumps(initial_layout, indent=2),
        ),
    ],
    style={"padding": "24px"},
)


@app.callback(
    Output("grid-output", "children"),
    Output("grid-layout-store", "data"),
    Input("grid", "layout"),
    State("grid-layout-store", "data"),
)
def display_layout(layout, current):
    if not layout:
        return no_update, current

    if layout != current:
        return json.dumps(layout, indent=2), layout

    return no_update, current


if __name__ == "__main__":
    app.run(debug=True)
