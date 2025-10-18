import React from 'react';
import PropTypes from 'prop-types';
import { ReactResponsiveGridLayout as RealComponent } from '../LazyLoader';

/**
 * Dash wrapper around `react-grid-layout`'s ResponsiveGridLayout. Supply a `layouts`
 * object with layouts for different breakpoints, and pass Dash components as children
 * whose `id` matches the corresponding layout item's `i` value. The grid will automatically
 * switch between layouts based on container width.
 */
const ReactResponsiveGridLayout = (props) => (
    <React.Suspense fallback={null}>
        <RealComponent {...props} />
    </React.Suspense>
);

ReactResponsiveGridLayout.defaultProps = {
    breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    layouts: {},
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

ReactResponsiveGridLayout.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Current layout (will be updated based on breakpoint).
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
     * Layouts per breakpoint. Keys should match breakpoint names (e.g., 'lg', 'md', 'sm').
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
     * Dash components to render inside the grid. Each child should have an `id`
     * that matches the corresponding layout item's `i` value.
     */
    children: PropTypes.node,

    /**
     * Breakpoint widths in pixels.
     */
    breakpoints: PropTypes.objectOf(PropTypes.number),

    /**
     * Number of columns per breakpoint.
     */
    cols: PropTypes.objectOf(PropTypes.number),

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

export default ReactResponsiveGridLayout;

export const defaultProps = ReactResponsiveGridLayout.defaultProps;
export const propTypes = ReactResponsiveGridLayout.propTypes;
