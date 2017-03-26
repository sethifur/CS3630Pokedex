import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonHolder from './Pokemon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">

        </p>
        <PokemonHolder />
      </div>
    );
  }
}

export default App;
