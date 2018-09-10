import React from 'react';
import CanvasJSReact from '../lib/canvasjs.react'

export default function LineChart(props) {

    const CanvasJSChart = CanvasJSReact.CanvasJSChart;
    
    return(
        <React.Fragment>
            <CanvasJSChart options = {props.options} />
        </React.Fragment>
    )
}
