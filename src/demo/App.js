import React, { useCallback, useState } from 'react';

import { ReactGridLayout } from '../lib';

const initialLayout = [
    { i: 'chart', x: 0, y: 0, w: 4, h: 6 },
    { i: 'table', x: 4, y: 0, w: 4, h: 6 },
    { i: 'controls', x: 8, y: 0, w: 4, h: 6 },
];

const tileStyle = {
    background: '#1e1e2f',
    borderRadius: 8,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
};

const App = () => {
    const [layout, setLayout] = useState(initialLayout);

    const handleSetProps = useCallback(
        (newProps) => {
            if (newProps.layout) {
                setLayout(newProps.layout);
            }
        },
        []
    );

    const handleLayoutChange = useCallback(
        (nextLayout) => {
            setLayout(nextLayout);
        },
        []
    );

    return (
        <div style={{ padding: 24 }}>
            <ReactGridLayout
                layout={layout}
                cols={12}
                rowHeight={30}
                onLayoutChange={handleLayoutChange}
                setProps={handleSetProps}
                margin={[12, 12]}
            >
                <div id="chart" style={tileStyle}>
                    Chart
                </div>
                <div id="table" style={tileStyle}>
                    Table
                </div>
                <div id="controls" style={tileStyle}>
                    Controls
                </div>
            </ReactGridLayout>
        </div>
    );
};

export default App;
