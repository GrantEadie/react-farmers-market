import React from "react";
import PropTypes from "prop-types";





function Month(props){

  const ulStyle = {    
    columns: 2,    
    padding: 0
  }

  return(
    <React.Fragment>
      
      <h3>{props.month}</h3>
      <p><em>available produce</em></p>
      <hr/>
      <ul style={ulStyle}>
      {props.selection.map((produce, index) =>
          <li key={index}>{produce}</li>
          )}      
      </ul>
      
      </React.Fragment>
  );
}

Month.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
}

export default Month;