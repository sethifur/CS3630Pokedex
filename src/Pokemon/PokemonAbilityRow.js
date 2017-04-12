import React, { Component } from 'react';
import './PokemonHolder.css';

export default (props)=>(
  <tr className="ability">
       <td>{props.name}</td>
       <td>{props.base_stat}</td>
  </tr>
);
