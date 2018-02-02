import React, { Component } from 'react';
// import { MuiThemeProvider, theme } from 'material-ui/styles';
// import Grid from 'material-ui/Grid';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Tabs, { Tab } from 'material-ui/Tabs';
import Card, { CardMedia, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
// import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip, Pie, PieChart, Cell, Sector, ResponsiveContainer} from 'recharts';
import './App.css';
// const nf = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   minimumFractionDigits: 2,
//   maximumFractionDigits: 2
// });

class LeftPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.TagRender = this.TagRender.bind(this);
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

  TagRender(tags) {
    return(
      tags.map((records, index) => (
          <button raised size='small' className='tagButtons'>
            <span>{records}</span>
          </button>
      ))
    )
  }

  render() {
    let data = this.props.data;
    let panelMap = data.map((records, index) => (
      <span>
        <Card className="card">
          <CardMedia
            className='media'
            image={records.image}
            title="Contemplative Reptile"
          />
          <hr/>
          <CardContent>
            <Typography type="headline" component="h2">
              <h3 className='panelTitle'>{records.title}</h3>
              <p className='panelSubTitle'>{records.subtitle}</p>
            </Typography>
          <CardContent>
          <hr/>
          </CardContent>
            <Typography component="p">
              {this.TagRender(records.tags)}
            </Typography>
          </CardContent>
          <hr/>
          <div className='chartButtonHolder'>
            <Button disabled className='chartButtons'>
              OverView
            </Button>
            <br/>
            <Button color="primary" className='chartButtons'>
              Sales
            </Button>
          </div>
        </Card>
      </span>
    ))
    return (
      <div className='leftPanel'>
        {panelMap}
      </div>
    );
  }
}

export default LeftPanel;
