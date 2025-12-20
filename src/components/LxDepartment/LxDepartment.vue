<template>
  <div class="lx-department-container">
    <!-- 上半部分：两个盒子 -->
    <div class="top-section">
      <!-- 靠上的盒子：文字"橙果工作室" -->
      <div class="top-text-box">
        <h1>橙果工作室</h1>
        <p>{{ props.variableText }}</p>
      </div>
      
      <!-- 靠下的盒子：图片 -->
      <div class="top-image-box">
        <img :src="props.logoImage" alt="橙果工作室logo" />
      </div>
    </div>
    
    <!-- 下半部分：两个盒子 -->
    <div class="bottom-section">
      <!-- 靠左的盒子：图片 -->
      <div class="bottom-left-box">
        <img :src="props.variableImage" alt="可变图片" />
      </div>
      
      <!-- 靠右的盒子：文字 -->
      <div class="bottom-right-box">
        <h2>{{ props.bottomText }}</h2>
        <p v-for="(paragraph, index) in props.bottomDescription" :key="index">{{ paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'LxDepartment' })

interface Props {
  variableText?: string
  bottomText?: string
  bottomDescription?: string[]
  logoImage?: string
  variableImage?: string
}

const props = withDefaults(defineProps<Props>(), {
  variableText: '这里是可变文字内容',
  bottomText: '右侧标题',
  bottomDescription: () => [
    '这是第一段文字内容，可以根据需要修改。',
    '这是第二段文字内容，支持多段显示，便于组织更丰富的内容。'
  ],
  logoImage: '@/assets/logo4-DX7cGJ5Y.png',
  variableImage: '@/assets/variable-image.png'
})
</script>

<style scoped>
.lx-department-container {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #FFA500 0%, #32CD32 100%); /* 橙绿渐变 */
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  box-sizing: border-box;
}

/* 上半部分样式 */
.top-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
}

.top-text-box {
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.top-text-box h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  font-weight: bold;
}

.top-text-box p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.top-image-box {
  background: transparent; /* 完全透明 */
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-image-box img {
  max-width: 200px;
  max-height: 200px;
  object-fit: contain;
}

/* 下半部分样式 */
.bottom-section {
  flex: 1;
  display: flex;
  gap: 10px;
  align-items: stretch;
  justify-content: center;
  padding: 0 20px;
  max-height: 470px;
}

.bottom-left-box {
  flex: none;
  width: 40%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 0px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.bottom-left-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bottom-right-box {
  flex: none;
  width: 40%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
}

.bottom-right-box h2 {
  font-size: 1.8rem;
  margin-bottom:30px;
  text-align: center;
}

.bottom-right-box p {
  font-size: 1.2rem;
  line-height: 2.0;
  text-align: justify;
  text-indent: 2em;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .bottom-section {
    flex-direction: column;
  }
  
  .top-text-box h1 {
    font-size: 2rem;
  }
  
  .top-image-box img {
    max-width: 150px;
    max-height: 150px;
  }
}
</style>