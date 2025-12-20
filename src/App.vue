<template>
  <div id="app">
    <!-- OrangeTopNav 导航组件 -->
    <OrangeTopNav />
    
    <!-- 路由视图 -->
    <router-view />
  </div>
</template>

<script setup>
import OrangeTopNav from './components/OrangeTopNav'

defineOptions({ name: 'App' })
</script>

<style>
/* 引入外部基础样式 */
@import './base.css';

/* 全局重置 */
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

/* 原有的导航链接样式 */
.legacy-nav {
  padding: 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.legacy-nav a {
  margin-right: 15px;
  padding: 5px 10px;
  text-decoration: none;
  color: #2c3e50;
  border-radius: 4px;
}

.legacy-nav a:hover {
  background-color: #e9e9e9;
}

/* 原有的绿色链接样式 */
a,
.green { /* 注意：这里应该是 .green 类选择器 */
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