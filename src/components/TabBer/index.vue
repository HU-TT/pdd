<template>
<!-- 底部通栏 -->
  <div class="bottom-bar">
      <span class="tab-item" @click="switchTo('/home')" :class="{active: path.includes('/home') }">
          <img :src="path.includes('/home')  ? require('../../../public/images/icon_home_selected.png') : require('../../../public/images/icon_home.png')" alt="">
          <span>首页</span>
      </span>
      <span class="tab-item" @click="switchTo('/recommend')" :class="{active: path.includes('/recommend')}">
          <img :src="path.includes('/recommend') ? require('../../../public/images/icon_intro_selected.png') : require('../../../public/images/icon_intro.png')" alt="">
          <span>推荐</span>
      </span>
    <span class="tab-item" @click="switchTo('/search')" :class="{active: path.includes('/search')}">
        <img :src="path.includes('/search') ? require('../../../public/images/icon_search_selected.png') : require('../../../public/images/icon_search.png')" alt="">
        <span>搜索</span>
    </span>
      <span class="tab-item" @click="switchTo('/chat')" :class="{active: path.includes('/chat')}">
          <img :src="path.includes('/chat') ? require('../../../public/images/icon_chat_selected.png') : require('../../../public/images/icon_chat.png')" alt="">
          <span>聊天</span>
      </span>
      <span class="tab-item" @click="switchTo('/me')" :class="{active: path.includes('/me')}">
          <img :src="path.includes('/me') ? require('../../../public/images/icon_mine_selected.png') :require('../../../public/images/icon_mine.png')" alt="">
          <span>我的</span>
      </span>
  </div>
</template>

<script>
  export default {
    data () {
      return ({
        path: this.$route.path
      })
    },
    methods: {
      switchTo (path) {
        // console.log(this.$router)
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/style/global";

  .bottom-bar {
    width: 100%;
    height: px2rem(50);
    background: #fff;
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;

    .tab-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: px2rem(14);

      &.active {
        span {
          color: #e9232c;
        }
      }

      img {
        width: px2rem(24);
        height: px2rem(24);
        display: block;
        margin: px2rem(2) auto;

      }

      span {
        font-size: px2rem(14);
        margin: px2rem(2) 0;
        color: #666;
      }
    }
  }
</style>
