<template>
  <div class="category">
    <div class="imgHeader">
      <div class="tag-nav" @click="homeAction">
        <a>首页</a>
      </div>
      <div class="textHeader">文章分类</div>
    </div>
    <Content />
  </div>
</template>

<script lang="ts" setup name="Category">
import { useRouter } from 'vue-router';
import Content from './content/content.vue';

const router = useRouter();
const homeAction = () => {
  router.push({ path: '/' });
};
</script>
<style lang="less" scoped>
.category {
  .imgHeader {
    background: url('../../assets/images/分类.jpg') no-repeat center center;
    background-size: cover;
    position: relative;
    height: 8vh;
    .tag-nav {
      position: absolute;
      top: 20px;
      left: 160px;
      z-index: 2;
      a {
        color: #fff;
        font-size: 12px;
        padding: 8px 32px;
        opacity: 0.8;
        border: 1px solid #fff;
        border-radius: 0;
        background: 0 0;
      }
    }
    .textHeader {
      color: #fff;
      font-size: 50px;
      text-align: center;
      letter-spacing: 4px;
      position: relative;
      top: 10%;
    }
  }
}
</style>
