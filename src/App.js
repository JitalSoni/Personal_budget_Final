import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className = "mainContainer">
        <Switch>
          <Route path="/">
            <HomePage/>
            </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
   