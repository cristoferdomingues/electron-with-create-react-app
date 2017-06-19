import './Printer.css';

import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import Toggle from 'material-ui/Toggle';
import LinearProgress from 'material-ui/LinearProgress';
import ActionImage from 'material-ui/svg-icons/image/image';
class Printer extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      open: false,
      showProgressBar: false,
      printSilently: true
    };
  }
  printImage() {
    this.setState({ showProgressBar: true });
    const ipc = window.require('electron').ipcRenderer;
    ipc.send('print', this.state.printSilently);
    ipc.once('printed', (event, path) => {
      this.setState({
        message: 'Image has been printed successfully!',
        open: true,
        showProgressBar: false
      });
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  toggleChange = (event, isSilently) => {
    this.setState({ printSilently: isSilently });
  };

  render() {
    return (
      <div>
        <h1>Lets print some Sh*t!!</h1>
        <RaisedButton
          label="Print it!!"
          secondary={true}
          icon={<ActionImage />}
          onTouchTap={() => this.printImage()}
        />
        <Toggle
          label="Silently?"
          defaultToggled={true}
          onToggle={this.toggleChange}
          labelPosition="right"
          style={{ margin: 20 }}
        />
        <div className="Printer-progress">
          {this.state.showProgressBar
            ? <LinearProgress mode="indeterminate" />
            : null}
        </div>
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default Printer;
