import React, { Component } from 'react';
import {
  BottomNavigation,
  BottomNavigationItem
} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconInfo from 'material-ui/svg-icons/alert/warning';
import IconError from 'material-ui/svg-icons/alert/error';

const infoIcon = <IconInfo />;
const errorIcon = <IconError />;

const dialogsRoutes = {
  0: '/alerts/information',
  1: '/alerts/error'
};

export default class AlertsNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  select = index => {
    this.setState({ selectedIndex: index });
    this.props.router.push(dialogsRoutes[index]);
  };

  render() {
    return (
      <div>
        <div className="Alerts-container">
          <div className="Alerts-content">{this.props.children}</div>
        </div>
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Info Dialogs"
              icon={infoIcon}
              onTouchTap={() => this.select(0)}
            />
            <BottomNavigationItem
              label="Error Dialogs"
              icon={errorIcon}
              onTouchTap={() => this.select(1)}
            />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}
