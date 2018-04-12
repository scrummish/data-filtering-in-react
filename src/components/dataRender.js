import React from 'react';

const DataRender = (props) => (
  <div className="show-data">
    <ul>
      {
        props.filteredData.map((person,index)=>{
          const test = JSON.stringify(person);
          return <li key={person.id}>{test}</li>
        })
      }
    </ul>
  </div>
);

export default DataRender;