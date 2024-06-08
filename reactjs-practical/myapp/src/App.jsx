import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//import reportWebVitals from './reportWebVitals';

function App() {
 // reportWebVitals(console.log)
let  [ count, setcount ]=useState(0)
  return (
    <div className="App">
      { 
        console.log('Amrapali : ', count)
      

      }
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      <button type="button" value="Save" onClick={ ()=>{ setcount(count+1)} } >Save {count}</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amrapali Practicing React

        </a>
      </header>
    </div>
  );
}

export default App;
