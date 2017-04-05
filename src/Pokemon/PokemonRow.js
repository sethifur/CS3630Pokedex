import React, { Component } from 'react';
import './PokemonHolder.css';

// class PokemonRow extends Component{
//
//   constructor(props) {
//     super(props);
//   }
//
//   render(props){
//     return(

export default (props)=>(
  <div className="pokemon">
       <p>{props.number}</p>
       <img src={props.sprite}/>
       <p >{props.name}</p>
  </div>
);

//       );
//   }
// }
// export default PokemonRow;
