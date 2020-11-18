import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewCommentForm(props){

  function handleNewCommentFormSubmission(event) {
    event.preventDefault();
    props.onNewCommentCreation({firstName: event.target.firstName.value, comment: event.target.comment.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewCommentFormSubmission}>
        <div className="form-group">
        <input
          className="form-control"
          type='text'
          name='firstName'
          placeholder='Enter First Name' />
          <br/><br/>
        <textarea 
          className="form-control"
          type='text'
          name='comment'
          placeholder='Review'/>
          <br/><br/>
        <button className="comments btn btn-outline-dark btn-block btn-sm" type='submit'>Submit Review</button>

        </div>
      </form>
    </React.Fragment>
  );
}

NewCommentForm.propTypes = {
  onNewCommentCreation: PropTypes.func
};

export default NewCommentForm;