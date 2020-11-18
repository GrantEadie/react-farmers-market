import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

//below: we use a .map loop to loop through the tickets. We pass in index and use it to assign a unique key to help differentiate them
function CommentList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.commentList.map((comment, index) =>
        <Comment 
          firstName={comment.firstName}
          comment={comment.comment}
          key={index}/>
      )}
    </React.Fragment>
  );
}
CommentList.propTypes = {
  commentList: PropTypes.array
};

export default CommentList;