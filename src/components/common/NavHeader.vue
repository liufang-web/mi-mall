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
          <a href="javaScript:;" v-if="username">{{username}}</a>
          <a href="javaScript:;" v-if="!username" @click="login">登录</a>
          <a href="javaScript:;" v-if="username">我的订单</a>
          <a href="javaScript:;" v-if="!username">消息通知</a>
          <a href="javaScript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span>购物车
            </a>
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
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="imgs/nav-img/nav-3-2.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="imgs/nav-img/nav-3-3.png" alt="">
                    </div>
                    <div class="pro-name">小米电视</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="imgs/nav-img/nav-3-4.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="imgs/nav-img/nav-3-5.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="imgs/nav-img/nav-3-6.png" alt="">
                    </div>
                    <div class="pro-name">小米电视</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
            </div>
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
  name: 'nav-header',
  data () {
    return {
      username: '',
      phoneList: []
    }
  },
  filters: {
    currency(val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    getProductList () {
      this.axios.get('/products').then((res) => {
        if (res.length > 6) {
          this.phoneList = res.list.slice(0, 6)
        } else {
          this.phoneList = res.list
        }
      })
    },
    goToCart () {
      this.$router.push('/cart')
    }
  },
  components: {

  }
}
</script>

<style lang = 'scss'>
@import 'assets/scss/base.scss';
@import 'assets/scss/mixin.scss';
@import 'assets/scss/config.scss';
.header{
  .nav-topbar{
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container{
      @include flex();
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
          @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header{
    .container{
      position: relative;
      height: 112px;
      @include flex();
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
            @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
            transition: margin .2s;
          }
          &:after{
            /* 占位，必须存在 */
            content: ' ';
            @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
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
        width: 643px;
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
            color: $colorA;
            .children{
              height: 220px;
              opacity: 1;
            }
          }
          .children{
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            transition: all .5s;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
            z-index: 10;
            background-color: #ffffff;
            .product{
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a{
                display: inline-block;
              }
              img{
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img{
                height: 137px;
              }
              .pro-name{
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price{
                color: $colorA;
              }
              &::before{
                content:  ' ';
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child::before{
                display: none;
              }
            }
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
            /* 在谷歌浏览器是content不包括padding,在ie中content包括padding，所以设置border-box就是ie的盒子模型 */
            box-sizing: border-box;
          }
          a{
            @include bgImg(18px,18px,'/imgs/icon-search.png');
            color: #b0b0b0;
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>
