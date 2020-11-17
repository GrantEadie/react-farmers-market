import React from "react";
import Header from "./Header";
import MonthControl from "./MonthControl";
import MarketControl from "./MarketControl";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">          
          <div className="col-md-6">
            <MonthControl />
          </div>
          <div className="col-md-6">
            <MarketControl />
          </div>
        </div>
      </div>      
    </React.Fragment>
  );
}

export default App;