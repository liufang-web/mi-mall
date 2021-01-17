<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javaScript:;">小米商城</a>
          <a href="javaScript:;">MIUI</a>
          <a href="javaScript:;">LoT</a>
          <a href="javaScript:;">云服务</a>
          <a href="javaScript:;">天星数科</a>
          <a href="javaScript:;">有品</a>
          <a href="javaScript:;">小爱开放平台</a>
        </div>
        <div topbar-user>
          <a href="javaScript:;">登录 | 注册</a>
          <a href="javaScript:;">消息通知</a>
          <a href="javaScript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>Redmi手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyValue">
            <a href="javaScript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header'
}
</script>

<style lang = 'scss'>
@import 'assets/scss/base.scss';
.header{
  .nav-topbar{
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      a{
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart{
        width: 110px;
        text-align: center;
        background-color: #FF6600;
        color: #ffffff;
        .icon-cart{
          display: inline-block;
          width: 16px;
          height: 12px;
          margin-right: 4px;
          background: url('/imgs/icon-cart-checked.png') no-repeat center;
          background-size: contain;
        }
      }
    }
  }
  .nav-header{
    .container{
      height: 112px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-logo{
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #FF6600;
        a{
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before{
            /* 占位，必须存在 */
            content: ' ';
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-logo.png') no-repeat center;
            background-size: 55px;
            transition: margin .2s;
          }
          &:after{
            /* 占位，必须存在 */
            content: ' ';
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-home.png') no-repeat center;
            background-size: 55px;
          }
          &:hover:before{
            margin-left: -55px;
            transition: margin .2s;
          }
        }
      }
      .header-menu{
        display: inline-block;
        padding-left: 209px;
        .item-menu{
          display: inline-block;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          color: #333333;
          span{
            cursor: pointer;
          }
          &:hover{

          }
        }
      }
      .header-search{
        width: 319px;
        .wrapper{
          height: 50px;
          border: 1px solid #E0E0E0;
          display: flex;
          align-items: center;
          input{
            border: none;
            border-right: 1px solid #E0E0E0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a{
            background: url('/imgs/icon-search.png') no-repeat center;
            background-size: contain;
            color: #b0b0b0;
          }
        }
      }
    }
  }
}
</style>
