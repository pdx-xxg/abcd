<template>
<div id="app">
    <!-- OrangeTopNav 导航组件 -->
    <OrangeTopNav />
    <!-- 路由视图 -->
    <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'" mode="out-in">
            <component :is="Component" :key="route.path" />
        </transition>
    </router-view>
</div>
</template>

<script setup>
import OrangeTopNav from './components/OrangeTopNav.vue'

defineOptions({
    name: 'App'
})
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
.green { /* 修正：添加了缺失的点号，表示类选择器 */
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

/* 淡入淡出动画（默认） */
.fade-enter-active { /* 修正：添加了缺失的点号 */
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-leave-active { /* 修正：添加了缺失的点号 */
    transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(10px) scale(0.99);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px) scale(0.99);
}

/* 滑动动画 */
.slide-enter-active { /* 修正：添加了缺失的点号 */
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-leave-active { /* 修正：添加了缺失的点号 */
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-enter-from {
    opacity: 0;
    transform: translateX(40px);
}

.slide-leave-to {
    opacity: 0;
    transform: translateX(-40px);
}

/* 渐变滑动动画（橙绿主题） */
.gradient-slide-enter-active { /* 修正：添加了缺失的点号 */
    transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.gradient-slide-leave-active { /* 修正：添加了缺失的点号 */
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.gradient-slide-enter-from {
    opacity: 0;
    transform: translateX(60px) scale(0.96);
    filter: blur(4px);
}

.gradient-slide-leave-to {
    opacity: 0;
    transform: translateX(-60px) scale(0.96);
    filter: blur(4px);
}
</style>