<template>
  <div>
    <TopBar />
    <BackGroundVideo />
  </div>
</template>

<script lang="ts" setup name="Home">
import { onMounted } from 'vue';
import { getCaptcha } from '@/api/index';
import BackGroundVideo from './backGroundVideo/BackGroundVideo.vue';
import TopBar from './topBar/TopBar.vue';

onMounted(async () => {
  const result = await getCaptcha();
  console.log(result);
});
</script>

<style lang="less"></style>
