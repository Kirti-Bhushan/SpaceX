import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
  </BrowserRouter>
);

export default App;
