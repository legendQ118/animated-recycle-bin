<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div @click="sendMain">Test</div>
    <button type="button" @click="changeDraggable"></button>
  </div>
</template>

<script setup>
  function sendMain() {
    window.$test()
  }
  let allowDrag = false
  function changeDraggable() {
    allowDrag = !allowDrag
    window.$setPopDraggable(allowDrag)
  }
</script>
