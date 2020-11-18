import React from "react";
import PropTypes from "prop-types";

function Comment(props){
  return (
    <React.Fragment>
      
      <h4><em>{props.firstName}</em></h4>
      <p><em>{props.comment}</em></p>
      <hr/>
    </React.Fragment>
  );
}
//Below: is required can be tacked on to make a property required
Comment.propTypes = {
  firstName: PropTypes.string.isRequired,
  comment: PropTypes.string
};
export default Comment;