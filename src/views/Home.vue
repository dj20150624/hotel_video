<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="blue">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img class="home-swipe-img" v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="home-item-box">
      <Item :item.sync="item" v-for="(item, index) in items" :key="index" @click.native="pushVideo(item)"></Item>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload } from 'vant'
import Item from '../components/Item'
Vue.use(Lazyload)
export default {
  name: 'home',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    Item
  },
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
      ],
      items: [
        {
          id: 'a1',
          flag: true,
          name: '文汇酒店',
          location: '上海市松江区文汇路955号文汇新天地',
          img: 'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg'
        },
        {
          id: 'a2',
          flag: true,
          name: '文汇酒店',
          location: '上海市松江区文汇路955号文汇新天地',
          img: 'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg'
        },
        {
          id: 'a3',
          flag: true,
          name: '文汇酒店',
          location: '上海市松江区文汇路955号文汇新天地',
          img: 'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
        },
        {
          id: 'a4',
          flag: true,
          name: '文汇酒店',
          location: '上海市松江区文汇路955号文汇新天地',
          img: 'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
        }
      ]
    }
  },
  methods: {
    pushVideo (item) {
      this.$router.push({ name: 'video', params: { vid: item.id } })
    }
  }
}
</script>
<style lang="less">
  .home{
    &-swipe-img{
      width: 375px;
      height: 315px;
    }
    &-item-box{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px;
      flex-wrap: wrap;
    }
  }
</style>
