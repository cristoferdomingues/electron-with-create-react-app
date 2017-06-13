import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionPdf from 'material-ui/svg-icons/image/picture-as-pdf';
class PDF extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }
  cratePDF() {
    const ipc = window.require('electron').ipcRenderer;
    ipc.send('print-to-pdf');
    ipc.once('wrote-pdf', (event, path) => {
      this.setState({ message: `Wrote PDF to: ${path}` });
    });
  }

  render() {
    return (
      <div>
        <h1>PDF Creator here!</h1>
        <RaisedButton
          label="Create PDF"
          secondary={true}
          icon={<ActionPdf />}
          onTouchTap={() => this.cratePDF()}
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default PDF;
