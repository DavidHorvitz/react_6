import logo from './logo.svg';
import './App.css';
import Users from './Components/Users';
import Tablerow from './Display_components/Tablerow';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
     <Counter/>
        <Users/>
        <Tablerow/>
      </header>
    </div>
  );
}

export default App;
