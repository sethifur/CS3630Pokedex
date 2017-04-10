import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Route, IndexRoute, Router, browserHistory } from 'react-router';
import Pokemon from './Pokemon/PokemonHolder';
import Item from './Items/ItemHolder';
import Move from './Moves/MoveHolder';




ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//   <Router history={browserHistory}>
//    <Route path="/" component={App}>
//      <IndexRoute component={Pokemon}/>
//        <Route path="/pokemon" component={Pokemon}/>
//        <Route path="/item" component={Item}/>
//        <Route path="/move" component={Move}/>
//    </Route>
//  </Router>
// ),document.body);
