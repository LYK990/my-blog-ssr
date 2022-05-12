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
      <div @click="archiveAction">归档</div>
      <div @click="shareAction">分享</div>
    </div>
    <div class="right">
      <div class="login">
        <a>登录</a>
      </div>
      <div class="register">
        <a>注册</a>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup name="TopBar">
import { useRouter } from 'vue-router';

const router = useRouter();
const categoryAction = () => {
  router.push({ path: '/category' });
};
const archiveAction = () => {
  router.push({ path: '/archive' });
};
const shareAction = () => {
  router.push({ path: '/share' });
};
</script>
<style lang="less" scoped>
@import url('@/style/home/topBar/topBar.less');
</style>
