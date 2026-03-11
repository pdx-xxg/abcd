<template>
  <div class="home-page">
   

    <!-- Hero 区域 -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">橙果工作室</h1>
          <p class="hero-subtitle">学习结合实践，增长项目经验</p>
          <p class="hero-description">
            橙果工作室是一个致力于技术学习与实践的学生组织，我们提供丰富的学习资源、项目实践机会和团队协作平台。
          </p>
          <div class="hero-actions">
            <button class="btn-primary" @click="jump('/Register')">立即报名</button>
            <button class="btn-secondary" @click="scrollToSection('about')">了解更多</button>
          </div>
        </div>
        <div class="hero-image">
          <img :src="logoImage4" alt="橙果工作室" />
        </div>
      </div>
    </section>

    <!-- 关于我们 -->
    <section id="about" class="about-section">
      <div class="container">
        <h2 class="section-title">关于橙果</h2>
        <p class="section-description">
          橙果工作室是一个充满活力的技术学习社区，我们致力于为成员提供优质的学习环境、实践平台和发展机会。
        </p>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📚</div>
            <h3>丰富的学习资源</h3>
            <p>提供系统化的学习计划和丰富的技术资料，帮助成员快速成长</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💻</div>
            <h3>实践项目机会</h3>
            <p>参与真实项目开发，积累实战经验，提升技术能力</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👥</div>
            <h3>团队协作平台</h3>
            <p>与志同道合的伙伴一起学习、交流、成长</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3>职业发展支持</h3>
            <p>提供职业规划指导和技术能力认证，助力成员未来发展</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 工作部门 -->
    <section id="departments" class="departments-section">
      <div class="container">
        <h2 class="section-title">工作部门</h2>
        <p class="section-description">我们拥有多个专业部门，各司其职，共同推动工作室的发展</p>
        <div class="departments-grid">
          <div class="department-card" @click="jump('/orange学习部')">
            <h3>学习部</h3>
            <p>指定学习计划 / 储备资源 / 培训基础 / 组织考核</p>
          </div>
          <div class="department-card" @click="jump('/orange学习部')">
            <h3>事务部</h3>
            <p>社团管理 / 策划活动 / 整理记录 / 协助服务</p>
          </div>
          <div class="department-card" @click="jump('/externalPropagandaDepartment')">
            <h3>外宣部</h3>
            <p>对外宣传 / 承办活动 / 外联商企 / 内联学校</p>
          </div>
          <div class="department-card" @click="jump('/DevelopDepartment')">
            <h3>开发部</h3>
            <p>学习结合实践，增长项目经验</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 学习小组 -->
    <section id="groups" class="groups-section">
      <div class="container">
        <h2 class="section-title">学习小组</h2>
        <p class="section-description">加入感兴趣的学习小组，与同好一起探索技术的奥秘</p>
        <div class="groups-grid">
          <div class="group-card" @click="jump('/full-stack')">
            <h3>全栈组</h3>
            <p>码出梦想，码出未来</p>
          </div>
          <div class="group-card" @click="jump('/hardware')">
            <h3>硬件组</h3>
            <p>我们可不仅仅是修电脑的</p>
          </div>
          <div class="group-card" @click="jump('/data')">
            <h3>大数据组</h3>
            <p>精于数据分析，提前洞察先机</p>
          </div>
          <div class="group-card" @click="jump('/embedded')">
            <h3>嵌入式组</h3>
            <p>用芯编织代码，让幻想的羽翼在现实世界翱翔</p>
          </div>
          <div class="group-card" @click="jump('/Orange 短视频')">
            <h3>短视频组</h3>
            <p>制作宣传视频 / 视觉传播 / 剪辑精彩</p>
          </div>
          <div class="group-card" @click="jump('/Orange 开发')">
            <h3>开发组</h3>
            <p>学习结合实践，增长项目经验</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 快速入口 -->
    <section id="quick-access" class="quick-access-section">
      <div class="container">
        <h2 class="section-title">橙果基建</h2>
        <p class="section-description">便捷的服务入口，快速访问常用功能</p>
        <div class="quick-access-grid">
          <div class="access-card" @click="jump('/infra/apply')">
            <div class="access-icon">📝</div>
            <h3>在线报名</h3>
            <p>加入橙果工作室</p>
          </div>
          <div class="access-card" @click="jump('/student-query')">
            <div class="access-icon">🔍</div>
            <h3>查询报名状态</h3>
            <p>查看报名进度</p>
          </div>
          <div class="access-card" @click="jump('/infra/repair-book')">
            <div class="access-icon">💻</div>
            <h3>电脑义诊预约</h3>
            <p>预约免费电脑诊断</p>
          </div>
          <div class="access-card" @click="jump('/phone-query')">
            <div class="access-icon">📱</div>
            <h3>电脑义诊查询</h3>
            <p>查询预约状态</p>
          </div>
        </div>
      </div>
    </section>
    <h2 class="section-title">数据橙果</h2>
    <data-orange />
    <div class="flex justify-center mt-20">
      <button
      class="bg-blue-500 p-4 rounded-full text-white flex items-center hover:shadow-xl hover:translate-y-0.5 transition">
      <span class="font-bold mr-1" @click="$router.push({ name: 'Register'})">加入橙果工作室<i class="fa fa-arrow-right ml-2 inline-block" aria-hidden="true"></i></span>
    </button>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import dataOrange from '@/views/home/components/dataOrange.vue'

