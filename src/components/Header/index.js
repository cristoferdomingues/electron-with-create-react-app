import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import logo from './../../logo.svg';

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="My Electron React Test"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.props.onLeftIconButtonTouchTap}
        />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Electron</h2>
        </div>
      </div>
    );
  }
}

export default Header;
