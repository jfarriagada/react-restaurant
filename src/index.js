import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory } from 'react-router'
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Lienzo from './Lienzo'
import Platillos from './Platillos'


ReactDOM.render(
  <Lienzo/>,
  document.getElementById('root')
);
