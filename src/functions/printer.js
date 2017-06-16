const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;
const url = require('url');
const path = require('path');
ipc.on('print', function(event) {
  const win = new BrowserWindow({
    width: 600,
    height: 800,
    frame: false,
    nodeIntegration: false,
    webPreferences: {
      webSecurity: false
    }
  });
  const printUrl = url.format({
    pathname: path.join(__dirname, '/../../build/index.html'),
    protocol: 'file:',
    slashes: true
  });
  win.loadURL(printUrl);
  win.show();
  win.webContents.on('did-finish-load', () => {
    console.log('======>printUrl', printUrl);
    win.webContents.print({
      silent: true,
      printBackground: false,
      deviceName: ''
    });

    setTimeout(() => {
      event.sender.send('printed');
      win.close();
    }, 10000);
  });
});

exports.module;
