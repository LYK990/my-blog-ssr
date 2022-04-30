<template>
  <div class="backGroundVideo">
    <div class="video" :style="{ width: clientWidth, height: clientHeight }">
      <video
        style="width: 100%"
        class="fullscreenVideo"
        id="bgVid"
        playsinline
        autoplay
        muted
        loop
        webkit-playsinline="true"
        x-webkit-airplay="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        x5-video-ignore-metadata="true"
      >
        <source src="@/assets/video/菜鸟图库-雨夜的交通.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script lang="ts" setup name="BackGroundVideo">
const clientWidth = `${document.documentElement.clientWidth}px`;
const clientHeight = `${document.documentElement.clientHeight}px`;
</script>
<style lang="less" scoped>
.video {
  video {
    position: fixed;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    object-fit: fill;
    /*加滤镜*/
    /*filter: blur(15px); //背景模糊设置 */
    /*-webkit-filter: grayscale(100%);*/
    /*filter:grayscale(100%); //背景灰度设置*/
    z-index: -11;
  }
}
</style>
