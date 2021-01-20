<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <a href="javaScript:;">
        <p>小米商城</p>
      </a>
    </div>
    <div class="footer-link">
      <a href="javaScript:;">NIUI</a><span>|</span>
      <a href="javaScript:;">米家</a><span>|</span>
      <a href="javaScript:;">米聊</a><span>|</span>
      <a href="javaScript:;">多看</a><span>|</span>
    </div>
    <div class="copyright">
      <span class="domain">© mi.com</span> 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/config.scss';
.footer{
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: $colorB;
  color: $colorD;
  font-size: 16px;
  text-align: center;
  .footer-logo{
    margin-top: 46px;
    margin-bottom: 31px;
    img{
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link{
    margin-bottom: 13px;
    a{
      color: $colorD;
      display: inline-block;
    }
    span{
      margin: 0 10px;
    }
  }
  .copyright{
    .domain{
      color: $colorA;
    }
  }
}
</style>
