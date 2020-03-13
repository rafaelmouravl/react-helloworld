import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Primeiro programa em React!</code>
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/rafaelmouravl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin Rafael Moura
        </a>
      </header>
    </div>
  );
}

export default App;
