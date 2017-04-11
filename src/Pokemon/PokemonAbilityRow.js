import React, { Component } from 'react';
import './PokemonHolder.css';

export default (props)=>(
  <div className="ability">
       <p>{props.number}  {props.name}</p>
  </div>
);
