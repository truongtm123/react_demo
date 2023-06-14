import logo from './logo.svg';
import './App.css';
import { Profiler, useState } from 'react';
import Board from './components/Board/Board';

function App() {

  var [count,setCount] = useState(0);

  function triggerClick(){
    setCount(count+1);
  }

  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <h1>Study</h1>
      <p>Clicked number {count}</p>
      <button onClick={triggerClick}>Test</button>
      <Profiles id='test'/> */}
    <Board id="board" />



    </div>
  );
}

export default App;
