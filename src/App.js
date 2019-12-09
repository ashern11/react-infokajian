import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home.js';
import Jadwal from './Components/Jadwal.js';
import Maps from './Components/Maps.js';
import About from './Components/About.js';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/jadwal" exact component={Jadwal} />
        <Route path="/maps" exact component={Maps} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  );
}

export default App;
