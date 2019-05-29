<template>
  <div class="search-nav">
    <a href="" class="search-nav-icon">
      <img src="../images/search.png" alt="" width="25">
      <span>三层纸抽</span>
    </a>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  @import "../../../assets/style/global";

  .search-nav {
    width: 100%;
    height: 60px;
    background-color: #f5f5f5;
    @include border-bottom-1px(#ccc);
    display: flex;
    top: 0;
    left: 0;
    z-index: 998;
    position: fixed;
    justify-content: center;
    align-items: center;
    .search-nav-icon {
      width: 90%;
      height: 70%;
      background-color: #e8e8e8;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 18px;
        color: #aaa;
        font-weight: lighter;
        margin-left: 6px;
      }
    }
  }
</style>
