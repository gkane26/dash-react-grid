# AUTO GENERATED FILE - DO NOT EDIT

#' @export
reactGridLayout <- function(children=NULL, id=NULL, allowOverlap=NULL, autoSize=NULL, breakpoints=NULL, className=NULL, cols=NULL, compactType=NULL, containerPadding=NULL, draggableCancel=NULL, draggableHandle=NULL, isDraggable=NULL, isResizable=NULL, layout=NULL, layouts=NULL, margin=NULL, maxRows=NULL, onLayoutChange=NULL, preventCollision=NULL, responsive=NULL, rowHeight=NULL, style=NULL, useCSSTransforms=NULL) {
    
    props <- list(children=children, id=id, allowOverlap=allowOverlap, autoSize=autoSize, breakpoints=breakpoints, className=className, cols=cols, compactType=compactType, containerPadding=containerPadding, draggableCancel=draggableCancel, draggableHandle=draggableHandle, isDraggable=isDraggable, isResizable=isResizable, layout=layout, layouts=layouts, margin=margin, maxRows=maxRows, onLayoutChange=onLayoutChange, preventCollision=preventCollision, responsive=responsive, rowHeight=rowHeight, style=style, useCSSTransforms=useCSSTransforms)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ReactGridLayout',
        namespace = 'dash_react_grid',
        propNames = c('children', 'id', 'allowOverlap', 'autoSize', 'breakpoints', 'className', 'cols', 'compactType', 'containerPadding', 'draggableCancel', 'draggableHandle', 'isDraggable', 'isResizable', 'layout', 'layouts', 'margin', 'maxRows', 'onLayoutChange', 'preventCollision', 'responsive', 'rowHeight', 'style', 'useCSSTransforms'),
        package = 'dashReactGrid'
        )

    structure(component, class = c('dash_component', 'list'))
}
