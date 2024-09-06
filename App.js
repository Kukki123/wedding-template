//import logo from './logo.svg';

import React from 'react';
import "./App.css";
/*
import FunctionComp  from './Components/FunctionComp';
import Classprops from './Components/Classprops';
function App() {
  return (
    <div>
<h1>Hello welcom</h1>

<h1> I am learning</h1>
<FunctionComp/>
<Classprops name="learns 1" place="x"><button >click</button>
</Classprops>
<Classprops name="learns 2 "place="y"/>
<Classprops name="learns 3"place="qw"/>
 </div>
    
  );
}
export default App;  
*/
import NewComp from './Components/NewComp';
class App extends React.Component{
  styles={
     fontStyle:"bold",color:"teal"
  };
  render(){
    return(
      <div class="App">
        <h1 style={this.styles}>Welcom !!!</h1>
      <NewComp/>
      </div>
    );
}
}

export default App;
