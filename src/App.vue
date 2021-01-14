<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from 'pages/home/Home'
import storage from 'storage'
export default {
  name: 'App',
  mounted() {
    // storage.setItem('a', 1)
    // storage.setItem('abc', { a: 1 }, 'user')
    storage.clear('abc', 'user')
  },
  components: {
    Home
  }
}
</script>

<style>

</style>
