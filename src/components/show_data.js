import React, { Component } from 'react';
import mockdata from '../MOCK_DATA.json';
import '../App.css';

class ShowData extends Component {
  constructor(props){
    super(props);

    this.state = {
      filteredData: mockdata,
      previousState: undefined,
      femaleFilter: false,
      emailFilter: false
    }
    
    this.filter = this.filter.bind(this);
  }

  filter(e) {
    let newData = mockdata;
    const state = {};
    const checked = e.target.name;

    new Promise((resolve, reject)=> {
      setTimeout(() => resolve(1), 1);

    }).then((result) => {
      if (this.state.emailFilter || checked === 'emailFilter' ) {
        if (checked === 'emailFilter' && this.state.emailFilter) {
          state.emailFilter = '!prevState.emailFilter';
        } else {
          newData = newData.filter(person => person.email.includes('@gmail'));
          state.emailFilter = '!prevState.emailFilter';
        }
      }
    }).then(() => { 
      if (this.state.femaleFilter || checked === 'femaleFilter' ){
        if (checked === 'femaleFilter' && this.state.femaleFilter) {
          state.femaleFilter = '!prevState.femaleFilter';
        } else {
          newData = newData.filter(person => person.gender === "Female");
          state.femaleFilter = '!prevState.femaleFilter';
        }
      } 
    }).then(() => { 
      this.setState(function(prevState, props){
        return {
          [checked]: !prevState[checked],
          filteredData: newData
        }
      });
    })
  }

  render() {
    return (
      <div>  
        <form className="form-style">
          <label>
            Filter By Gender (Female):
            <input
              name="femaleFilter"
              type="checkbox"
              checked={this.state.femaleFilter}
              onChange={this.filter} />
          </label>
          <br />
          <label>
            Filter By Email (gmail):
            <input
              name="emailFilter"
              type="checkbox"
              checked={this.state.emailFilter}
              onChange={this.filter} />
          </label>
        </form>
        <div className="show-data">
          <ul>
            {
              this.state.filteredData.map((person,index)=>{
                const test = JSON.stringify(person);
                return <li key={person.id}>{test}</li>
              })
            }
          </ul>
        </div>
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