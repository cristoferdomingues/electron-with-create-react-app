import './App.css';
import React, { Component } from 'react';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  browserHistory
} from 'react-router';
import Header from './components/Header';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { openDrawer: false };
  }

  handleToggle = () => this.setState({ openDrawer: !this.state.openDrawer });

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Header onLeftIconButtonTouchTap={this.handleToggle} />
          <Drawer
            docked={false}
            width={200}
            open={this.state.openDrawer}
            onRequestChange={openDrawer => this.setState({ openDrawer })}
          >
            <MenuItem onTouchTap={this.handleClose}>Get Screen Shot</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Print PDF</MenuItem>
          </Drawer>
          <p className="App-intro">
            Hello Electron!
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
