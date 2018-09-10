import React from 'react';
import logo from '../track.png';

export default function Header(props) {

    const tradingDate = new Date(props.date);
    
    return(
        <React.Fragment>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Google Stock Tracker and Predictor</h1>
            </header>
            <p className="App-intro">Please note price is real time for last three hours of trading on {tradingDate.toString()}. 
                Trading hours may vary and prices are updated every minute from last available pricing.
            </p>
        </React.Fragment>
    )
}
