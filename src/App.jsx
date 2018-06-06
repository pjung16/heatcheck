import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './routes/HomePage';
import Login from './routes/Login';

export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}