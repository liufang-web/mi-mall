<template>
  <div class="home">
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from 'components/common/NavHeader'
import NavFooter from 'components/common/NavFooter'
export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style>

</style>
