<template>
  <div id="app">
    <OrangeTopNav />
    <router-view />
  </div>
</template>

<script setup>
defineOptions({ name: 'App' })
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
