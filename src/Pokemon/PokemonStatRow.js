import React, { Component } from 'react';
import './PokemonHolder.css';

export default (props)=>(
  <div className="stat">
       <p>{props.name}: {props.base_stat}</p>
  </div>
);
