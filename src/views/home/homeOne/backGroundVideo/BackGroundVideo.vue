<template>
  <div class="backGroundVideo">
    <div class="video">
      <video class="fullscreenVideo" id="bgVid" autoplay muted loop>
        <source src="@/assets/video/菜鸟图库-雨夜的交通.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script lang="ts" setup name="BackGroundVideo">
// :style="{ width: clientWidth, height: clientHeight }"
// const clientWidth = `${document.documentElement.clientWidth}px`;
// const clientHeight = `${document.documentElement.clientHeight}px`;
</script>
<style lang="less">
@import url('@/style/home/backGroundVideo.less');
</style>
