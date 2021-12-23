import logo from './logo.svg';
import './App.css';
import Users from './Components/Users';
import Tablerow from './Display_components/Tablerow';
import Counter from './Components/Counter';
import FirstClass from './Classes_Conporents/FirstClass';
import Site from './Components/Site';
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <Site/>
    </React.Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
       
    //  <Counter/>
    //     <Users/>
    //     <Tablerow/>
    //     <FirstClass/>
    //   </header>
    // </div>
  );
}

export default App;
