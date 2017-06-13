const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;

ipc.on('print', function(event) {
  console.log('======>Print');
  const win = new BrowserWindow({ width: 300, height: 300 });
  win.loadURL('http://lorempixel.com/g/300/300/people');
  win.webContents.on('did-finish-load', () => {
    console.log('======>did-finish-load');
    win.webContents.print(
      { silent: false, printBackground: false, deviceName: '' },
      function(error, data) {
        if (error) throw error;
        event.sender.send('printed');
        win.close();
      }
    );
  });
});

exports.module;
