import React from "react";
import Header from "./Header";
import MonthControl from "./MonthControl";
import MarketControl from "./MarketControl";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <div class="container">
        <div class="row">          
          <div class="col-md-6">
            <MonthControl />
          </div>
          <div class="col-md-6">
            <MarketControl />
          </div>
        </div>
      </div>      
    </React.Fragment>
  );
}

export default App;