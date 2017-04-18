import React, { Component } from 'react';
import './PokemonHolder.css';

export default (props)=>(
  <div className="pokemon">
       <p>{props.number}</p>
       <img src={props.sprite}/>
       <p >{props.name}</p>
  </div>
);
