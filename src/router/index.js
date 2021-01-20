// 导入vue,vue-router'
import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('pages/home/Home')
const Index = () => import('pages/home/Index')
const Product = () => import('pages/home/Product')
const Cart = () => import('pages/orderList/Cart')
const Login = () => import('pages/login/Login')
// 加载插件路由
Vue.use(Router)
// 创建路由
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      }, {
        path: '/product/:id',
        name: 'product',
        component: Product
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]
const router = new Router({
  routes
})
// 导出路由
export default router
