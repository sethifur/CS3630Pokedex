import React, { Component } from 'react';
import './PokemonHolder.css';

class PokemonRow extends Component{

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="pokemon">
           <p>{this.props.number}</p>
           <img src={this.props.sprite} style='height:40px;'/>
           <p style="float:left;">{this.props.name}</p>
      </div>
      );
  }
}
export default PokemonRow;
