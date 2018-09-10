import React, { Component } from 'react'
import Header from './components/header-component'
import Footer from './components/footer-component'
import './App.css'

import LineChartContainer from './containers/linechart-container'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      day: new Date(),
      pred: ''
    }

    this.day = (val)=>{
      this.setState({
        day: val
      });
    }

    this.pred = (val)=> {
      this.setState({
        pred: val
      });
    }

  }

  render() {
    return (
      <div className="App">
        <Header date={this.state.day} />
        <LineChartContainer day={this.day} pred={this.pred} />
        <Footer pred={this.state.pred} />
      </div>
    );
  }
}

export default App;
