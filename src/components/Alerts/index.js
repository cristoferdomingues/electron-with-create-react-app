import './Alerts.css';
import React, { Component } from 'react';
import AlertsNav from './AlertsNav';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export class Alerts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AlertsNav router={this.props.router}>
        {this.props.children}
      </AlertsNav>
    );
  }
}

export const Info = () => {
  const showInfoAlert = () => {
    const electron = window.require('electron');
    const ipc = electron.ipcRenderer;
    ipc.send('open-information-dialog');
  };

  return (
    <Card>
      <CardHeader
        title="Electron/React"
        subtitle="Info Dialog"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardActions>
        <FlatButton label="Test" onTouchTap={() => showInfoAlert()} />
      </CardActions>
      <CardText expandable={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
        pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  );
};

export const Error = () => {
  return <h1>Error</h1>;
};
