import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import Create from './components/router/create.component';
import Edit from './components/router/edit.component';
import Index from './components/router/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to={'home'}>Home</Link>
            </li>
            <li>
              <Link to={'create'}>Create</Link>
            </li>
            <li>
              <Link to={'index'}>Index</Link>
            </li>
          </ul>
          <br />
          <h2>Welcome to React CRUD Tutorial</h2> <br />
          <Switch>
            <Route exact path='/create' component={Create} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/index' component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
