import React, { Component } from 'react';
import Header from '../Header';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

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

  showInfoAlert() {
    const electron = window.require('electron');
    const ipc = electron.ipcRenderer;
    ipc.send('open-information-dialog');
  }

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
            <MenuItem onTouchTap={this.showInfoAlert}>
              Show Info Altert
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
