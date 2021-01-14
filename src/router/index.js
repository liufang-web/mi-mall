// 导入vue,vue-router'
import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('pages/home/Home')
const Index = () => import('pages/home/Index')
// 调用路由
Vue.use(Router)
// 创建路由
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    childer: [
      {
        path: '/index',
        component: Index
      }
    ]
  }
]
const router = new Router({
  routes
})
// 导出路由
export default router
