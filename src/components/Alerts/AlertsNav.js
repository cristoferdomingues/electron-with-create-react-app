import React, { Component } from 'react';
import {
  BottomNavigation,
  BottomNavigationItem
} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconInfo from 'material-ui/svg-icons/alert/warning';
import { browserHistory } from 'react-router';

const infoIcon = <IconInfo />;
const nearbyIcon = <IconLocationOn />;

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
    console.log(this);
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
              label="Favorites"
              icon={infoIcon}
              onTouchTap={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Nearby"
              icon={nearbyIcon}
              onTouchTap={() => this.select(2)}
            />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}
