import React, { Component } from 'react';
import mockdata from '../MOCK_DATA.json';

class FilterDataForm extends Component {
    constructor(props){
      super(props);
  
      this.filter = this.filter.bind(this);
    }
  
    filter(e) {
      let newData = mockdata;
      const state = {};
      const checked = e.target.name;
  
      new Promise((resolve, reject)=> {
        setTimeout(() => resolve(1), 1);
  
      }).then((result) => {
        if (this.props.emailFilter || checked === 'emailFilter' ) {
          if (checked === 'emailFilter' && this.props.emailFilter) {
            state.emailFilter = '!prevState.emailFilter';
          } else {
            newData = newData.filter(person => person.email.includes('@gmail'));
            state.emailFilter = '!prevState.emailFilter';
          }
        }
      }).then(() => { 
        if (this.props.femaleFilter || checked === 'femaleFilter' ){
          if (checked === 'femaleFilter' && this.props.femaleFilter) {
            state.femaleFilter = '!prevState.femaleFilter';
          } else {
            newData = newData.filter(person => person.gender === "Female");
            state.femaleFilter = '!prevState.femaleFilter';
          }
        } 
      }).then(() => { 
        this.props.handleStateData(checked, newData);
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
                checked={this.props.femaleFilter}
                onChange={this.filter} />
            </label>
            <br />
            <label>
              Filter By Email (gmail):
              <input
                name="emailFilter"
                type="checkbox"
                checked={this.props.emailFilter}
                onChange={this.filter} />
            </label>
          </form>
        </div>
      );
    }
  }
  export default FilterDataForm;