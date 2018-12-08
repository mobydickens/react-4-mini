import React, { Component } from 'react';
import './App.css';
import routes from './routes.js';
import {Link} from 'react-router-dom';
import {HashRouter as Router, Switch, Route};
import Home from './Home.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={ Home }/>
      </Router>
    );
  }
}

export default App;
