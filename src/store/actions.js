import { getHomeCasual, getHomeNav, getHomeShopList, getRecommendShopList, getSearchGoods } from '../api/'
import {
  INIT_HOME_CASUAL,
  INIT_HOME_NAV,
  INIT_HOME_SHOP_LIST,
  INIT_RECOMMEND_SHOP_LIST,
  INIT_SEARCH_GOODS
} from './mutationsType'

export default ({
  async initHomeCasual ({ commit }) {
    const res = await getHomeCasual()
    commit(INIT_HOME_CASUAL, { homeCasual: res.message.data })
  },
  async initHomeNav ({ commit }) {
    const res = await getHomeNav()
    commit(INIT_HOME_NAV, { homeNav: res.message.data })
  },
  async initHomeShopList ({ commit }) {
    const res = await getHomeShopList()
    commit(INIT_HOME_SHOP_LIST, { homeShopList: res.message.goods_list })
  },
  async initRecommendShopList ({ commit }) {
    const res = await getRecommendShopList()
    commit(INIT_RECOMMEND_SHOP_LIST, { recommendShopList: res.message.data })
  },
  async initSearchGoods ({commit}) {
    const res = await getSearchGoods()
    commit(INIT_SEARCH_GOODS, {searchGoods: res.message.data})
  }
})
