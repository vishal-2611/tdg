import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';
import Question from './pages/Question'
import Ikigai from './pages/Ikigai';

import { BrowserRouter as Router, Route, } from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/question" component={Question} />
      <Route path="/users" component={Users} />
      <Route path="/about" component={About} />
      <Route path="/ikigai" component={Ikigai} />
    </Router>
  );
}

export default App;
