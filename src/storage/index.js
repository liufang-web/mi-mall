/**
 * 封装storage
 */

// 设置变量
const STORAGE_KEY = 'mall'
// 导出
export default {
  // 例如json{"user": {"name": "lili", "age": 18, "sex": 1}}
  getStorage () {
    // 得到结果是user: {name: "lili", age: 18, sex: 1}
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  // 获取某个模块下的属性，如获取user下的name
  getItem (key, moduleName) {
    if (moduleName) {
      // 如果存在模块下的属性，则进行递归
      const val = this.getItem(moduleName)
      if (val) return val[key]
    }
    // 第一次获取的是user
    return this.getStorage()[key]
  },
  setItem (key, value, moduleName) {
    // 如果存在模块
    if (moduleName) {
      const val = this.getItem(moduleName)
      val[key] = value
      return this.setItem(moduleName, val)
    } else {
      const val = this.getStorage()
      val[key] = value
      // 将修改的重新赋值到setItem
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  clear (key, moduleName) {
    const val = this.getStorage()
    if (moduleName) {
      if (!val[moduleName]) return
      delete val[moduleName][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
