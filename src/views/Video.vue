<template>
    <div class="video">
      <div class="video-back" @click="back">
        <van-icon class="video-back-icon" name="arrow-left" />
        <span>文汇酒店</span>
      </div>
      <div class="video-player-box">
        <d-player :options="options" ref="player"></d-player>
      </div>
      <div class="video-info">
        <van-rate v-model="rateValue" />
        <h3 class="video-title">简介</h3>
        <p class="video-txt">文汇酒店(上海松江大学城店)位于上海松江区文汇路，近龙源路，周边有上海立信会计学院、上海视觉艺术学院、华东政法大学等，周边生活设施完善，交通出行便利。 文汇酒店(上海松江大学城店)拥有明净规整的客房，房间整洁干净，采光通风良好，房内设施设备齐全，还为您提供24小时前台、行李寄存、叫醒等服务，为您的出行增添便利</p>
        <div class="video-phone">
          <van-icon name="phone-o" />&nbsp;<a href="tel:021-33523939">021-33523939</a>&nbsp;&nbsp;<a href="tel:17717896563">17717896563</a>
        </div>
        <a class="video-phone" href="https://www.amap.com/search?query=%E6%96%87%E6%B1%87%E9%85%92%E5%BA%97(%E6%9D%BE%E6%B1%9F%E5%A4%A7%E5%AD%A6%E5%9F%8E%E5%BA%97)&city=310000&geoobj=121.19789%7C31.04789%7C121.202804%7C31.050386&zoom=18"><van-icon name="location-o" />&nbsp;文汇路955号</a>
      </div>

    </div>
</template>

<script>
import { Icon, Rate } from 'vant'
import VueDPlayer from '../components/vue-dplayer'
export default {
  name: 'Video',
  components: {
    [Icon.name]: Icon,
    [Rate.name]: Rate,
    'd-player': VueDPlayer
  },
  data () {
    return {
      options: {
        video: {
          url: '',
          type: '',
          pic: ''
        },
        autoplay: false,
        contextmenu: [
          {
            text: 'GitHub',
            link: 'https://github.com/MoePlayer/vue-dplayer'
          }
        ]
      },
      player: null,
      rateValue: 3
    }
  },
  created () {
    this.options.video = {
      url: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8',
      type: 'hls',
      pic: 'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg'
    }
  },
  mounted () {
    this.player = this.$refs.player.dp
    console.log(this.player.options)
  },
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>

<style lang="less">
  .video{
    &-back{
      height: 44px;
      line-height: 44px;
      background-color: white;
      text-align: center;
    }
    &-back-icon{
      position: absolute;
      left: 15px;
      top: 14.5px;
    }
    &-info{
      padding: 10px 15px;
    }
    &-title{
      padding-left: 2px;
      padding-bottom: 2px;
      font-size: 18px;
      color: #444;
      border-bottom: 1px solid #e4e4e4;
      margin: 5px 0 12px;
    }
    &-txt{
      font-size: 15px;
      color: #444;
      text-align: justify;
      margin: 0;
      letter-spacing: 1px;
      padding-bottom: 10px;
      line-height: 24px;
    }
    &-phone{
      font-size: 15px;
      color: #444;
    }
  }
</style>
