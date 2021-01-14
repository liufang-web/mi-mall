import Vue from 'vue'
import router from './router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import App from './App.vue'

// 加载插件
Vue.use(vueAxios, axios)
// 根据前端跨域方式做调整，在这是代理proxy跨域，例如 /a/b: 显示/api/a/b——>实际代理后/a/b
axios.defaults.baseURL = '/api'
// 在8秒时间内返回，没返回报404，如果不设置，用户体验很差
axios.defaults.timeout = 8000
// 响应错误拦截
/**
 * 返回来的数据 status = 0是成功，status = 10是未登录，msg是错误内容
 */
axios.interceptors.response.use(function(response) {
  const res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    // 在js中不能使用路由，路由得在挂载的组件上;路径需要写完整路径
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

// vue中的一些console.log打印
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
