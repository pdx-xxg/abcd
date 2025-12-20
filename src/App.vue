<template>
  <div id="app">
    <!-- OrangeTopNav 导航组件 -->
    <OrangeTopNav />
    
   
    
    <!-- 路由视图 -->
    <router-view />
  </div>
</template>

<script setup>
import OrangeTopNav from './components/OrangeTopNav.vue' // 根据实际路径调整

defineOptions({ name: 'App' })
</script>

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