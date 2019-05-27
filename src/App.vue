<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10 > 50 ? 50 : window.innerWidth / 10
    html.style.fontSize = fontSize + 'px'
  })
</script>

<style lang="scss" scoped>
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #fff;
  }
</style>
