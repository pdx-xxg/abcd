<template>
  <header class="navbar">
    <div class="nav-container">
      <div class="nav-left" @click="goHome">
        <img :src="logo" alt="橙果工作室" class="logo" />
      </div>

      <nav class="nav-right" v-if="!isMobile">
        <a class="nav-item" @click="goHome">官网主页</a>

        <div class="nav-item dropdown" @click="toggle('dept')">
          <span>工作部门</span>
          <div v-if="active === 'dept'" class="dropdown-menu">
            <div class="menu-item" @click="jump('/dept/study')">
              <strong>学习部</strong>
              <p>指定学习计划 / 储备资源 / 培训基础 / 组织考核</p>
            </div>
            <div class="menu-item" @click="jump('/dept/affairs')">
              <strong>事务部</strong>
              <p>社团管理 / 策划活动 / 整理记录 / 协助服务</p>
            </div>
            <div class="menu-item" @click="jump('/externalPropagandaDepartment')">
              <strong>外宣部</strong>
              <p>对外宣传 / 承办活动 / 外联商企 / 内联学校</p>
            </div>
            <div class="menu-item" @click="jump('/DevelopDepartment')">
              <strong>开发部</strong>
              <p>学习结合实践，增长项目经验</p>
            </div>
          </div>
        </div>

        <div class="nav-item dropdown" @click="toggle('group')">
          <span>学习小组</span>
          <div v-if="active === 'group'" class="dropdown-menu">
            <div class="menu-item" @click="jump('/group/fullstack')">
              <strong>全栈组</strong>
              <p>码出梦想，码出未来</p>
            </div>
            <div class="menu-item" @click="jump('/group/hardware')">
              <strong>硬件组</strong>
              <p>我们可不仅仅是修电脑的</p>
            </div>
            <div class="menu-item" @click="jump('/group/bigdata')">
              <strong>大数据组</strong>
              <p>精于数据分析，提前洞察先机</p>
            </div>
            <div class="menu-item" @click="jump('/group/embed')">
              <strong>嵌入式组</strong>
              <p>用芯编织代码，让幻想的羽翼在现实世界翱翔</p>
            </div>
            <div class="menu-item" @click="jump('/group/video')">
              <strong>短视频组</strong>
              <p>制作宣传视频 / 视觉传播 / 剪辑精彩</p>
            </div>
            <div class="menu-item" @click="jump('/group/dev')">
              <strong>开发组</strong>
              <p>学习结合实践，增长项目经验</p>
            </div>
          </div>
        </div>

        <div class="nav-item dropdown" @click="toggle('base')">
          <span>橙果基建</span>
          <div v-if="active === 'base'" class="dropdown-menu simple">
            <div class="menu-item" @click="jump('/infra/apply')">在线报名</div>
            <div class="menu-item" @click="jump('/student-query')">查询报名状态</div>
            <div class="menu-item" @click="jump('/infra/repair-book')">电脑义诊预约</div>
            <div class="menu-item" @click="jump('/phone-query')">电脑义诊查询</div>
            <div class="menu-item" @click="jump('/infra/admin')">极橙大后台</div>
            <div class="menu-item" @click="jump('/infra/gitlab')">橙果 GitLab</div>
          </div>
        </div>
      </nav>

      <div class="hamburger" v-if="isMobile" @click="toggleMobile">
        <span></span><span></span><span></span>
      </div>

      <div class="mobile-menu" v-if="isMobile && mobileOpen">
        <div class="mobile-item" @click="goHome">官网主页</div>
        <div class="mobile-item" @click="toggle('dept')">工作部门</div>
        <div v-if="active === 'dept'" class="mobile-sub">
          <div @click="jump('/dept/study')">学习部</div>
          <div @click="jump('/dept/affairs')">事务部</div>
          <div @click="jump('/dept/public')">外宣部</div>
          <div @click="jump('/dept/dev')">开发部</div>
        </div>
        <div class="mobile-item" @click="toggle('group')">学习小组</div>
        <div v-if="active === 'group'" class="mobile-sub">
          <div @click="jump('/group/fullstack')">全栈组</div>
          <div @click="jump('/group/hardware')">硬件组</div>
          <div @click="jump('/group/bigdata')">大数据组</div>
          <div @click="jump('/group/embed')">嵌入式组</div>
          <div @click="jump('/group/video')">短视频组</div>
          <div @click="jump('/group/dev')">开发组</div>
        </div>
        <div class="mobile-item" @click="toggle('base')">橙果基建</div>
        <div v-if="active === 'base'" class="mobile-sub">
          <div @click="jump('/infra/apply')">在线报名</div>
          <div @click="jump('/infra/status')">查询报名状态</div>
          <div @click="jump('/infra/repair-book')">电脑义诊预约</div>
          <div @click="jump('/infra/repair-query')">电脑义诊查询</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
defineOptions({ name: 'OrangeTopNav' })
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '@/assets/logo.png'

const active = ref('')
const isMobile = ref(false)
const mobileOpen = ref(false)

const toggle = (key) => {
  active.value = active.value === key ? '' : key
}

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
  if (!mobileOpen.value) active.value = ''
}

import { useRouter } from 'vue-router'
const router = useRouter()

const goHome = () => {
  router.push('/')
}

const jump = (path) => {
  router.push(path)
}
const handleResize = () => {
  isMobile.value = window.innerWidth < 900
  if (!isMobile.value) {
    mobileOpen.value = false
    active.value = ''
  }
}

const handleClickOutside = (e) => {
  if (!e.target.closest('.navbar')) {
    active.value = ''
    mobileOpen.value = false
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 96px;
  background: #1f2d3d;
  z-index: 999;
}

.nav-container {
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 40px;
  cursor: pointer;
}

.nav-right {
  display: flex;
  gap: 40px;
  font-size: 16px;
}

.nav-item {
  position: relative;
  cursor: pointer;
  color: #ffffff;
  line-height: 96px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #ffffff;
  color: #333;
  min-width: 300px;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  padding: 4px 0;
  z-index: 1000;
}

.dropdown-menu.simple {
  min-width: 180px;
}

.menu-item {
  padding: 8px 16px;
  line-height: 1.4;
}

.menu-item:hover {
  background: #f5f7fa;
}

.menu-item p {
  margin: 4px 0 0;
  font-size: 12px;
  color: #6b7280;
}

@media (max-width: 900px) {
  .nav-right {
    display: none;
  }
  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
  }
  .hamburger span {
    width: 24px;
    height: 2px;
    background: #fff;
  }
  .mobile-menu {
    position: fixed;
    top: 96px;
    left: 0;
    width: 100%;
    background: #1f2d3d;
    color: #fff;
    padding: 12px 16px;
    z-index: 998;
  }
  .mobile-item {
    padding: 10px 0;
    font-size: 15px;
  }
  .mobile-sub {
    padding-left: 16px;
    font-size: 14px;
    color: #cbd5e1;
  }
}
</style>
