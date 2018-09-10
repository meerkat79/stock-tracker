import React, {Component} from 'react'
import LineChart from '../components/linechart-component';

class LineChartContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            dataPoints: this.dataPoints,
            meta: {}
        };

        this.dataPoints = [];

        this.predictedPrice = ()=>{
            //here we can produce some more complicated algorythm to 
            // determine a future price but as we are currently only plotting the next node on the line chart we only need the 10th last y value
            //in this case the following will suffice:

            return this.state.dataPoints[3].y;

            //above is index 3 of the 4th item. We sliced off the 6 previous items to build the half hour nodes on the chart :)so tenth last y value is of course
            //6th item + 4th item

        }
                        
    }

componentDidMount() {

    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GOOGL&interval=30min&apikey=042XYM5X14C1K30O').then(
        (res)=>{
          if(res.status === 200) {
            return res.json();
          }
          else {
             console.log('AJAX call has not been made successfully, a status code of ' + res.status + 'has been returned')
          }
        }
      ).then(
        (data)=>{
            this.setState({
                data: data["Time Series (30min)"]
            });

            this.setState({
                meta: data["Meta Data"]
            });

            this.props.day(this.state.meta["3. Last Refreshed"]);

            for (var obj in data["Time Series (30min)"]){
                this.dataPoints.push({
                    x: new Date(obj),
                    y: parseInt(data["Time Series (30min)"][obj]["4. close"], 10)
                });
            }

            this.setState({
                dataPoints: this.dataPoints.splice(-94, 94)
            });

            this.props.pred(this.predictedPrice())
            
            
        }
      ).catch(
        error => console.error('Error:', error)
      );

}

    render() {

		const options = {
			theme: "light2",
			title: {
				text: "Stock Price of ABC Inc"
            },
            axisX:{
                title: "Time",
                // gridThickness: 1,
                // gridDashType: "dash",
                // interval: 30,
                // intervalType: "minute",
            },            
			axisY: {
				title: "Price in USD",
				prefix: "$",
				includeZero: false
			},
			data: [{
				type: "line",
				xValueFormatString: "HH:mm DD/MM/YYYY",
				yValueFormatString: "$#,##0.00",
				dataPoints: this.dataPoints
			}]
		}

        return(
            <div className="chartContainer">
                <LineChart options={options} />
          </div>
        )  
    }

}

export default LineChartContainer
