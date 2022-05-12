<template>
  <div class="content">
    <div class="common-layout">
      <el-container>
        <!-- aside -->
        <el-aside width="460px">
          <!-- 折叠面板 -->
          <el-collapse v-model="activeNames">
            <div class="title">
              <span>HTML+CSS</span>
            </div>
            <el-collapse-item title="flex布局" name="1">
              <div class="article">
                <a href="##">1.模块化方案</a>
              </div>
            </el-collapse-item>

            <div class="title">
              <span>Javascript</span>
            </div>
            <el-collapse-item title="章节" name="2">
              <div class="article">
                <a href="##">文章</a>
              </div>
            </el-collapse-item>

            <div class="title">
              <span>vue3</span>
            </div>
            <el-collapse-item title="章节" name="3">
              <div class="article">
                <a href="##">文章</a>
              </div>
            </el-collapse-item>

            <div class="title">
              <span>前端工程化</span>
            </div>
            <el-collapse-item title="章节" name="4">
              <div class="article">
                <a href="##">文章</a>
              </div>
            </el-collapse-item>

            <div class="title">
              <span>计算机基础</span>
            </div>
            <el-collapse-item title="章节" name="5">
              <div class="article">
                <a href="##">文章</a>
              </div>
            </el-collapse-item>

            <div class="title">
              <span>BUG合集</span>
            </div>
            <el-collapse-item title="章节" name="6">
              <div class="article">
                <a href="##">文章</a>
              </div>
            </el-collapse-item>
          </el-collapse>
          <!--  -->
        </el-aside>
        <!-- main -->
        <el-main>
          <!-- <v-md-preview :text="str" /> -->
          qweqwe
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts" setup name="Content">
import { ref } from 'vue';

const activeNames = ref('');
const str = ref('# 1. 函数的call() / apply() / bind()');
</script>
<style lang="less" scoped>
.el-aside {
  padding: 1.5rem 0;
  .el-collapse {
    border: 0;
    :deep(.el-collapse-item__header) {
      border: 0;
      .el-icon {
        // display: none;
      }
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
