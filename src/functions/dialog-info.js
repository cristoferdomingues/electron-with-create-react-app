const { ipcMain, dialog } = require('electron');

ipcMain.on('open-information-dialog', function(event) {
  const options = {
    type: 'info',
    title: 'Information',
    message: "This is an information dialog. Isn't it nice?",
    buttons: ['Yes', 'No']
  };

  dialog.showMessageBox(options, function(index) {
    event.sender.send('information-dialog-selection', index);
  });
});

ipcMain.on('open-error-dialog', function() {
  dialog.showErrorBox('An Error Message', 'Demonstrating an error message.');
});

exports.module;
