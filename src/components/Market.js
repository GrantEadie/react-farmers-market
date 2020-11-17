import React from "react";
import PropTypes from "prop-types";

function Market(props){
  return (
    <React.Fragment>
      <h3>{props.day} - {props.location}</h3>
      <p><em>{props.hours} - Booth: {props.booth}</em></p>
      <hr/>
    </React.Fragment>
  );
}
//Below: is required can be tacked on to make a property required
Market.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};
export default Market;