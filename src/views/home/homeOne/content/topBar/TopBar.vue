<template>
  <header class="topBar">
    <div class="left">
      <i class="iconfont icon-zhihu"></i>
      <i class="iconfont icon-github-fill"></i>
      <i class="iconfont icon-juejin"></i>
    </div>
    <div class="center">
      <div>首页</div>
      <div @click="categoryAction">分类</div>
      <div>归档</div>
      <div>分享</div>
    </div>
    <div class="right">
      <!-- <button>Default</button> -->
    </div>
  </header>
</template>

<script lang="ts" setup name="TopBar">
import { useRouter } from 'vue-router';

const router = useRouter()
const categoryAction = () => {
  router.push({ path: '/category' });
};
</script>
<style lang="less" scoped>
.topBar {
  color: white;
  font-size: 16px;
  // font-weight: 300;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78px;
  background: none;
  cursor: pointer;
  .left {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      width: 40px;
      font-size: 16px;
    }
  }
  .center {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      justify-content: center;
      width: 78px;
    }
  }
  .right {
    width: 25%;
    display: flex;
    justify-content: flex-end;
    button {
      width: 110px;
      height: 36px;
    }
  }
}
// .topBar:hover {
//   background: white;
//   color: black;
// }
</style>
