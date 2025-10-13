import React from 'react';
import PropTypes from 'prop-types';
import { ReactGridLayout as RealComponent } from '../LazyLoader';

/**
 * Dash wrapper around `react-grid-layout`. Supply a `layout` array describing
 * each item's width, height and position, and pass Dash components as children
 * whose `id` matches the corresponding layout item's `i` value. Dragging or
 * resizing items emits the updated `layout`, enabling interactive grid editors.
 */
const ReactGridLayout = (props) => (
    <React.Suspense fallback={null}>
        <RealComponent {...props} />
    </React.Suspense>
);

ReactGridLayout.defaultProps = {
    layout: [],
    cols: 12,
    rowHeight: 30,
    margin: [10, 10],
    containerPadding: [10, 10],
    isDraggable: true,
    isResizable: true,
    compactType: 'vertical',
    preventCollision: false,
    autoSize: true,
    useCSSTransforms: true,
    allowOverlap: false
};

ReactGridLayout.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Layout configuration for the grid. Each entry must include `i`, `x`, `y`, `w`, `h`.
     */
    layout: PropTypes.arrayOf(
        PropTypes.shape({
            i: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired,
            w: PropTypes.number.isRequired,
            h: PropTypes.number.isRequired,
            minW: PropTypes.number,
            maxW: PropTypes.number,
            minH: PropTypes.number,
            maxH: PropTypes.number,
            static: PropTypes.bool,
            isDraggable: PropTypes.bool,
            isResizable: PropTypes.bool
        })
    ),

    /**
     * Dash components to render inside the grid. Each child should have an `id`
     * that matches the corresponding layout item's `i` value.
     */
    children: PropTypes.node,

    /**
     * Number of columns in the grid or per breakpoint when using responsive layouts.
     */
    cols: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.objectOf(PropTypes.number)
    ]),

    /**
     * Height of a single row in pixels.
     */
    rowHeight: PropTypes.number,

    /**
     * Margin between items `[x, y]` in pixels.
     */
    margin: PropTypes.arrayOf(PropTypes.number),

    /**
     * Padding inside the container `[x, y]` in pixels.
     */
    containerPadding: PropTypes.arrayOf(PropTypes.number),

    /**
     * Allow dragging of grid items.
     */
    isDraggable: PropTypes.bool,

    /**
     * Allow resizing of grid items.
     */
    isResizable: PropTypes.bool,

    /**
     * Compact items vertically, horizontally, or disable compaction.
     */
    compactType: PropTypes.oneOf(['vertical', 'horizontal', null]),

    /**
     * Prevent items from overlapping when moved.
     */
    preventCollision: PropTypes.bool,

    /**
     * Automatically adjust height of container to fit rows.
     */
    autoSize: PropTypes.bool,

    /**
     * Enable/disable CSS transforms (useful when printing).
     */
    useCSSTransforms: PropTypes.bool,

    /**
     * Allow items to overlap when dragging.
     */
    allowOverlap: PropTypes.bool,

    /**
     * Selector string the user can drag within via handles.
     */
    draggableHandle: PropTypes.string,

    /**
     * Selector string preventing elements from being dragged from within.
     */
    draggableCancel: PropTypes.string,

    /**
     * Maximum rows allowed in layout.
     */
    maxRows: PropTypes.number,

    /**
     * Breakpoint definitions when using responsive layouts.
     */
    breakpoints: PropTypes.objectOf(PropTypes.number),

    /**
     * Layouts per breakpoint when using responsive mode.
     */
    layouts: PropTypes.objectOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                i: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired,
                w: PropTypes.number.isRequired,
                h: PropTypes.number.isRequired
            })
        )
    ),

    /**
     * Enable responsive breakpoints.
     */
    responsive: PropTypes.bool,

    /**
     * Dash-assigned callback to report property changes back to Dash.
     */
    setProps: PropTypes.func,

    /**
     * Callback invoked when the layout changes on drag, drop, or resize.
     */
    onLayoutChange: PropTypes.func,

    /**
     * CSS class applied to the grid container.
     */
    className: PropTypes.string,

    /**
     * Inline styles applied to the grid container.
     */
    style: PropTypes.object
};

export default ReactGridLayout;

export const defaultProps = ReactGridLayout.defaultProps;
export const propTypes = ReactGridLayout.propTypes;
