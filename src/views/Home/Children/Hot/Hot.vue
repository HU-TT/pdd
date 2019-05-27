<template>
  <div class="hot">
    <div class="swiper-container">
      <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="../../imgs/rowing/s1.png" alt="" width="100%"></div>
              <div class="swiper-slide"><img src="../../imgs/rowing/s2.png" alt="" width="100%"></div>
              <div class="swiper-slide"><img src="../../imgs/rowing/s3.png" alt="" width="100%"></div>
              <div class="swiper-slide"><img src="../../imgs/rowing/s4.png" alt="" width="100%"></div>
              <div class="swiper-slide"><img src="../../imgs/rowing/s5.png" alt="" width="100%"></div>
              <div class="swiper-slide"><img src="../../imgs/rowing/s6.png" alt="" width="100%"></div>
              <div class="swiper-slide"><img src="../../imgs/rowing/s7.png" alt="" width="100%"></div>
              <div class="swiper-slide"><img src="../../imgs/rowing/s8.png" alt="" width="100%"></div>
              <div class="swiper-slide"><img src="../../imgs/rowing/s9.png" alt="" width="100%"></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <hot-nav/>
    <div class="hot-ad">
      <img src="../../imgs/hot_ad/home_ad.gif" alt="" width="100%">
    </div>
    <hot-shop-list/>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HotNav from './HotNav'
  import HotShopList from './HotShopList'

  export default {
    mounted () {
      new Swiper('.swiper-container', {
        autoplay: true,
        loop: true, // 循环模式选项
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
    components: {
      HotNav,
      HotShopList
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../assets/style/global";
  .hot {
    padding-top: px2rem(45);
    padding-bottom: px2rem(50);
    box-sizing: border-box;
    .hot-ad {
      margin: 8px 0;
      background: #fff;
      padding: 5px;
    }
  }
</style>
