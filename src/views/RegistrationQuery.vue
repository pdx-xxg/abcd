<!-- 页面：学号查询流程，使用 QueryForm + ProgressSteps + DescriptionCard。 -->
<template>
  <main class="page">
    <section class="query-row">
      <div class="content">
        <QueryForm
          v-model="studentId"
          placeholder="请输入你的学号"
          button-text="查询"
          input-type="text"
          input-mode="numeric"
          :validate-fn="validateStudentId"
          @submit="handleQuery"
        />
      </div>
    </section>

    <section class="step-row">
      <div class="content center-content wide-section">
        <ProgressSteps :steps="steps" />
      </div>
    </section>

    <section class="desc-row">
      <div class="content center-content wide-section">
        <DescriptionCard>
          <p>这里让大家熟悉新流程</p>
          <h4>报名成功/未报名</h4>
          <p>一只满怀好奇的小橙子在"橙果工作室"的门口看了看，报名呢？还是不报名呢？</p>
          <p>
            报名的话会找到一群志同道合的人，一起完成心中的梦想，一起收获温暖、热爱、友谊……好多好~冲鸭！
          </p>

          <h4>初试 通过/未通过</h4>
          <p>来了来了，"无情报"的第一次面试~</p>
          <p>
            初试考察的是"第一印象"，大家通过自我介绍来向面试官展示自己个性和优势，可以说专业知识，也可以说人格修养、兴趣爱好等等，内容不限，面试时长为3min/人。
          </p>

          <h4>复试 通过/未通过</h4>
          <p>经过"无情报"的第一次面试同学将迎来一次长卷——第二次面试。</p>
          <p>
            面试为期一周左右，大家会收到由小组发出的学习任务，经行为期一周的自学之后会对大家学习内容进行一次考核以检验大家的学习能力。
          </p>

          <h4>最终结果 录取/未录取</h4>
          <p>
            到此，大家已经完成了全部面试，你的学识和能力已经得到了我们的考验，橙果工作室欢迎你的加入。
          </p>
          <p>未录取的同学也不要灰心，我们只是暂时错过，期待二次纳新时遇见崭新的你。</p>
        </DescriptionCard>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import QueryForm from '@/components/QueryForm/QueryForm.vue'
import ProgressSteps from '@/components/ProgressSteps/ProgressSteps.vue'
import DescriptionCard from '@/components/DescriptionCard/DescriptionCard.vue'

const studentId = ref('')

const steps = ref([
  {
    title: '还没报名，快去填写报名表',
    desc: '请关注录取进程',
    active: true,
  },
  {
    title: '小橙子，恭喜你报名成功',
    desc: '请关注录取进程',
    active: false,
  },
  {
    title: '初试',
    desc: '状态: 未进行',
    active: false,
  },
  {
    title: '复试',
    desc: '状态: 未进行',
    active: false,
  },
  {
    title: '最终结果',
    desc: '状态: 未进行',
    active: false,
  },
])

function validateStudentId(value) {
  if (!/^\d{5,20}$/.test(value)) {
    return '请输入有效的学号（仅数字，5-20位）'
  }
  return null
}

async function handleQuery(value) {
  console.log('查询学号：', value)
  // TODO: 调用真实API
  await new Promise((resolve) => setTimeout(resolve, 500))
  // 模拟查询后更新步骤状态
  steps.value[0].active = false
  steps.value[1].active = true
}
</script>

<style scoped>
.page {
  padding-top: 96px;
}

.query-row {
  width: 100%;
  background: #fff;
  padding: 16px 0;
}

.content {
  padding: 0 16px;
  box-sizing: border-box;
}

.query-row .content {
  max-width: 2000px;
  margin: 0 auto;
}

.center-content.wide-section {
  max-width: 2000px;
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 480px) {
  .content {
    padding: 0 12px;
  }
}
</style>
