<template>
  <div id="app">
    <!-- 使用组件化导航 OrangeTopNav（来自main分支） -->
    <OrangeTopNav />
    
    
    
    <!-- 路由视图 -->
    <router-view />
  </div>
</template>

<script setup>
defineOptions({ name: 'App' })
</script>

<!-- 整合所有样式 -->
<style>
/* 引入外部基础样式（来自main分支） */
@import './base.css';

/* 全局重置（来自两个分支的合并） */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
  min-height: 100vh;
  font-weight: normal;
  /* 字体和抗锯齿样式 */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  color: #2c3e50;
}

a,
green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>