import React, { Component } from 'react';
import Card from 'material-ui/Card';
import {LineChart, Line, XAxis, Tooltip, ResponsiveContainer} from 'recharts';
import './App.css';

class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    if (this.props.data) {
      let data = this.props.data;
      let sales = this.props.data[0].sales
      console.log('data: ', data);
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
