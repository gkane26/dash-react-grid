% Auto-generated: do not edit by hand
\name{reactGridLayout}

\alias{reactGridLayout}

\title{ReactGridLayout component}

\description{
Dash wrapper around `react-grid-layout`. Supply a `layout` array describing each item's width, height and position, and pass Dash components as children whose `id` matches the corresponding layout item's `i` value. Dragging or resizing items emits the updated `layout`, enabling interactive grid editors.
}

\usage{
reactGridLayout(children=NULL, id=NULL, allowOverlap=NULL, autoSize=NULL,
breakpoints=NULL, className=NULL, cols=NULL,
compactType=NULL, containerPadding=NULL,
draggableCancel=NULL, draggableHandle=NULL,
isDraggable=NULL, isResizable=NULL, layout=NULL,
layouts=NULL, margin=NULL, maxRows=NULL,
onLayoutChange=NULL, preventCollision=NULL, responsive=NULL,
rowHeight=NULL, style=NULL, useCSSTransforms=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Dash components to render inside the grid. Each child should have an `id`
that matches the corresponding layout item's `i` value.}

\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{allowOverlap}{Logical. Allow items to overlap when dragging.}

\item{autoSize}{Logical. Automatically adjust height of container to fit rows.}

\item{breakpoints}{List with named elements and values of type numeric. Breakpoint definitions when using responsive layouts.}

\item{className}{Character. CSS class applied to the grid container.}

\item{cols}{Numeric | list with named elements and values of type numeric. Number of columns in the grid or per breakpoint when using responsive layouts.}

\item{compactType}{A value equal to: 'vertical', 'horizontal', null. Compact items vertically, horizontally, or disable compaction.}

\item{containerPadding}{List of numerics. Padding inside the container `[x, y]` in pixels.}

\item{draggableCancel}{Character. Selector string preventing elements from being dragged from within.}

\item{draggableHandle}{Character. Selector string the user can drag within via handles.}

\item{isDraggable}{Logical. Allow dragging of grid items.}

\item{isResizable}{Logical. Allow resizing of grid items.}

\item{layout}{List of lists containing elements 'i', 'x', 'y', 'w', 'h', 'minw', 'maxw', 'minh', 'maxh', 'static', 'isdraggable', 'isresizable'.
those elements have the following types:
  - i (character | numeric; required)
  - x (numeric; required)
  - y (numeric; required)
  - w (numeric; required)
  - h (numeric; required)
  - minw (numeric; optional)
  - maxw (numeric; optional)
  - minh (numeric; optional)
  - maxh (numeric; optional)
  - static (logical; optional)
  - isdraggable (logical; optional)
  - isresizable (logical; optional)s. Layout configuration for the grid. Each entry must include `i`, `x`, `y`, `w`, `h`.}

\item{layouts}{List with named elements and values of type list of lists containing elements 'i', 'x', 'y', 'w', 'h'.
those elements have the following types:
  - i (character | numeric; required)
  - x (numeric; required)
  - y (numeric; required)
  - w (numeric; required)
  - h (numeric; required)s. Layouts per breakpoint when using responsive mode.}

\item{margin}{List of numerics. Margin between items `[x, y]` in pixels.}

\item{maxRows}{Numeric. Maximum rows allowed in layout.}

\item{onLayoutChange}{Callback invoked when the layout changes on drag, drop, or resize.}

\item{preventCollision}{Logical. Prevent items from overlapping when moved.}

\item{responsive}{Logical. Enable responsive breakpoints.}

\item{rowHeight}{Numeric. Height of a single row in pixels.}

\item{style}{Named list. Inline styles applied to the grid container.}

\item{useCSSTransforms}{Logical. Enable/disable CSS transforms (useful when printing).}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

