import React from 'react';
import NewCommentForm from './NewCommentForm';
import CommentList from './CommentList';

class CommentControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterCommentList: []
    };
    //Line above: sets the default state to be that the list is showing but the form is hidden
  }

  handleClick = () => { 
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewCommentToList = (newComment) => {
    const newMasterCommentList = this.state.masterCommentList.concat(newComment);
    this.setState({masterCommentList: newMasterCommentList,
    formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; // new code
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCommentForm onNewCommentCreation={this.handleAddingNewCommentToList}/>;
      buttonText = "Return to Comment List"; // new code
    } else {
      //Line below: Calls TicketList Function, passing in current state of masterTicketList
      currentlyVisibleState = <CommentList commentList={this.state.masterCommentList}/>;
      buttonText = "Add Review"; // new code
    }
    return (
      <React.Fragment>
        <h3>reviews for avery's organics</h3>
        {currentlyVisibleState}
        <button className="comments btn btn-outline-dark btn-block btn-sm" onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}
export default CommentControl;