import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Card from 'material-ui/Card';
import './App.css';

class DataList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      sortHighToLow: true
    }
    this.sort = this.sort.bind(this);
  }

  sort(column) {
    // console.log('column: ', column);
    // let _column = column
    // console.log('column: ', _column)
    // console.log('column: ', [_column])
    // let currentSalesData = this.props.salesData;
    // console.log('currentSalesData UNSORTED!!!!!!!!!!!: ', currentSalesData);
    // if (this.state.sortHighToLow === true) {
    //   for (var i in currentSalesData) {
    //     // let index = [i];
    //     // console.log("in for loop: ", currentSalesData[i][_column])
    //     currentSalesData.sort(function(a, b) {
    //       console.log('sorting....: ', a._column - b._column)
    //       console.log('currentSalesData SORTED: ', currentSalesData);
    //     })
    //   }
    //
    //   console.log("sort it from low to high and change state to false")
    //   return ( <p>{console.log('byee')}</p> )
    // } else {
    //   console.log('sort it from high to low and change state to true')
    //   return ( <p>{console.log('byee')}</p> )
    // }
  }


  render() {
    if (this.props.data && this.props.salesData) {
      let data = this.props.data;
      let salesData = this.props.salesData;
      console.log('data: ', data);
      const { order, orderBy } = this.props;
      return (
        <div className="leftPanel">
          <Card>
            <Table className='table'>
              <TableHead>
                <TableRow>
                  <TableCell onClick={() => this.sort('weekEnding')}>WEEK ENDING</TableCell>
                  <TableCell onClick={() => this.sort('retailSales')} numeric>RETAIL SALES</TableCell>
                  <TableCell onClick={() => this.sort('wholesaleSales')} numeric>WHOLESALE SALES</TableCell>
                  <TableCell onClick={() => this.sort('unitsSold')} numeric>UNITS SOLD</TableCell>
                  <TableCell onClick={() => this.sort('retailerMargin')} numeric>RETAILER MARGIN</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {salesData.map((records, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{records.weekEnding}</TableCell>
                      <TableCell numeric>{records.retailSales}</TableCell>
                      <TableCell numeric>{records.wholesaleSales}</TableCell>
                      <TableCell numeric>{records.unitsSold}</TableCell>
                      <TableCell numeric>{records.retailerMargin}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Card>
        </div>
      );
    } else {
      return (
        <p>Loading...</p>
      )
    }
  }
}

export default DataList;
