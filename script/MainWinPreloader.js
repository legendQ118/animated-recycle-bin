const {ipcRenderer} = require('electron')

//
window.$test = ()=>{
    ipcRenderer.send('test', {
        name: "legendQ118"
    })
}

// main window use this interface to change ...
window.$setPopDraggable = (bool) => {
    // send change msg to main process
    ipcRenderer.send('setPopDraggable', bool)
}
