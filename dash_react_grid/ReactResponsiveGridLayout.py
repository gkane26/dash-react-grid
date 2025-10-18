# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentType = typing.Union[
    str,
    int,
    float,
    Component,
    None,
    typing.Sequence[typing.Union[str, int, float, Component, None]],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class ReactResponsiveGridLayout(Component):
    """A ReactResponsiveGridLayout component.
Dash wrapper around `react-grid-layout`'s ResponsiveGridLayout. Supply a `layouts`
object with layouts for different breakpoints, and pass Dash components as children
whose `id` matches the corresponding layout item's `i` value. The grid will automatically
switch between layouts based on container width.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Dash components to render inside the grid. Each child should have
    an `id` that matches the corresponding layout item's `i` value.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- allowOverlap (boolean; default False):
    Allow items to overlap when dragging.

- autoSize (boolean; default True):
    Automatically adjust height of container to fit rows.

- breakpoints (dict with strings as keys and values of type number; default { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }):
    Breakpoint widths in pixels.

- className (string; optional):
    CSS class applied to the grid container.

- cols (dict with strings as keys and values of type number; default { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }):
    Number of columns per breakpoint.

- compactType (a value equal to: 'vertical', 'horizontal', null; default 'vertical'):
    Compact items vertically, horizontally, or disable compaction.

- containerPadding (list of numbers; default [10, 10]):
    Padding inside the container `[x, y]` in pixels.

- draggableCancel (string; optional):
    Selector string preventing elements from being dragged from
    within.

- draggableHandle (string; optional):
    Selector string the user can drag within via handles.

- isDraggable (boolean; default True):
    Allow dragging of grid items.

- isResizable (boolean; default True):
    Allow resizing of grid items.

- layout (list of dicts; optional):
    Current layout (will be updated based on breakpoint).

    `layout` is a list of dicts with keys:

    - i (string | number; required)

    - x (number; required)

    - y (number; required)

    - w (number; required)

    - h (number; required)

    - minW (number; optional)

    - maxW (number; optional)

    - minH (number; optional)

    - maxH (number; optional)

    - static (boolean; optional)

    - isDraggable (boolean; optional)

    - isResizable (boolean; optional)

- layouts (dict; optional):
    Layouts per breakpoint. Keys should match breakpoint names (e.g.,
    'lg', 'md', 'sm').

    `layouts` is a dict with strings as keys and values of type list
    of dicts with keys:

    - i (string | number; required)

    - x (number; required)

    - y (number; required)

    - w (number; required)

    - h (number; required)

- margin (list of numbers; default [10, 10]):
    Margin between items `[x, y]` in pixels.

- maxRows (number; optional):
    Maximum rows allowed in layout.

- preventCollision (boolean; default False):
    Prevent items from overlapping when moved.

- rowHeight (number; default 30):
    Height of a single row in pixels.

- useCSSTransforms (boolean; default True):
    Enable/disable CSS transforms (useful when printing)."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_react_grid'
    _type = 'ReactResponsiveGridLayout'
    Layout = TypedDict(
        "Layout",
            {
            "i": typing.Union[str, NumberType],
            "x": NumberType,
            "y": NumberType,
            "w": NumberType,
            "h": NumberType,
            "minW": NotRequired[NumberType],
            "maxW": NotRequired[NumberType],
            "minH": NotRequired[NumberType],
            "maxH": NotRequired[NumberType],
            "static": NotRequired[bool],
            "isDraggable": NotRequired[bool],
            "isResizable": NotRequired[bool]
        }
    )

    Layouts = TypedDict(
        "Layouts",
            {
            "i": typing.Union[str, NumberType],
            "x": NumberType,
            "y": NumberType,
            "w": NumberType,
            "h": NumberType
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        layout: typing.Optional[typing.Sequence["Layout"]] = None,
        layouts: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Sequence["Layouts"]]] = None,
        breakpoints: typing.Optional[typing.Dict[typing.Union[str, float, int], NumberType]] = None,
        cols: typing.Optional[typing.Dict[typing.Union[str, float, int], NumberType]] = None,
        rowHeight: typing.Optional[NumberType] = None,
        margin: typing.Optional[typing.Sequence[NumberType]] = None,
        containerPadding: typing.Optional[typing.Sequence[NumberType]] = None,
        isDraggable: typing.Optional[bool] = None,
        isResizable: typing.Optional[bool] = None,
        compactType: typing.Optional[Literal["vertical", "horizontal", None]] = None,
        preventCollision: typing.Optional[bool] = None,
        autoSize: typing.Optional[bool] = None,
        useCSSTransforms: typing.Optional[bool] = None,
        allowOverlap: typing.Optional[bool] = None,
        draggableHandle: typing.Optional[str] = None,
        draggableCancel: typing.Optional[str] = None,
        maxRows: typing.Optional[NumberType] = None,
        onLayoutChange: typing.Optional[typing.Any] = None,
        className: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'allowOverlap', 'autoSize', 'breakpoints', 'className', 'cols', 'compactType', 'containerPadding', 'draggableCancel', 'draggableHandle', 'isDraggable', 'isResizable', 'layout', 'layouts', 'margin', 'maxRows', 'preventCollision', 'rowHeight', 'style', 'useCSSTransforms']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'allowOverlap', 'autoSize', 'breakpoints', 'className', 'cols', 'compactType', 'containerPadding', 'draggableCancel', 'draggableHandle', 'isDraggable', 'isResizable', 'layout', 'layouts', 'margin', 'maxRows', 'preventCollision', 'rowHeight', 'style', 'useCSSTransforms']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(ReactResponsiveGridLayout, self).__init__(children=children, **args)

setattr(ReactResponsiveGridLayout, "__init__", _explicitize_args(ReactResponsiveGridLayout.__init__))
