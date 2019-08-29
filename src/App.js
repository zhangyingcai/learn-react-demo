import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome/welcome';
import Comment from './components/Comment/Comment'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <section>
        <Comment></Comment>
      </section>
      <section>
        <Welcome></Welcome>
      </section>
    </div>
  );
}

export default App;
