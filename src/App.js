import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon';
import Item from './Item';
import Move from './Move';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.onNavClick = this.onNavClick.bind(this);
  }

  onNavClick(id) {
    console.log(id);
  }

  render() {
    return (
      <div className="container">
        <div className="App">
          <div className="App-header">
            <h2>PokeDex</h2>
          </div>
          <header className="header">
            <div className="constrain">
              <nav className="navigation">
                <a className="nav-toggle" href="#">
                  <span className="trigger">&#9776;</span>
                  <ul>
                    <li><Link to='/Pokemon' activeClassName="active">Pokemon</Link></li>
                    <li><Link to='/Move' activeClassName="active">Moves</Link></li>
                    <li><Link to='/Item' activeClassName="active">Items</Link></li>
                  </ul>
                </a>
              </nav>
            </div>
          </header>
        </div>
        <div className="pokeScroll">
          {this.props.children}
        </div>
      </div>

    );
  }

}

export default App;
