<template>
  <div class="content">
    <div class="common-layout">
      <el-container>
        <!-- aside -->
        <el-aside width="460px">
          <!-- 折叠面板 -->
          <el-collapse
            v-model="activeNames"
            v-for="(articleCategory, id) in articleCategorys"
            :key="id"
          >
            <div class="title">
              <span>{{ articleCategory }}</span>
            </div>
            <el-collapse-item title="flex布局" name="1">
              <div class="article">
                <a href="##">1.模块化方案</a>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-aside>
        <!-- 文章区域 -->
        <el-main>
          <!-- <v-md-preview :text="str" /> -->
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';
import { getArticleCategory, getArticle } from '@/api/category';

let articleCategorys: any;
onBeforeMount(async () => {
  articleCategorys = await getArticleCategory();
  console.log(articleCategorys);
});
const activeNames = ref(''); // 折叠面板
</script>
<style lang="less" scoped>
.el-aside {
  padding: 1.5rem 0;
  .el-collapse {
    border: 0;
    :deep(.el-collapse-item__header) {
      border: 0;
    }
  }
  :deep(.el-collapse-item__wrap) {
    border: 0;
  }
}
.el-container {
  height: 92vh;
  .el-aside {
    padding: 1.5rem 0;
    border-right: 1px solid #eaecef;
    .title {
      font-size: 1.1em;
      line-height: 1.7;
      font-weight: 700;
      color: #22374d;
      transition: color 0.15s ease;
      padding: 0.35rem 1.5rem 0.35rem 1.25rem;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
      border-left: 0.25rem solid transparent;
    }
    .el-collapse-item {
      opacity: 0.5;
      font-size: 0.95em;
      line-height: 1.4;
      font-weight: 400;
      padding-left: 2rem;
      .article {
        a {
          font-size: 1em;
          font-weight: 400;
          display: inline-block;
          color: #2a5d91;
          border-left: 0.25rem solid transparent;
          padding: 0.35rem 1rem 0.35rem 1.25rem;
          line-height: 1.4;
          width: 100%;
          box-sizing: border-box;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
