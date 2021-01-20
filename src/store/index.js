// 导入vuex
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
// 加载插件
Vue.use(Vuex)
// 创建vuex
const state = {
  // 登录用户名
  username: '',
  // 购物车商品数量
  cartCount: 0
}
const store = new Vuex.Store({
  state,
  mutations,
  actions
})
// 导出
export default store
