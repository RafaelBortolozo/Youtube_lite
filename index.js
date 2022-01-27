const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
  createWindow()
})

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
  })

  win.loadFile('index.html')
}