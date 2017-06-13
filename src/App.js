import './App.css';
import React, { Component } from 'react';
import { Root, Home, Alerts, Info, Error, PDF, Printer } from './components';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
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
          <Route path="/pdf" component={PDF} />
          <Route path="/printer" component={Printer} />
        </Route>
      </Router>
    );
  }
}

export default App;
