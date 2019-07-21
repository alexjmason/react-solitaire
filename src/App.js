import React from 'react';
import logo from './logo.svg';
import Board from './Board';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Solitaire
        </h1>
      </header>
      <div className="App-content">
        <Board></Board>
      </div>
    </div>
  );
}

export default App;
