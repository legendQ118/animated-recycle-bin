<template>
  <img id="anime" src="" alt="AnimateImage">
  <div id="bottom"></div>
  <div id="mask" style="display: none"></div>
</template>

<script setup>
import {onMounted} from "vue";

onMounted(()=>{
  let appDom = document.querySelector('#app')
  appDom.style.height = window.innerHeight + 'px'
})

</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  background: none;
  user-select: none;
  overflow: hidden;
}
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app img {
  max-width: 100%;
  max-height: 100%;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  user-select: none;
}
.bounce {
  animation: bounce infinite 1s;
}
#mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(196, 196, 196, 0.4);
  backdrop-filter: blur(2);
  cursor: move;
  z-index: 99;
  -webkit-app-region: drag;
}
#bottom {
  width: 100%;
  height: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  color: honeydew;
  text-shadow: 1px 1px 1px black;
}
@keyframes bounce {
  25%{
    transform: translateY(1px) translateX(0px);
  }
  50%{
    transform: translateY(0) translateX(1px);
  }
  75%{
    transform: translateY(-1px) translateX(0);
  }
  100%{
    transform: translateY(0) translateX(-1px);
  }
}
</style>
