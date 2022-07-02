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
      <div class="login" @click="$router.push('/login')">
        <a>登录</a>
      </div>
      <div class="register" @click="$router.push('/regiser')">
        <a>注册</a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'TopBar',
  asyncData({ store, route }: any) {
    console.log(1111111)
    // return store.dispatch('user/abpRolePersmission', 121);
  },
  setup() {
    onMounted(() => {
      const route = useRoute();
      const store = useStore();
      console.log(store.state.user.routes);
    });
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
    return {
      categoryAction,
      archiveAction,
      shareAction
    };
  }
});
</script>
<style lang="less" scoped>
@import url('@/style/home/topBar/topBar.less');
</style>
