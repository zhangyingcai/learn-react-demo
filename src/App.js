import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome/welcome';
import Comment from './components/Comment/Comment';
import List from './components/List/List';
import Clock from './components/Clock/Clock';
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
      <section>
        <List></List>
      </section>
      <section>
        <Clock></Clock>
      </section>
    </div>
  );
}

export default App;
