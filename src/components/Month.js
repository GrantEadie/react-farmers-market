import React from "react";
import PropTypes from "prop-types";

function Month(props){
  return(
    <React.Fragment>
      <h3>{props.month}</h3>
      {props.selection.map((produce, index) =>
          <p key={index}>{produce}</p>
        )}
      
      </React.Fragment>
  );
}

Month.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
}

export default Month;