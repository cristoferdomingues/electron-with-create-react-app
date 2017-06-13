import './Alerts.css';
import React, { Component } from 'react';
import AlertsNav from './AlertsNav';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

export class Alerts extends Component {
  render() {
    return (
      <AlertsNav router={this.props.router}>
        {this.props.children}
      </AlertsNav>
    );
  }
}

export class Info extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      message: ''
    };
  }

  showInfoAlert() {
    let _self = this;
    const electron = window.require('electron');
    const ipc = electron.ipcRenderer;
    ipc.send('open-information-dialog');
    ipc.once('information-dialog-selection', function(event, index) {
      let message = 'You selected ';
      if (index === 0) message += 'yes.';
      else message += 'no.';
      _self.setState({ message: message });
      _self.handleOpen();
    });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton label="OK" primary={true} onTouchTap={this.handleClose} />
    ];

    return (
      <div>
        <Card>
          <CardHeader
            title="Electron/React"
            subtitle="Info Dialog"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton
              label="Test Info"
              onTouchTap={() => this.showInfoAlert()}
            />
          </CardActions>
          <CardText expandable={true}>
            dialog
            Display native system dialogs for opening and saving files,
            alerting,
            etc.
          </CardText>
        </Card>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {this.state.message}
        </Dialog>
      </div>
    );
  }
}

export const Error = () => {
  const showErrorAlert = () => {
    const electron = window.require('electron');
    const ipc = electron.ipcRenderer;
    ipc.send('open-error-dialog');
  };

  return (
    <Card>
      <CardHeader
        title="Electron/React"
        subtitle="Error Dialog"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardActions>
        <FlatButton label="Test Error" onTouchTap={() => showErrorAlert()} />
      </CardActions>
      <CardText expandable={true}>
        dialog
        Display native system dialogs for opening and saving files, alerting,
        etc.
      </CardText>
    </Card>
  );
};
