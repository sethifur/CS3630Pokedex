import React, { Component } from 'react';
import './ItemHolder.css';

export default (props)=>(
  <div className="items">
       <p>{props.number}</p>
       <img src={props.sprite}/>
       <p >{props.name}</p>
  </div>
);
