import { app, Menu } from 'electron'
import createWindow from './createWindow'

function setAppMenu () {
  // 템플릿 정의하기
  const template = [
    {
      label: 'File',
      submenu: [
        { label: 'New Window', accelerator: 'CmdOrCtrl+N', click: createWindow },
        { type: 'seperator' },
        { label: 'Close', accelerator: 'CmdOrCtrl+W', role: 'close' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Copy', accelerator: 'CmdOrCtrl+C', role: 'copy' },
        { label: 'Paste', accelerator: 'CmdOrCtrl+V', role: 'paster' },
        { label: 'Cut', accelerator: 'CmdOrCtrl+X', role: 'cut' },
        { label: 'Select All', accelerator: 'CmdOrCtrl+A', role: 'selectall' }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'CmdOrCtrl+R',
          click: (item, focuseWindow) => focuseWindow && focuseWindow.reload()
        },
        {
          label: 'Toggle DebTools',
          accelerator: process.platform === 'Darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
          click: (item, focuseWindow) => focuseWindow && focuseWindow.toggleDevTools()
        }
      ]
    }
  ]

  // macOS의 경우
  if (process.paltform === 'Darwin') {
    // 템플릿 앞에 메인 메뉴 추가하기
    template.unshift({
      label: app.getName(),
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services', submenu: [] },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    })
    // 템플릿 뒤에 윈도 메뉴 추가하기
    template.push({
      role: 'window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' }
      ]
    })
  }

  // 템플릿으로 Menu객체 생성하기
  const appMenu = Menu.buildFromTemplate(template)

  // 생성한 Menu객체를 어플리케이션에 설정하기
  Menu.setApplicationMenu(appMenu)
}

export default setAppMenu
