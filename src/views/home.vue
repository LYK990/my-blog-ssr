<template>
  <div>
    <div>
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
        <source src="../assets/video/菜鸟图库-雨夜的交通.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script lang="ts" setup name="Home">
import { onMounted } from 'vue';
import { getCaptcha } from '../api/index';

onMounted(async () => {
  const result = await getCaptcha();
  console.log(result);
});
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
}
</style>
