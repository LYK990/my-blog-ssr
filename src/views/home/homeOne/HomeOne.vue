<template>
  <div class="homeOne">
    <TopBar />
    <BackGroundVideo />
  </div>
</template>

<script lang="ts" setup name="HomeOne">
import BackGroundVideo from './backGroundVideo/BackGroundVideo.vue';
import TopBar from './topBar/TopBar.vue';
</script>
<style lang="less" scoped>
.homeOne {
  height: 937px;
}
</style>
