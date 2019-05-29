<template>
  <a class="recommend-item">
    <img :src="item.thumb_url" alt="" v-if="item.thumb_url" width="100%">
    <h4 class="item-title">{{item.short_name}}</h4>
    <div class="item-bottom">
      <span class="item-price">￥{{item.price / 100}}</span>
      <span class="item-tip">{{item.sales_tip}}</span>
      <div class="item-user" v-if="user">
        <img src="http://t20img.yangkeduo.com/a/4d22102fb9354aa7b17a952f3193f8525e01756f-1535073515?imageMogr2/thumbnail/100x" alt="">
        <img src="http://t20img.yangkeduo.com/a/4d22102fb9354aa7b17a952f3193f8525e01756f-1535073515?imageMogr2/thumbnail/100x" alt="">
      </div>
      <button class="item-btn" v-else>找相关</button>
    </div>
  </a>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default () {
          return {}
        }
      },
      user: {
        type: Boolean,
        default:true
      }
    }
  }
</script>

<style scoped lang="scss">
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
      .item-user {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 30px;
          border-radius: 50%;
          &:nth-child(1) {
            margin-right: -6px;
            z-index: 150;
          }
        }
      }
    }
  }
</style>
