import React from 'react';
import logo from '../track.png';

export default function header() {
    return(
        <React.Fragment>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Google Stock Tracker and Predictor</h1>
            </header>
            <p className="App-intro">Track stock for Google as well as view predicted stock value 15 minutes ahead!</p>
        </React.Fragment>
    )
}
