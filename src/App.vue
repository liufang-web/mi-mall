<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      res: {}
    }
  },
  mounted() {
    // 第一种，本地手写json，此时的url与后台连接不同
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })
    // 第二种，easy-mock平台上数据，与后台连接url相同
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res
    // })
    // 第三种，本地集成mockjs实现数据
    this.axios.get('/user/login').then((res) => {
      this.res = res
    })
  },
  components: {

  }
}
</script>

<style>

</style>
