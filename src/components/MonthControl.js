import React from 'react';
import MonthList from './MonthList';

class MonthControl extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      monthVisibleOnPage: 2
    };
  }
    handleClickUp = () => {
      if (this.state.monthVisibleOnPage >= 11){
        this.setState({monthVisibleOnPage: 0})
      }
      else {
        this.setState(prevState => ({
          monthVisibleOnPage: prevState.monthVisibleOnPage+1}));
      }
    }
      

    handleClickDown = () => {
      if (this.state.monthVisibleOnPage <= 0){
        this.setState({monthVisibleOnPage: 11})
      } 
      else {
        this.setState(prevState => ({
          monthVisibleOnPage: prevState.monthVisibleOnPage-1}));
      }      
    }

  render(){
    let currentVisibleState = null;
    currentVisibleState = <MonthList 
    currentIndex={this.state.monthVisibleOnPage}/>
    
    return (      
      <React.Fragment>
        <button className="arrow btn btn-outline-dark btn-sm" onClick={this.handleClickDown}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></button>
        <button className="arrow btn btn-outline-dark btn-sm" onClick={this.handleClickUp}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></button>    
        {currentVisibleState}    
        
      </React.Fragment>
    )
  }
}

export default MonthControl;