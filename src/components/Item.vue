<template>
  <div class="item">
    <span class="item-flag" v-if="item.flag">NEW</span>
    <img class="item-img" :src="item.img" alt="">
    <div class="item-line">
      <van-icon name="user-o" />&nbsp;<div class="item-hotel-name">{{item.name}}</div>
    </div>
    <div class="item-line">
      <van-icon name="location-o" />&nbsp;<div class="item-hotel-address">{{item.location}}</div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant'
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    [Icon.name]: Icon
  }
}
</script>
<style lang="less">
  .item{
    width: 165px;
    position: relative;
    /*box-shadow: 0 0 1px #e4e4e4;*/
    border-radius: 2px;
    margin-bottom: 15px;

    &-flag{
      position: absolute;
      right: 0;
      top: 0;
      width: 34px;
      height: 16px;
      line-height: 16px;
      background-color: red;
      color: white;
      font-size: 12px;
      z-index: 2;
      text-align: center;
      border-radius: 2px;
    }

    &-img{
      width: 100%;
      height: 150px;
      margin-bottom: 10px;
      box-shadow: 0 0 1px #e4e4e4;
    }
    &-hotel-name{
      font-size: 14px;
      color: #444;
    }
    &-hotel-address{
      font-size: 12px;
      color: #555;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
    &-line{
      display: flex;
      padding-bottom: 5px;
    }
  }
</style>
