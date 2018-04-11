import React, { Component } from 'react';
import mockdata from '../MOCK_DATA.json';
import '../App.css';

class ShowData extends Component {
  constructor(props){
    super(props);

    this.state = {
      parsedData: undefined
    }
  }
  componentDidmount(){

  }

  render() {
    const data = this.state.parsedData || mockdata;
    
    return (
      <div className="show-data">
        <ul>
          {
            data.map((person,index)=>{
              const test = JSON.stringify(person);
              return <li key={person.id}>{test}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default ShowData;

// Change the mockdata as fit to have different data and better results.

// 1) Create an application that applies filters to the mockdata. 
// It will display the data on the same page as the filters.

// 2) Filters can be added on top of on another. 
// After applying a filter, you can add another of the same. 
// This should update the data rendered.

// 3) On refresh, this data will still be filtered.

// 4) Create a component that shows each filter that has been applied with 
// an x next to it's name so that I can click that button and remove the filter 
// and the data rendered will update.