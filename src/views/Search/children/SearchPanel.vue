<template>
  <div class="search-panel">
    <div class="search-nav">
      <div class="search-input">
        <img src="../images/search.png" width="25" alt="">
        <input type="search" placeholder="三层纸抽">
      </div>
      <button @click="isShowSearchPanel(false)">取消</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isShowSearchPanel: Function
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/style/global";

  .search-panel {
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    .search-nav {
      width: 100%;
      height: 60px;
      @include border-bottom-1px(#ddd)
    }
  }
</style>
