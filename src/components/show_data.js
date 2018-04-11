import React, { Component } from 'react';
import mockdata from '../MOCK_DATA.json';
import '../App.css';

class ShowData extends Component {
  constructor(props){
    super(props);

    this.state = {
      filteredData: undefined,
      femaleFilter: false,
      maleFilter: false,
      emailFilter: false
    }
    this.filterByGenderFemale = this.filterByGenderFemale.bind(this);
    this.filterByGenderMale = this.filterByGenderMale.bind(this);
    this.filterByEmail = this.filterByEmail.bind(this);
  }

  filterByGenderFemale() {
    console.log('working')
  }

  filterByGenderMale() {
    console.log('working2')
  }

  filterByEmail() {
    console.log('workindfsg')
  }

  render() {
    const data = this.state.filteredData || mockdata;
    
    return (
      <div>  
        <form className="form-style">
          <label>
            Filter By Gender (Female):
            <input
              name="Female"
              type="checkbox"
              checked={this.state.femaleFilter}
              onChange={this.filterByGenderFemale} />
          </label>
          <br />
          <label>
            Filter By Gender (Male):
            <input
              name="Male"
              type="checkbox"
              checked={this.state.maleFilter}
              onChange={this.filterByGenderMale} />
          </label>
          <br />
          <label>
            Filter By Email (gmail):
            <input
              name="gmail"
              type="checkbox"
              checked={this.state.emailFilter}
              onChange={this.filterByEmail} />
          </label>
        </form>
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