import './App.css';
import React, { Component } from 'react';
import Root from './components/Root';
import Home from './components/Home';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  browserHistory
} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      /*<Router history={hashHistory}>
        <Route path="/" component={Root}>
          <IndexRoute component={Home} />
        </Route>
      </Router>*/
      <Root>
        <Home />
      </Root>
    );
  }
}

export default App;
