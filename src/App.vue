<template>
  <div id="app">
    <!-- 使用组件化导航 OrangeTopNav -->
    <OrangeTopNav />
    <router-view />
  </div>
</template>

<script setup>
defineOptions({ name: 'App' })
</script>

<!-- 整合所有样式，包含全局重置、base.css 引入、交互样式 -->
<style>
/* 引入外部基础样式 */
@import './base.css';

/* ===== 全局重置，不做居中布局 ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
  min-height: 100vh;
  font-weight: normal;
  /* 保留原有字体和抗锯齿样式，兼容旧版需求 */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a,
.green {
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