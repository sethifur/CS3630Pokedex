import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonHolder from './Pokemon';
import ItemHolder from './Items';
import MoveHolder from './Moves';
import Circle from 'react-shapes';
//import NavLink from './NavLink';

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
          <div onClick={() => this.onNavClick('PokemonHolder')}>
            Pokemon
          </div>
          <div onClick={() => this.onNavClick('ItemHolder')}>
            Items
          </div>
          <div onClick={() => this.onNavClick('MoveHolder')}>
          Moves
          </div>
        </div>
        <div className="pHolder">

          <PokemonHolder />
        </div>
      </div>
    );
  }
}

export default App;
