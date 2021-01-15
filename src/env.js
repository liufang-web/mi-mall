/**
 * 基于JSONP,CORS跨域下的环境配置
 * 代理跨域的只要更改vue.config.js下的就可以
 */
let baseURL
// process.env是nodejs中的process进程,NODE_ENV是属性，不要写错env
// process.env是获取当前进程的一些环境变量，最终写到nodejs中
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://dev-mall-pre.springboot.cn/api'
} else if (process.env.NODE_ENV === 'test') {
  baseURL = 'http://test-mall-pre.springboot.cn/api'
} else if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://mall-pre.springboot.cn/api'
} else {
  baseURL = 'http://mall-pre.springboot.cn/api'
}

export default {
  baseURL
}
