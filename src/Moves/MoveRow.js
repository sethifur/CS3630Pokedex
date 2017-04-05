import React, { Component } from 'react';
import './MoveHolder.css';

export default (props)=>(
  <div className="moves">
       <p>{props.number}  {props.name}</p>
  </div>
);
