
import React from 'react'

import A from '@microfrontend-monorepo/a/dist/App'
import B from '@microfrontend-monorepo/b/dist/App'
import logo from './logo.svg';
import './App.css';

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
        <A />
        <B />
      </header>
    </div>
  );
}

export default App;
