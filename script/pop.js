const {BrowserWindow} = require('electron')
const path = require('path')

exports.createPopWindow = () => {
    let popWindow = new BrowserWindow({
        width: 60,
        height: 90,
        show: false,
        transparent: true,
        frame: false,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'PopWinPreloader.js'),
            contextIsolation: false,
            webSecurity: false
        }
    })
    popWindow.setMenu(null)
    // popWindow.webContents.openDevTools()
    popWindow.loadFile("dist/pop.html")
        .then(/* do nothing */)
    popWindow.once('ready-to-show', ()=>{
        popWindow.show();
    })
    popWindow.webContents.openDevTools({mode: "detach"})
    console.log('create pop window.')
    return popWindow
}

