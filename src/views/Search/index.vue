<template>
  <div class="search">
    <search-nav :isShowSearchPanel="isShowSearchPanel"/>
    <div class="shop">
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item" v-for="(item, index) in searchGoods" :key="index"
              :class="{current : currentIndex === index}" @click="handleClick(index)"  ref="menuList">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="shop-wrapper">
        <ul ref="shopList">
          <li class="shops-li" v-for="(item, index) in searchGoods" :key="index">
            <div class="shops-title">
              <h4>{{item.name}}</h4>
              <a href="">查看更多 &gt;</a>
            </div>
            <ul class="phone-type" v-if="item.tag === 'phone'">
              <li v-for="(phone, i) in item.category" :key="i">
                <img :src="phone.icon" alt="">
              </li>
            </ul>
            <ul class="shops-items">
              <li v-for="(c, i) in item.items" :key="i">
                <img :src="c.icon" alt="">
                <span>{{c.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <tab-bar/>
    <SearchPanel v-if="showSearchPanel" :isShowSearchPanel="isShowSearchPanel" />
  </div>
</template>

<script>
  import TabBar from '../../components/TabBer/'
  import SearchNav from './children/SearchNav'
  import { mapActions, mapGetters } from 'vuex'
  import SearchPanel from './children/SearchPanel'
  import BScroll from '@better-scroll/core'

  export default {
    data () {
      return ({
        scrollY: 0,
        rightLiTops: [],
        currentIndex: 0,
        showSearchPanel: false
      })
    },
    components: {
      TabBar,
      SearchNav,
      SearchPanel
    },
    methods: {
      ...mapActions(['initSearchGoods']),
      _initBScroll () {
        // 左边
        this.leftScroll = new BScroll('.menu-wrapper', {
          scrollY: true,
          click: true
        })

        // 右边
        this.rightScroll = new BScroll('.shop-wrapper', {
          scrollY: true,
          click: true,
          probeType: 3
        })
        this.rightScroll.on('scroll', ({ y }) => {
          this.scrollY = Math.abs(y)
        })
      },
      _initRightLiTops () {
        const tempArr = []
        let top = 0
        tempArr.push(top)
        const allLis = [...this.$refs.shopList.getElementsByClassName('shops-li')]
        allLis.forEach(li => {
          top += li.clientHeight
          tempArr.push(top)
        })
        this.rightLiTops = tempArr
      },
      getIndex (scrollY) {
        this.currentIndex = this.rightLiTops.findIndex((item, index) => scrollY >= item && scrollY < this.rightLiTops[index + 1])
        // this._initLeftLiTops(this.currentIndex)
      },
      handleClick (index) {
        this.scrollY = this.rightLiTops[index]
        this.rightScroll.scrollTo(0, -this.scrollY, 300)
        console.log(this.rightScroll.scrollTo)
      },
      // _initLeftLiTops (index) {
      //   let menuList = this.$refs.menuList
      //   console.log(-index * 60 - 100)
      //   this.leftScroll.scrollTo(0, -index * 60, 300)
      // }
      isShowSearchPanel (flag) {
        this.showSearchPanel = flag
      }
    },
    mounted () {
      this.initSearchGoods()
    },
    computed: {
      ...mapGetters(['searchGoods'])
    },
    watch: {
      searchGoods () {
        this.$nextTick(() => {
          this._initBScroll()
          this._initRightLiTops()
        })
      },
      scrollY (scrollY) {
        this.getIndex(scrollY)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/style/global";

  .search {
    background: #f5f5f5;
    font-size: 16px;
    width: 100%;
    height: 100%;

    .shop {
      display: flex;
      position: absolute;
      top: 60px;
      bottom: 50px;
      width: 100%;
      overflow: hidden;

      .menu-wrapper {
        background-color: #e0e0e0;
        width: 80px;
        flex: 0 0 80px;
        float: left;

        .menu-item {
          width: 100%;
          height: 60px;
          font-size: 16px;
          background: #fafafa;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: lighter;
          color: #666;

          &.current {
            color: #e02e24;

            &::before {
              content: '';
              background-color: #e02e24;
              width: 4px;
              height: 30px;
              position: absolute;
              left: 0;
            }
          }
        }
      }

      .shop-wrapper {
        flex: 1;
        background: #fff;

        .shops-title {
          font-size: 14px;
          display: flex;
          padding: 0 10px;
          height: 44px;
          align-items: center;
          justify-content: space-between;
          color: #999;

          a {
            color: #999;
            font-weight: lighter;
          }
        }

        .phone-type {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          @include border-bottom-1px(#ccc);

          li {
            width: 33.33%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px 0;

            img {
              width: 80%;
            }
          }
        }

        .shops-items {
          display: flex;
          flex: 1;
          flex-wrap: wrap;

          li {
            width: 33.33%;
            height: 90px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            font-weight: lighter;
            color: #666;

            img {
              width: 60%;
              height: 60%;
              margin-bottom: 5px;
            }
          }
        }
      }
    }
  }
</style>
