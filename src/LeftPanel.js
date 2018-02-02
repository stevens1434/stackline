import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import Card, { CardMedia, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import './App.css';

class LeftPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.TagRender = this.TagRender.bind(this);
  }

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
