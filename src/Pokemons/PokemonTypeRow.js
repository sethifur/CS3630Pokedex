import React, { Component } from 'react';
import './PokemonHolder.css';

export default (props)=>(
  <div className="type">
       <img src={'/static/images/types/' + props.name + '.png'}/>
  </div>
);
