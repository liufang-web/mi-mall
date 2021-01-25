<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javaScript:;">手机 电话卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javaScript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javaScript:;">手机 电话卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javaScript:;">手机 电话卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javaScript:;">手机 电话卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javaScript:;">手机 电话卡</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper :options = "swiperOptions">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <a :href="'/#/product/'+ item.id">
              <img :src="item.img" alt="">
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
              <!-- 分页器 -->
              <div class="swiper-pagination" slot="pagination"></div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from 'pages/home/ServiceBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'index',
  data() {
    return {
      swiperOptions: {
        // 自动播放
        autoplay: true,
        loop: true,
        // 方块切换效果
        effect: 'cube',
        // 前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      slideList: [
        {
          id: '42',
          img: 'imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: 'imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: 'imgs/slider/slide-3.jpg'
        },
        {
          id: '',
          img: 'imgs/slider/slide-4.jpg'
        },
        {
          id: '',
          img: 'imgs/slider/slide-5.jpg'
        }
      ]
    }
  },
  mounted() {
    // this.getSlides()
  },
  methods: {
    // getSlides () {
    //   this.axios.get('/slides').then((res) => {
    //     this.slideList = res
    //   })
    // }
  },
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar
  }
}
</script>

<style lang="scss">
@import 'assets/scss/config.scss';
@import 'assets/scss/mixin.scss';
.index{
  .swiper-box{
    .nav-menu{
      width: 264px;
      height: 451px;
      position: absolute;
      z-index: 9;
      padding: 26px 0;
      box-sizing: border-box;
      background-color: #55585a7a;
      // 如果使用opacity字体图标等都会变成透明的，所以可以使用background-color，设置颜色为半透明
      // opacity: .9;
      .menu-wrap{
        .menu-item{
          height: 50px;
          line-height: 50px;
          a{
            padding-left: 30px;
            font-size: 16px;
            color:#ffffff;
            position: relative;
            display: block;
            &::after{
              content: ' ';
              @include bgImg(10px,15px,'/imgs/icon-arrow.png');
              position: absolute;
              top: 17.5px;
              right: 30px;
            }
          }
          &:hover{
            background-color: $colorA;
          }
        }
      }
    }
    .swiper-container{
      height: 451px;
      .swiper-button-prev{
        left: 274px;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
