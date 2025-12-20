<template>
  <div class="success-page">
   
    <header class="top-nav">
      <div class="logo">
        <span class="logo-text">橙果工作室</span>
        <span class="logo-eng">orange studio</span>
      </div>
      <nav class="nav-links">
        <a href="#">官网主页</a>
        <a href="#">工作部门</a>
        <a href="#">学习小组</a>
        <a href="#">橙果基建</a>
      </nav>
    </header>

    
    <div class="purple-bar"></div>

    
    <main class="content">
      <div class="slogan">
        <h2>A better way to improve yourself</h2>
        <p>橙果工作室让你发现更好的自己!</p>
      </div>

      
      <div class="card-group">
        <div class="card">
          <div class="card-icon purple">
            <i class="icon">🔧</i>
          </div>
          <div class="card-title">硬件设施充足</div>
          <div class="card-desc">
            工作室拥有舒适的工作学习环境,全年空调开放,存有机械、电子等硬件器材,配备工作室专属校园网专线,我们力争为工作室成员提供更好的基础硬件设施。
          </div>
        </div>

        <div class="card">
          <div class="card-icon green">
            <i class="icon">✅</i>
          </div>
          <div class="card-title">优秀团队带领</div>
          <div class="card-desc">
            依托学校信息部门,工作室拥有多名优秀指导教师,在保证学习质量的基础上高效工作,只要你深入学习,并将橙果技术与精神继续传递下去。
          </div>
        </div>

        <div class="card">
          <div class="card-icon blue">
            <i class="icon">✨</i>
          </div>
          <div class="card-title">聚焦技术热点</div>
          <div class="card-desc">
            摒弃课本上的"老掉牙",工作室学习与指导与时俱进,直奔当今技术主流,工作室成员能够亲手学习,学以致用,为以后考研、就业等打下坚实技术基础。
          </div>
        </div>

        <div class="card">
          <div class="card-icon yellow">
            <i class="icon">😊</i>
          </div>
          <div class="card-title">气氛轻松和谐</div>
          <div class="card-desc">
            工作室是一个轻松欢乐的地方,这里没有条条框框的教条限制,也没有组长形式主义地大学等组织架构,大家相聚在一起就是一个意义的形式,这是很有趣,大家在一起开心的学习就是我们的目标。
          </div>
        </div>
      </div>

      
      <div class="bottom-section">
        <p class="prompt">准备好了吗?</p>
        <p class="sub-prompt">点击填写你的报名表吧!</p>
        <button class="btn-write" @click="goToRegister">点击填写</button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()


const goToRegister = () => {
  router.push('/register')
}
</script>

<style scoped>

.success-page {
  width: 100vw;
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: "Microsoft YaHei", sans-serif;
}


.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #222;
  color: #fff;
}

.logo .logo-text {
  font-size: 18px;
  font-weight: bold;
  color: #ffcc00;
}

.logo .logo-eng {
  font-size: 12px;
  color: #ccc;
  margin-left: 5px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-size: 14px;
}

.nav-links a:hover {
  color: #ffcc00;
}


.purple-bar {
  height: 40px;
  background-color: #7a24a8;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275v6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.363C20.114 2.213 24.823 4 31.784 4h6.225c-2.786 0-5.51-.277-8.184-1.015l-1.768-.661C13.226.24 8.163 0 0 0v2c5.744 0 9.951.574 14.85 2h6.363C20.114 3.787 24.823 2 31.784 2h6.225c-3.167 0-5.899.46-8.184 1.016l-1.768.66C13.258 3.108 8.077 2 0 2v2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}


.content {
  padding: 40px 60px;
}

.slogan {
  text-align: center;
  margin-bottom: 40px;
}

.slogan h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.slogan p {
  font-size: 14px;
  color: #666;
}


.card-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
}

.card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: #fff;
}

.purple {
  background-color: #9c27b0;
}

.green {
  background-color: #4caf50;
}

.blue {
  background-color: #2196f3;
}

.yellow {
  background-color: #ffc107;
}

.card-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.card-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}


.bottom-section {
  text-align: center;
  margin-top: 60px;
}

.prompt {
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin-bottom: 5px;
}

.sub-prompt {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.btn-write {
  background-color: #2196f3;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn-write:hover {
  background-color: #1976d2;
}
</style>