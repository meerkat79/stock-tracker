import React from 'react';

export default function Footer(props) {
    
    return(
        <React.Fragment>
            <p className="App-footer">Predicted stock price for next 15minutes is: <span style={{color: 'red'}}>${props.pred}</span></p>
        </React.Fragment>
    )
}
