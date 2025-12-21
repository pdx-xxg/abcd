<template>
  <div id="app">
    <OrangeTopNav />
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
  <bottomNav />
</template>

<script setup>
defineOptions({ name: 'App' })
</script>

<style>
#app {
  min-height: 100vh;
}

/* 淡入淡出动画（默认） */
.fade-enter-active {
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-leave-active {
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
.slide-enter-active {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-leave-active {
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
.gradient-slide-enter-active {
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.gradient-slide-leave-active {
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
