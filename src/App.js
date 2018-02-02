import React, { Component } from 'react';
import Stackline from './Stackline';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import data from './data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="fixed">
          <Toolbar>
            <Typography type="title" color="inherit" className='MenuTitle'>
              Stackline
            </Typography>
          </Toolbar>
        </AppBar>
        <header className="App-header">
          <h1>Stackline</h1>
        </header>
        <Stackline
          data={data}
        />
      </div>
    );
  }
}

export default App;
