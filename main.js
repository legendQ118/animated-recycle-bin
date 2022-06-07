const { app, BrowserWindow, screen } = require('electron')
const path = require('path')
const {registeredApi} = require('./script/api')

let mainWindow

const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        width: screen.getPrimaryDisplay().size.width * 0.75,
        height: screen.getPrimaryDisplay().size.height * 0.75,
        center: true,
        show: false,
        webPreferences: {
            preload: path.join(__dirname, 'script/MainWinPreloader.js'),
            contextIsolation: false,
            webSecurity: false
        }
    })
    mainWindow.setMenu(null)
    mainWindow.webContents.openDevTools()
    mainWindow.loadFile("dist/main.html")
        .then(/* do nothing */)
    mainWindow.once('ready-to-show', ()=>{
        mainWindow.show();
    })
}

app.whenReady().then(() => {
    registeredApi()
    createMainWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0)
            createMainWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit()
})
