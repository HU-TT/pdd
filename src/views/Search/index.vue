<template>
  <div class="search">
    <search-nav />
      <div class="shop">
        <ul class="menu-wrapper">
          <li class="menu-item current">
            <span>女装</span>
          </li>
          <li class="menu-item">
            <span>鞋包</span>
          </li>
        </ul>
        <div class="shop-wrapper">
          <ul>
            <li class="shops-li">
              <div class="shops-title">
                <h4>女装</h4>
                <a href="">查看更多 &gt;</a>
              </div>
              <ul class="shops-items">
                <li>
                  <img src="./images/s1.png" alt="">
                  <span>女装</span>
                </li>
                <li>
                  <img src="./images/s1.png" alt="">
                  <span>女装</span>
                </li>
                <li>
                  <img src="./images/s1.png" alt="">
                  <span>女装</span>
                </li>
                <li>
                  <img src="./images/s1.png" alt="">
                  <span>女装</span>
                </li>
                <li>
                  <img src="./images/s1.png" alt="">
                  <span>女装</span>
                </li>
                <li>
                  <img src="./images/s1.png" alt="">
                  <span>女装</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    <tab-bar />
  </div>
</template>

<script>
  import TabBar from '../../components/TabBer/'
  import SearchNav from './children/SearchNav'

  export default {
    components: {
      TabBar,
      SearchNav
    }
  }
</script>

<style scoped lang="scss">
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
            img  {
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
