import React from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const normaliseKey = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }

    return String(value).replace(/^\.\$/, '');
};

const childIdentifier = (child) => {
    if (!React.isValidElement(child)) {
        return undefined;uv 
    }

    if (child.props && child.props.gridItemKey !== undefined) {
        return normaliseKey(child.props.gridItemKey);
    }

    if (child.props && child.props.id !== undefined) {
        return normaliseKey(child.props.id);
    }

    return normaliseKey(child.key);
};

export default class ReactResponsiveGridLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBreakpoint: null
        };
    }

    handleBreakpointChange = (newBreakpoint, newCols) => {
        const { onBreakpointChange } = this.props;
        
        if (typeof onBreakpointChange === 'function') {
            onBreakpointChange(newBreakpoint, newCols);
        }

        this.setState({ currentBreakpoint: newBreakpoint });
    };

    handleLayoutChange = (nextLayout, allLayouts) => {
        const { setProps, onLayoutChange } = this.props;

        if (typeof onLayoutChange === 'function') {
            onLayoutChange(nextLayout, allLayouts);
        }

        if (setProps) {
            setProps({ 
                layout: nextLayout,
                layouts: allLayouts
            });
        }
    };

    renderChildren(layoutArray) {
        const { children } = this.props;
        const childArray = React.Children.toArray(children);

        const childMap = new Map();
        childArray.forEach((child) => {
            const key = childIdentifier(child);
            if (key !== undefined && !childMap.has(key)) {
                childMap.set(key, child);
            }
        });

        return layoutArray.map((item) => {
            const key = normaliseKey(item.i);
            const content = key ? childMap.get(key) : null;

            if (key && !content && process.env.NODE_ENV !== 'production') {
                // eslint-disable-next-line no-console
                console.warn(
                    `dash-react-grid: no child found for layout item "${key}". ` +
                    'Ensure each child has an id that matches the layout `i` value.'
                );
            }

            return (
                <div key={key} data-grid={item}>
                    {content}
                </div>
            );
        });
    }

    render() {
        const { layouts, children, setProps, onLayoutChange, ...otherProps } = this.props;
        
        // For ResponsiveGridLayout, we need to provide all layouts
        // The component will pick the appropriate one based on breakpoint
        const hasLayouts = layouts && Object.keys(layouts).length > 0;
        
        if (hasLayouts) {
            // Render children for all layouts (ResponsiveGridLayout handles display)
            const allKeys = new Set();
            Object.values(layouts).forEach(layout => {
                layout.forEach(item => allKeys.add(normaliseKey(item.i)));
            });

            const childArray = React.Children.toArray(children);
            const childMap = new Map();
            childArray.forEach((child) => {
                const key = childIdentifier(child);
                if (key !== undefined && !childMap.has(key)) {
                    childMap.set(key, child);
                }
            });

            const gridChildren = Array.from(allKeys).map(key => {
                const content = childMap.get(key);
                return (
                    <div key={key}>
                        {content}
                    </div>
                );
            });

            return (
                <ResponsiveGridLayout
                    layouts={layouts}
                    onLayoutChange={this.handleLayoutChange}
                    onBreakpointChange={this.handleBreakpointChange}
                    {...otherProps}
                >
                    {gridChildren}
                </ResponsiveGridLayout>
            );
        }

        // Fallback if no layouts provided
        return (
            <ResponsiveGridLayout
                onLayoutChange={this.handleLayoutChange}
                onBreakpointChange={this.handleBreakpointChange}
                {...otherProps}
            >
                {React.Children.toArray(children)}
            </ResponsiveGridLayout>
        );
    }
}

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
     * Callback invoked when the breakpoint changes.
     */
    onBreakpointChange: PropTypes.func,

    /**
     * CSS class applied to the grid container.
     */
    className: PropTypes.string,

    /**
     * Inline styles applied to the grid container.
     */
    style: PropTypes.object
};
