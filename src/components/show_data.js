import React, { Component } from 'react';
import mockdata from '../MOCK_DATA.json';
import Form from './form';
import DataRender from './dataRender';
import '../App.css';

class ShowData extends Component {
  constructor(props){
    super(props);

    this.state = {
      filteredData: mockdata,
      femaleFilter: false,
      emailFilter: false
    }

    this.handleStateData = this.handleStateData.bind(this);
  }

  handleStateData(checked, newData) {
    this.setState(function(prevState, props){
      return {
        filteredData: newData,
        [checked]: !prevState[checked],
      }
    });
  }

  render() {
    return (
      <div>  
        <Form handleStateData={this.handleStateData} emailFilter={this.state.emailFilter} femaleFilter={this.state.femaleFilter}/>
        <DataRender filteredData={this.state.filteredData} />
      </div>
    );
  }
}

export default ShowData;
// 3) On refresh, this data will still be filtered.