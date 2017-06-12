import React, { Component } from 'react';
import Header from '../Header';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { openDrawer: false };
  }

  handleToggle = () => this.setState({ openDrawer: !this.state.openDrawer });

  handleClose = () => this.setState({ openDrawer: false });

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
            <MenuItem onTouchTap={this.handleClose}>
              <Link to="/alerts">Alerts</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Print PDF</MenuItem>
          </Drawer>
          <div className="App-intro">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
