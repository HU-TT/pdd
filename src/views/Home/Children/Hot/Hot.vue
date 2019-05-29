<template>
  <div class="hot">
    <div class="swiper-container" v-if="homeCasual.length > 0">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in homeCasual" :key="index"><img :src="item.imgurl" alt="" width="100%"></div>
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
  import { mapGetters, mapActions } from 'vuex'

  export default {
    mounted () {
      this.initHomeCasual()
      this.initHomeNav()
      this.initHomeShopList()
    },
    components: {
      HotNav,
      HotShopList
    },
    computed: {
      ...mapGetters(['homeCasual'])
    },
    methods: {
      ...mapActions(['initHomeCasual', 'initHomeNav', 'initHomeShopList'])
    },
    watch: {
      homeCasual () {
          this.$nextTick(() => {
            new Swiper('.swiper-container', {
              autoplay: true,
              loop: true, // 循环模式选项
              pagination: {
                el: '.swiper-pagination',
              }
            })
          })
      }
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
