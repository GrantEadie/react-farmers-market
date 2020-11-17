import React from 'react';
import MonthList from './MonthList';

class MonthControl extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      monthVisableOnPage: "November"
    };
  }

  render(){
    // let currentVisibleMonth = null;
    
    return (
      <React.Fragment>
        <MonthList />
      </React.Fragment>
    )
  }
}

export default MonthControl;