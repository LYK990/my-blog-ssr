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
body {
  margin: 0;
  padding: 0;
}
.video {
  video {
    position: absolute;
    top: 0;
    // min-width: 99%;
    // min-height: 100%;
    height: 100%;
    width: 100%;
    object-fit: fill;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // object-fit: fill;
    // height: 100%;
    // width: 100%;
    /*加滤镜*/
    /*filter: blur(15px); //背景模糊设置 */
    /*-webkit-filter: grayscale(100%);*/
    /*filter:grayscale(100%); //背景灰度设置*/
    z-index: -9999;
  }
}
</style>
