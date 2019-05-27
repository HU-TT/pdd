<template>
  <div class="hot-nav">
    <div class="hot-nav-content">
      <div class="nav-content-inner">
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
      </div>
      <div class="hot-nav-bottom">
        <div class="hot-nav-bottom-inner" :style="initBottomBarWidth"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return ({
        screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        scrollContentW: 720,
        bgBarW: 100,
        barXWidth: 0,
        startX: 0,
        barMoveX: 0,
        endFlag: 0
      })
    },
    computed: {
      initBottomBarWidth () {
        return {
          width: this.barXWidth + 'px',
          left: this.barMoveX + 'px'
        }
      }
    },
    mounted () {
      this.bindEvent()
      this.getBarWidth()
    },
    methods: {
      getBarWidth () {
        const {bgBarW, screenW, scrollContentW} = this
        this.barXWidth = bgBarW * (screenW / scrollContentW)
      },
      bindEvent () {
        this.$el.addEventListener('touchstart', this.handleTouchStart, false)
        this.$el.addEventListener('touchmove', this.handleTouchmove, false)
        this.$el.addEventListener('touchend', this.handleTouchEnd, false)
      },
      handleTouchStart (e) {
        this.startX = Number(e.touches[0].pageX)
      },
      handleTouchmove (e) {
        let moveWidth = Number(e.touches[0].pageX) - this.startX
        this.barMoveX = -((moveWidth / this.scrollContentW) * this.bgBarW - this.endFlag)
        if (this.barMoveX <= 0) {
          this.barMoveX = 0
        } else if (this.barMoveX >= this.bgBarW - this.barXWidth) {
          this.barMoveX = this.bgBarW - this.barXWidth
        }
      },
      handleTouchEnd () {
        this.endFlag = this.barMoveX
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../assets/style/global";

  .hot-nav {
    width: 100%;
    height: 180px;
    background: #fff;
    padding-bottom: 10px;
    box-sizing: border-box;
    position: relative;
    .hot-nav-content {
      width: 100%;
      overflow-x: scroll;
      .nav-content-inner {
        width: 720px;
        display: flex;
        flex-wrap: wrap;
        .inner-item {
          width: 90px;
          height: 90px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          color: #666;
            img {
              width: 40%;
              margin-bottom: 8px;
            }
        }
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .hot-nav-bottom {
      width: 100px;
      height: 2px;
      background-color: #ccc;
      position: absolute;
      left: 50%;
      margin-left: -50px;
      bottom: 8px;
      .hot-nav-bottom-inner {
        position: absolute;
        left: 0;
        height: 100%;
        background-color: orangered;
        width: 0;
      }
    }
  }
</style>
