<template>
  <div>
    <HomeOne />
    <!-- <HomeTwo /> -->
  </div>
</template>

<script lang="ts" setup name="Home">
import { onMounted } from 'vue';
import { getCaptcha } from '@/api/index';

import HomeOne from './homeOne/HomeOne.vue';
import HomeTwo from './homeTwo/HomeTwo.vue';

onMounted(async () => {
  const result = await getCaptcha();
  console.log(result);
});
</script>

<style lang="less"></style>
