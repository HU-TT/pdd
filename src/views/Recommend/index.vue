<template>
  <div>
    <div class="recommend-container">
      <ul class="recommend">
        <li class="recommend-item" v-for="(item, index) in recommendShopList" :key="index">
          <img :src="item.thumb_url" alt="" v-if="item.thumb_url" width="100%">
          <h4 class="item-title">{{item.short_name}}</h4>
          <div class="item-bottom">
            <span class="item-price">￥{{item.price / 100}}</span>
            <span class="item-tip">{{item.sales_tip}}</span>
            <button class="item-btn">找相关</button>
          </div>
        </li>
      </ul>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import TabBar from '../../components/TabBer/'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    components: {
      TabBar
    },
    mounted () {
      this.initRecommendShopList()
    },
    methods: {
      ...mapActions(['initRecommendShopList'])
    },
    computed: {
      ...mapGetters(['recommendShopList'])
    }
  }
</script>

<style scoped lang="scss">
  .recommend-container {
    background: #f5f5f5;
    margin-bottom: 50px;
    .recommend {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background: #f5f5f5;
      .recommend-item {
        width: 49.5%;
        background: #fff;
        padding-bottom: 15px;
        margin-bottom: 15px;
        &:nth-child(2n-1) {
          margin-right: 1%;
        }
        .item-title {
          line-height: 20px;
          font-size: 12px;
          font-weight: lighter;
          height: 20px;
          text-overflow: ellipsis;
          overflow: hidden;
          margin: 5px 0;
          padding: 0 5px;
        }
        .item-bottom {
          display: flex;
          align-items: center;
          padding: 0 6px;
          .item-price {
            flex: 1;
            font-size: 12px;
            color: red;
            font-weight: bolder;
          }
          .item-tip {
            flex: 4;
            font-size: 10px;
            color: #666;
          }
          .item-btn {
            flex: 2;
            border: 1px solid orangered;
            background-color: transparent;
            height: 26px;
            border-radius: 5px;
            color: red;
            font-size: 10px;
          }
        }
      }
    }
  }
</style>
