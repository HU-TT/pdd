<template>
  <div class="shop-container">
    <ul class="shop-list">
      <li class="shop-list-item">
        <img src="../../imgs/shop_list/shop_item.png" alt="" width="100%">
        <h4 class="list-item-title">【唐幂】整条刺绣民族风围巾女士秋冬季中年妈妈羊绒羊毛披肩保暖</h4>
        <div class="list-item-bottom">
          <span class="item-price">￥26.9</span>
          <span class="item-counter">已拼5345件</span>
          <span class="item-user">
            <img src="../../imgs/shop_list/user1.jpg" alt="">
            <img src="../../imgs/shop_list/user2.jpg" alt="">
          </span>
          <span class="item-buy">
            <button>去拼单 &gt;</button>
          </span>
        </div>
      </li>
      <li class="shop-list-item">
        <img src="../../imgs/shop_list/shop_item.png" alt="" width="100%">
        <h4 class="list-item-title">【唐幂】整条刺绣民族风围巾女士秋冬季中年妈妈羊绒羊毛披肩保暖</h4>
        <div class="list-item-bottom">
          <span class="item-price">￥26.9</span>
          <span class="item-counter">已拼5345件</span>
          <span class="item-user">
            <img src="../../imgs/shop_list/user1.jpg" alt="">
            <img src="../../imgs/shop_list/user2.jpg" alt="">
          </span>
          <span class="item-buy">
            <button>去拼单 &gt;</button>
          </span>
        </div>
      </li>
      <li class="shop-list-item">
        <img src="../../imgs/shop_list/shop_item.png" alt="" width="100%">
        <h4 class="list-item-title">【唐幂】整条刺绣民族风围巾女士秋冬季中年妈妈羊绒羊毛披肩保暖</h4>
        <div class="list-item-bottom">
          <span class="item-price">￥26.9</span>
          <span class="item-counter">已拼5345件</span>
          <span class="item-user">
            <img src="../../imgs/shop_list/user1.jpg" alt="">
            <img src="../../imgs/shop_list/user2.jpg" alt="">
          </span>
          <span class="item-buy">
            <button>去拼单 &gt;</button>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .shop-container {
    margin-bottom: 50px;
    background: #f5f5f5;
    .shop-list {
      .shop-list-item {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        background: #fff;
        box-sizing: border-box;
        .list-item-title {
          font-size: 16px;
          width: 94%;
          text-align: left;
          margin-left: 3%;
          line-height: 22px;
          height: 44px;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .list-item-bottom {
          display: flex;
          justify-content: space-around;
          align-items: center;
          .item-price {
            font-size: 18px;
            text-align: center;
            font-weight: bolder;
            color: red;
            flex: 1;
          }
          .item-counter {
            font-size: 12px;
            flex: 2;
            color: #ccc;
          }
          .item-user {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            img {
              width: 30px;
              border-radius: 50%;
              &:nth-child(1) {
                margin-right: -6px;
                z-index: 150;
              }
            }
          }
          .item-buy {
            flex: 2;
            button {
              width: 80%;
              height: 34px;
              border: none;
              font-size: 16px;
              color: #fff;
              text-align: center;
              line-height: 34px;
              margin-left: 10px;
              background-color: red;
              border-radius: 8px;
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }
</style>
