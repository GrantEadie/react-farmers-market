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
        <button onClick={this.handleClickUp}>up</button>        
        <button onClick={this.handleClickDown}>down</button>
        {currentVisibleState}
        
      </React.Fragment>
    )
  }
}

export default MonthControl;