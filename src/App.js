import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon';
import Item from './Item';
import Move from './Move';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';

class App extends Component {
  constructor(props){
    super(props);
    this.onNavClick = this.onNavClick.bind(this);
  }

  onNavClick(id){
    console.log(id);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>PokeDex</h2>
        </div>
        <div className="App-navigation">
          <div>
            <Link to='/Pokemon' activeClassName="active">Pokemon</Link>
          </div>
          <div>
            <Link to='/Move' activeClassName="active">Moves</Link>
          </div>
          <div>
            <Link to='/Item' activeClassName="active">Items</Link>
          </div>
        </div>
        <div className="pokeScroll">
        {this.props.children}
        </div>
      </div>
    );
  }

}

export default App;
