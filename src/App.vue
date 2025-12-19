<template>
  <div>
    <nav>
      <router-link to="/orange事务部">事务部</router-link>|
      <router-link to="/orange学习部">学习部</router-link>|
    </nav>
    <router-view />
  </div>

</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  color: #2c3e50;


}
</style>
