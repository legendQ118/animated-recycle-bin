const {ipcRenderer} = require('electron')
const {readConfiguration} = require("./util.js")
const path = require("path")

ipcRenderer.on('setPopDraggable', (ev, data)=>{
    // console.log("pop render process accept", data)
    // window.$PopWin$handleDraggable(data)
    window.$setPopDraggable(data)
})

window.$AnimeConfiguration = readConfiguration()
window.$AnimeConfiguration.anime.defaultAbsPath =
    path.join(__dirname, "../resources/", window.$AnimeConfiguration.anime.default, "default.b64")
    // `${path.join(__dirname, "../resources/")}${window.$AnimeConfiguration.anime.default}/default.b64`
window.$AnimeConfiguration.anime.hoverAbsPath =
    path.join(__dirname, "../resources/", window.$AnimeConfiguration.anime.hover, "hover.b64")
    // `${path.join(__dirname, "../resources/")}${window.$AnimeConfiguration.anime.hover}/hover.b64`
