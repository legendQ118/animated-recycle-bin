const {ipcMain} = require('electron')
const {createPopWindow} = require('./pop')

let popWin
exports.registeredApi = () => {
    // create pop win when app start running
    popWin = createPopWindow()

    ipcMain.on('test', (ev, data)=>{
        console.log("accept msg in main process!")
        console.log(data)
        MakePop()
    })

    ipcMain.on('setPopDraggable', (ev, bool) => {
        // from main process send msg to pop window process.
        MakePop().webContents.send('setPopDraggable', bool)
    })
}

function MakePop() {
    if (popWin != null)
        return popWin
    else
        return createPopWindow()
}
