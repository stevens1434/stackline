import React, { Component } from 'react';
import { MuiThemeProvider, theme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import LeftPanel from './LeftPanel';
import Chart from './Chart';
import DataList from './DataList';
// import Card, { CardHeader, CardTitle, CardText} from 'material-ui/Card';
// import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip, Pie, PieChart, Cell, Sector, ResponsiveContainer} from 'recharts';
import './App.css';
// const nf = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   minimumFractionDigits: 2,
//   maximumFractionDigits: 2
// });

class Stackline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      salesData: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateState = this.updateState.bind(this);
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

  updateState(records) {
    //setState for salesData ONLY
  }

  componentDidMount() {
    let data = this.props.data;
    let salesData = this.props.data[0].sales
    this.setState({
      data: data,
      salesData: salesData
    })
  }

  render() {
    let data = this.props.data;
    // console.log('data: ', data);
    let changedAmount = 25000;
    let percent = (1000/changedAmount);
    // console.log('percent in render: ', percent);
    // let movieData = dataMovie.map(())
    return (
      <div className="Parent1">
        <MuiThemeProvider theme={theme}>
          <Grid container spacing={8}>
            <Grid item xl={3} lg={3} md={3} sm={9} xs={12}>
              <div className='leftPanel'>
                <LeftPanel
                  data={this.props.data}
                />
              </div>
            </Grid>
            <Grid item xl={9} lg={9} md={9} sm={9} xs={12}>
              <Grid container spacing={8}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <div className='chart'>
                    <Chart
                      data={this.props.data}
                    />
                  </div>
                </Grid>
                <br/>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <div className='listData'>
                    <DataList
                      data={this.props.data}
                      salesData={this.state.salesData}
                      updateState={this.updateState}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

// <h1>Parent1.js AAaabcd in Open Sans</h1>
// <h1 className='productTitle'>ASICS</h1>
// <p className='productSubTitle'>ASICS Mens Gel Venture S Trail Running Shoes</p>
// <p className='currentDollarAmount'>$54.79</p>
// <p className='changedDollarAmount'>{this.changedDollarAmount(changedAmount, percent)}</p>
// <p>prior week</p>
// <p>Parent1.js AAaabcd in Open Sans</p>

export default Stackline;
