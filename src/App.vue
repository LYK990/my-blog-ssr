<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts" setup name="App"></script>

<style lang="less" scoped>
#app {
  cursor: pointer;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>
