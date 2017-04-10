import React, { Component } from 'react';
import './PokemonHolder.css';

export default (props)=>(
  <div className="moves">
       <p>{props.number}  {props.name}</p>
  </div>
);
