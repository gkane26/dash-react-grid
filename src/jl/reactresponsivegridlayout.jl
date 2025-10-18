# AUTO GENERATED FILE - DO NOT EDIT

export reactresponsivegridlayout

"""
    reactresponsivegridlayout(;kwargs...)
    reactresponsivegridlayout(children::Any;kwargs...)
    reactresponsivegridlayout(children_maker::Function;kwargs...)


A ReactResponsiveGridLayout component.
Dash wrapper around `react-grid-layout`'s ResponsiveGridLayout. Supply a `layouts`
object with layouts for different breakpoints, and pass Dash components as children
whose `id` matches the corresponding layout item's `i` value. The grid will automatically
switch between layouts based on container width.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Dash components to render inside the grid. Each child should have an `id`
that matches the corresponding layout item's `i` value.
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `allowOverlap` (Bool; optional): Allow items to overlap when dragging.
- `autoSize` (Bool; optional): Automatically adjust height of container to fit rows.
- `breakpoints` (Dict with Strings as keys and values of type Real; optional): Breakpoint widths in pixels.
- `className` (String; optional): CSS class applied to the grid container.
- `cols` (Dict with Strings as keys and values of type Real; optional): Number of columns per breakpoint.
- `compactType` (a value equal to: 'vertical', 'horizontal', null; optional): Compact items vertically, horizontally, or disable compaction.
- `containerPadding` (Array of Reals; optional): Padding inside the container `[x, y]` in pixels.
- `draggableCancel` (String; optional): Selector string preventing elements from being dragged from within.
- `draggableHandle` (String; optional): Selector string the user can drag within via handles.
- `isDraggable` (Bool; optional): Allow dragging of grid items.
- `isResizable` (Bool; optional): Allow resizing of grid items.
- `layout` (optional): Current layout (will be updated based on breakpoint).. layout has the following type: Array of lists containing elements 'i', 'x', 'y', 'w', 'h', 'minW', 'maxW', 'minH', 'maxH', 'static', 'isDraggable', 'isResizable'.
Those elements have the following types:
  - `i` (String | Real; required)
  - `x` (Real; required)
  - `y` (Real; required)
  - `w` (Real; required)
  - `h` (Real; required)
  - `minW` (Real; optional)
  - `maxW` (Real; optional)
  - `minH` (Real; optional)
  - `maxH` (Real; optional)
  - `static` (Bool; optional)
  - `isDraggable` (Bool; optional)
  - `isResizable` (Bool; optional)s
- `layouts` (optional): Layouts per breakpoint. Keys should match breakpoint names (e.g., 'lg', 'md', 'sm').. layouts has the following type: Dict with Strings as keys and values of type Array of lists containing elements 'i', 'x', 'y', 'w', 'h'.
Those elements have the following types:
  - `i` (String | Real; required)
  - `x` (Real; required)
  - `y` (Real; required)
  - `w` (Real; required)
  - `h` (Real; required)s
- `margin` (Array of Reals; optional): Margin between items `[x, y]` in pixels.
- `maxRows` (Real; optional): Maximum rows allowed in layout.
- `preventCollision` (Bool; optional): Prevent items from overlapping when moved.
- `rowHeight` (Real; optional): Height of a single row in pixels.
- `style` (Dict; optional): Inline styles applied to the grid container.
- `useCSSTransforms` (Bool; optional): Enable/disable CSS transforms (useful when printing).
"""
function reactresponsivegridlayout(; kwargs...)
        available_props = Symbol[:children, :id, :allowOverlap, :autoSize, :breakpoints, :className, :cols, :compactType, :containerPadding, :draggableCancel, :draggableHandle, :isDraggable, :isResizable, :layout, :layouts, :margin, :maxRows, :preventCollision, :rowHeight, :style, :useCSSTransforms]
        wild_props = Symbol[]
        return Component("reactresponsivegridlayout", "ReactResponsiveGridLayout", "dash_react_grid", available_props, wild_props; kwargs...)
end

reactresponsivegridlayout(children::Any; kwargs...) = reactresponsivegridlayout(;kwargs..., children = children)
reactresponsivegridlayout(children_maker::Function; kwargs...) = reactresponsivegridlayout(children_maker(); kwargs...)