defineOptions({ name: 'Home' })

const router = useRouter()

const logoImage = new URL('@/assets/logo.png', import.meta.url).href
const logoImage4 = new URL('@/assets/logo4-DX7cGJ5Y.png', import.meta.url).href

const isScrolled = ref(false)
const activeSection = ref('')
const activeDropdown = ref('')

const navItems = [
  { id: 'about', label: '关于橙果' },
  { id: 'departments', label: '工作部门' },
  { id: 'groups', label: '学习小组' },
  { id: 'quick-access', label: '快速入口' },
]

const toggle = (key: string) => {
  activeDropdown.value = activeDropdown.value === key ? '' : key
}

const jump = (path: string) => {
  router.replace(path)
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = id
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  activeSection.value = ''
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100

  // 检测当前可见的section
  const sections = navItems.map(item => ({
    id: item.id,
    element: document.getElementById(item.id),
  }))

  const scrollPosition = window.scrollY + 200

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section && section.element) {
      const offsetTop = section.element.offsetTop
      if (scrollPosition >= offsetTop) {
        activeSection.value = section.id
        break
      }
    }
  }

  // 如果滚动到顶部，清除active
  if (window.scrollY < 100) {
    activeSection.value = ''
  }
}

const handleClickOutside = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (!target.closest('.home-nav')) {
    activeDropdown.value = ''
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
  handleScroll() // 初始检查
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.home-page {
  width: 100%;
}

/* 首页导航 */
.home-nav {
  position: fixed;
  top: 96px;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 998;
  transition: all 0.3s ease;
}

.home-nav.scrolled {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.nav-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav-logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.nav-logo img {
  height: 32px;
  transition: transform 0.3s ease;
}

.nav-logo:hover img {
  transform: scale(1.05);
}

.nav-links {
  display: flex;
  gap: 40px;
  align-items: center;
  font-size: 16px;
}

.nav-item {
  position: relative;
  cursor: pointer;
  color: #6b7280;
  padding: 8px 0;
  transition: color 0.3s ease;
}

.nav-item:hover {
  color: #FFA500;
}

.nav-item.dropdown {
  display: flex;
  align-items: center;
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
  margin-top: 8px;
}

.dropdown-menu.simple {
  min-width: 180px;
}

.menu-item {
  padding: 8px 16px;
  line-height: 1.4;
  cursor: pointer;
}

.menu-item:hover {
  background: #f5f7fa;
}

.menu-item strong {
  display: block;
  color: #1f2d3d;
  font-weight: 600;
}

.menu-item p {
  margin: 4px 0 0;
  font-size: 12px;
  color: #6b7280;
}

/* Hero 区域 - 使用橙绿渐变 */
.hero-section {
  background: linear-gradient(135deg, #FFA500 0%, #32CD32 100%);
  color: white;
  padding: 0 24px;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-top: 96px; /* 导航栏高度 */
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>');
  opacity: 0.3;
  animation: float 20s infinite linear;
}

@keyframes float {
  0% { transform: translateY(0); }
  100% { transform: translateY(-100px); }
}

.hero-content {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}

.hero-subtitle {
  font-size: 28px;
  margin-bottom: 24px;
  opacity: 0.95;
  font-weight: 500;
}

.hero-description {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 40px;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.btn-primary,
.btn-secondary {
  padding: 16px 36px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background: white;
  color: #FFA500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 10px 40px rgba(0, 0, 0, 0.3));
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* 通用容器 */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 24px;
}

.section-title {
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: #1f2d3d;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #FFA500 0%, #32CD32 100%);
  border-radius: 2px;
}

.section-description {
  font-size: 18px;
  text-align: center;
  color: #6b7280;
  margin-bottom: 48px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
}

/* 关于我们 */
.about-section {
  background: #f9fafb;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 48px;
}

.feature-card {
  background: white;
  padding: 40px 32px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(255, 165, 0, 0.15);
  border-color: #FFA500;
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1f2d3d;
}

.feature-card p {
  color: #6b7280;
  line-height: 1.6;
}

/* 工作部门 */
.departments-section {
  background: white;
}

.departments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.department-card {
  background: linear-gradient(135deg, rgba(255, 165, 0, 0.05) 0%, rgba(50, 205, 50, 0.05) 100%);
  padding: 32px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.department-card:hover {
  background: linear-gradient(135deg, rgba(255, 165, 0, 0.1) 0%, rgba(50, 205, 50, 0.1) 100%);
  border-color: #FFA500;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(255, 165, 0, 0.2);
}

.department-card h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1f2d3d;
  background: linear-gradient(135deg, #FFA500 0%, #32CD32 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.department-card p {
  color: #6b7280;
  line-height: 1.6;
}

/* 学习小组 */
.groups-section {
  background: #f9fafb;
}

.groups-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.group-card {
  background: white;
  padding: 32px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.group-card:hover {
  border-color: #32CD32;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(50, 205, 50, 0.2);
}

.group-card h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1f2d3d;
}

.group-card p {
  color: #6b7280;
  line-height: 1.6;
}

/* 快速入口 - 使用橙绿渐变 */
.quick-access-section {
  background: white;
}

.quick-access-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.access-card {
  background: linear-gradient(135deg, #FFA500 0%, #32CD32 100%);
  color: white;
  padding: 40px 32px;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.access-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.access-card:hover::before {
  opacity: 1;
}

.access-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(255, 165, 0, 0.4);
}

.access-icon {
  font-size: 48px;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}

.access-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  position: relative;
  z-index: 1;
}

.access-card p {
  opacity: 0.9;
  font-size: 14px;
  position: relative;
  z-index: 1;
}

/* 响应式设计 */
@media (max-width: 900px) {
  .home-nav {
    top: 96px;
  }

  .nav-content {
    padding: 0 16px;
    height: 56px;
  }

  .nav-links {
    gap: 20px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .nav-links::-webkit-scrollbar {
    display: none;
  }

  .nav-item {
    font-size: 14px;
    white-space: nowrap;
  }

  .hero-section {
    padding: 0 16px;
    height: 100vh;
    min-height: 100vh;
  }

  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-title {
    font-size: 42px;
  }

  .hero-subtitle {
    font-size: 22px;
  }

  .section-title {
    font-size: 32px;
  }

  .features-grid,
  .departments-grid,
  .groups-grid,
  .quick-access-grid {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    justify-content: center;
  }
}

@media (max-width: 600px) {

  .nav-links {
    gap: 16px;
  }

  .nav-item {
    font-size: 13px;
  }

  .hero-section {
    padding: 0 16px;
    height: 100vh;
    min-height: 100vh;
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .container {
    padding: 60px 16px;
  }

  .section-title {
    font-size: 28px;
  }

  .btn-primary,
  .btn-secondary {
    padding: 12px 24px;
    font-size: 14px;
  }
}
</style>