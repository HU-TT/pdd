import ajax from './ajax'

const baseUrl = 'http://127.0.0.1:3000'

// 首页轮播图
export const getHomeCasual = () => ajax(`${baseUrl}/api/homecasual`)

// 首页导航
export const getHomeNav = () => ajax(`${baseUrl}/api/homenav`)

// 首页商品列表
export const getHomeShopList = () => ajax(`${baseUrl}/api/homeshoplist`)

// 推荐商品列表
export const getRecommendShopList = () => ajax(`${baseUrl}/api/recommendshoplist`)

// 搜索商品列表
export const getSearchGoods = () => ajax(`${baseUrl}/api/searchgoods`)
