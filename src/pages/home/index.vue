<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
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
.index{
  .swiper-box{
    .swiper-container{
      height: 451px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
