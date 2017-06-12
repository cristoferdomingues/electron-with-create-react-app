import './App.css';
import React, { Component } from 'react';
import { Root, Home, Alerts, Info, Error } from './components';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  constructor() {
    super();
    console.log('Info', Info);
  }
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Root}>
          <IndexRoute component={Home} />
          <Route path="/alerts" component={Alerts}>
            <IndexRoute component={Info} />
            <Route path="information" component={Info} />
            <Route path="error" component={Error} />
          </Route>
        </Route>
      </Router>
    );
  }
}

export default App;
