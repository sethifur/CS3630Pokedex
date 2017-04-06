import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonHolder from './Pokemon';
import ItemHolder from './Items';
import MoveHolder from './Moves';
import Circle from 'react-shapes';
import { Link } from 'react-router';

class App extends Component {
  constructor(props){
    super(props);
    this.onNavClick = this.onNavClick.bind(this);
  }

  onNavClick(id){
    return
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>PokeDex</h2>
        </div>
        <div className="App-navigation">
          <Link to="/pokemon">
            Pokemon
          </Link>
          <Link to="/item">
            Items
          </Link>
          <Link to="/move">
            Moves
          </Link>
        </div>
        <div className="pHolder">

          <PokemonHolder />
        </div>
      </div>
    );
  }
}

export default App;
