import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img alt="App-logo" src={logo} className="App-logo" />
      <p>Hello, World!</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
