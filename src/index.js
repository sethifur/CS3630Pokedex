import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Move from './Move';
import Item from './Item';
import Pokemon from './Pokemon';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Pokemon}/>
      <Route path="/pokemon" component={Pokemon}/>
        <Route path="/item" component={Item}/>
      <Route path="/move" component={Move}/>
    </Route>
  </Router>
), document.getElementById('app'))


//   <Router history={browserHistory}>
//    <Route path="/" component={App}>
//      <IndexRoute component={Pokemon}/>
//        <Route path="/pokemon" component={Pokemon}/>
//        <Route path="/item" component={Item}/>
//        <Route path="/move" component={Move}/>
//    </Route>
//  </Router>
// ),document.body);
