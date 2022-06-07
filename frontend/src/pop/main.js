import { createApp } from 'vue'
import PopWin from './PopWin.vue'

window.$setPopDraggable
/*window.$PopWin$handleDraggable*/ = (data) => {
    console.log('pop window execute function $setPopDraggable args', data)
    if (data != null) {
        if (data)
            document.querySelector('#mask').style.display = 'block'
         else
            document.querySelector('#mask').style.display = 'none'
    }
}
console.log(window.$AnimeConfiguration)
createApp(PopWin).mount('#app')


