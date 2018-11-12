import { BrowserWindow } from 'electron'

let win

const path = require('path')
var APP_PATH = path.resolve('__dirname', '../index.html')
function createWindow () {
  win = new BrowserWindow()
  win.loadURL(APP_PATH)
  win.on('close', () => {
    win = null
  })
}

export default createWindow
