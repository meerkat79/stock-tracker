import React, { Component } from 'react';
import Header from './components/header';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      metaData: null,
      serialData: null
    }

  }

  componentDidMount() {

      fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GOOGL&interval=30min&apikey=042XYM5X14C1K30O').then(
        (res)=>{
          return res.json();
        }
      ).then(
        (data)=>{
          console.log(data);
          this.setState({
            metaData: data["Meta Data"]
          });
          this.setState({
            serialData: data["Time Series (30min)"]
          });           
        }
      )
  }

  render() {

    console.log('state is: ', this.state)

    return (
      <div className="App">
        <Header metaData={this.state.metaData}/>
      </div>
    );
  }
}

export default App;
