import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionImage from 'material-ui/svg-icons/image/image';
class Printer extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }
  printImage() {
    const ipc = window.require('electron').ipcRenderer;
    ipc.send('print');
    ipc.once('printed', (event, path) => {
      this.setState({ message: 'Image has been printed successfully!' });
    });
  }
  render() {
    return (
      <div>
        <h1>Lets print some picture!</h1>
        <RaisedButton
          label="Print a pic"
          secondary={true}
          icon={<ActionImage />}
          onTouchTap={() => this.printImage()}
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Printer;
