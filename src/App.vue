<template>
  <div id="app">
    <router-view />
    <van-tabbar
      route
      v-model="active"
      active-color="#000"
      inactive-color="#999999"
      v-show="tabbarIndex <= 1"
    >
      <van-tabbar-item name="index" replace to="/">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? index.active : index.default" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="my" replace to="/My">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? home.active : home.default" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState } from "vuex";
export default Vue.extend({
  computed: {
    ...mapState(["tabbarIndex"])
  },
   data() {
    return {
      active: "index",
      index: {
        default: require("@/assets/icons/home.png"),
        active: require("@/assets/icons/home-active.png")
      },
      home: {
        default: require("@/assets/icons/mine.png"),
        active: require("@/assets/icons/mine-active.png")
      }
    };
  }
})
</script>
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #333;
  font-family: PingFang SC;
}
.layout-wrap,
body,
html,
#app {
  min-width: 100%;
  // min-height: 100vh;
  background-color: #f9fafc;
  &.bg {
    background-color: #f9fafc;
  }
}
.van-tabbar {
  height: 4rem !important;
  z-index: 9999;
}
.van-tabbar-item__icon img {
  margin-bottom: 10px;
  width: 50px;
  height: 50px !important;
}
.van-tabbar-item--active {
  font-size: 20px;
}
.van-tabbar-item {
  font-size: 20px;
  color: #999999;
}
.van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border-width: 0px !important;
}
.van-toast--html,
.van-toast__text {
   padding-top: 10px!important;
}

.van-toast{
    padding: 20px !important;
    min-width: 3.4rem!important;
}
 .van-nav-bar{
  line-height: 100px!important;
  .van-nav-bar__content{
   height: 100px;
  }
  .van-icon{
       color: #000!important;
    }
  .van-nav-bar__text{
      color: #000;
    }
  .van-ellipsis{
       overflow: auto;
       white-space: normal;
       
    }
    .van-nav-bar__title{
      font-size: 20px!important;
      color: #000!important;
    }
    .van-nav-bar__left{
     padding-left: 40px;
    }
    .van-nav-bar__right{
      padding-right: 40px;
    }
}
</style>
