const os = window.require ? window.require('os') : undefined;

import './Home.css';
import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      systemInfo: {}
    };
  }

  componentWillMount() {
    if (os) {
      this.setState({
        systemInfo: {
          cpu: os.cpus()[0],
          homeDir: os.homedir(),
          freemem: os.freemem(),
          network: os.networkInterfaces(),
          screenSize: window.require('electron').screen.getPrimaryDisplay()
            .workAreaSize
        }
      });
    }
  }

  getSysInfo() {
    if (os) {
      let {
        cpu,
        homeDir,
        freemem,
        network,
        screenSize
      } = this.state.systemInfo;
      return (
        <div className="Sys-info">
          <p>System Info:</p>
          <span>
            <label>HOME_DIR:</label>
            {homeDir}
          </span>
          <span>
            <label>CPU:</label>
            {cpu.model}
          </span>
          <span>
            <label>Free Memory:</label>
            {freemem}
          </span>
          <span>
            <label>Network Ip:</label>
            {network['Wi-Fi'][0].address}
          </span>
          <span>
            <label>Screen Work Area Size:</label>
            {screenSize.width}x{screenSize.height}
          </span>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1> Welcome Home Babe!</h1>
        {this.getSysInfo()}
      </div>
    );
  }
}

export default Home;
