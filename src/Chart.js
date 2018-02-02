import React, { Component } from 'react';
// import { MuiThemeProvider, theme } from 'material-ui/styles';
// import Grid from 'material-ui/Grid';
import Card from 'material-ui/Card';
import {LineChart, Line, XAxis, Tooltip, ResponsiveContainer} from 'recharts';
import './App.css';
// const nf = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   minimumFractionDigits: 2,
//   maximumFractionDigits: 2
// });

class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    // this.changedDollarAmount = this.changedDollarAmount.bind(this);
  }

  // changedDollarAmount(changedAmount, percent) {
  //   if (Math.sign(changedAmount > 0)) {
  //     console.log('math.sign(): ', Math.sign(changedAmount));
  //     let formattedAmount = nf.format(changedAmount);
  //     let percentage = parseFloat(percent*100).toFixed(2)+"%";
  //     console.log('percentage in f(x): ', percentage);
  //     let finalPercent = `(${percentage})`;
  //     console.log('finalPercent in f(x): ', finalPercent);
  //     return (
  //       <span className='positiveNumber'>+{formattedAmount} {finalPercent}</span>
  //     )
  //   } else if (Math.sign(changedAmount) === 0) {
  //     console.log('math.sign(): ', Math.sign(changedAmount));
  //     let formattedAmount = nf.format(changedAmount);
  //     let percentage = parseFloat(percent*100).toFixed(2)+"%";
  //     console.log('percentage in f(x): ', percentage);
  //     let finalPercent = `(${percentage})`;
  //     console.log('finalPercent in f(x): ', finalPercent);
  //     return (
  //       <span className='neutralNumber'>+{formattedAmount} (0.00%)</span>
  //     )
  //   } else {
  //     console.log('math.sign(): ', Math.sign(changedAmount));
  //     let formattedAmount = nf.format(changedAmount);
  //     let percentage = parseFloat(percent*100).toFixed(2)+"%";
  //     console.log('percentage in f(x): ', percentage);
  //     let finalPercent = `(${percentage})`;
  //     console.log('finalPercent in f(x): ', finalPercent);
  //     return (
  //       <span className='negativeNumber'>{formattedAmount} {finalPercent}</span>
  //     )
  //   }
  // }

  componentDidMount() {

  }

  render() {
    if (this.props.data) {
      let data = this.props.data;
      let sales = this.props.data[0].sales
      console.log('data: ', data);
      // let datesArray = [];
      // let chartMap = sales.map((records, index) => (
      //   datesArray.push(records.weekEnding)
      // ))
      // console.log('dates: ', datesArray);
      return (
        <div className="Chart">
          <ResponsiveContainer width='100%' height={401}>
            <Card>
              <p className='retailSalesHeader'>Retail Sales</p>
              <LineChart width={900} height={400} data={data[0].sales}>
                <Tooltip />
                <Line type="monotone" dataKey="retailSales" stroke="#2377ff" />
                <Line type="monotone" dataKey="wholesaleSales" stroke="#828282" />
                <XAxis dataKey='weekEnding'/>
              </LineChart>
            </Card>
          </ResponsiveContainer>
        </div>
      );
    } else {
      return (
        <p>Loading...</p>
      )
    }
  }
}

export default Chart;
