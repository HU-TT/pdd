import {
  INIT_HOME_CASUAL,
  INIT_HOME_NAV,
  INIT_HOME_SHOP_LIST,
  INIT_RECOMMEND_SHOP_LIST,
  INIT_SEARCH_GOODS
} from './mutationsType'

export default ({
  [INIT_HOME_CASUAL]: (state, { homeCasual }) => {
    state.homeCasual = homeCasual
  },
  [INIT_HOME_NAV]: (state, { homeNav }) => {
    state.homeNav = homeNav
  },
  [INIT_HOME_SHOP_LIST]: (state, { homeShopList }) => {
    state.homeShopList = homeShopList
  },
  [INIT_RECOMMEND_SHOP_LIST]: (state, { recommendShopList }) => {
    state.recommendShopList = recommendShopList
  },
  [INIT_SEARCH_GOODS]: (state, { searchGoods }) => {
    state.searchGoods = searchGoods
  }
})
