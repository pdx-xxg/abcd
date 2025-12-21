<template>
	<div class="app-root">
		<el-container class="page-container">
			<el-header class="page-header">
				<h1 class="header-title">欢迎来到橙果</h1>
			</el-header>

			<el-main class="page-main">
				<el-card class="register-card" shadow="hover">
					<div class="card-title">在线报名</div>
					<el-form ref="formRef" :model="form" :rules="rules" label-width="80px" class="register-form">
						<div class="form-row">
							<el-form-item label="姓名" prop="name">
								<el-input v-model="form.name" placeholder="请输入您的姓名" />
							</el-form-item>
							<el-form-item label="学号" prop="xuehao">
								<el-input v-model="form.xuehao" placeholder="请输入您的学号" />
							</el-form-item>
						</div>

						<div class="form-row">
							<el-form-item label="邮箱" prop="youxiang">
								<el-input v-model="form.youxiang" placeholder="请输入您的邮箱" />
							</el-form-item>
							<el-form-item label="专业班级" prop="zhuanye">
								<el-input v-model="form.zhuanye" placeholder="请输入您的专业班级" />
							</el-form-item>
						</div>

						<div class="form-row">
							<el-form-item label="报名方向" prop="direction">
								<el-select v-model="form.direction" placeholder="请选择方向" class="select-width">
									<el-option label="前端组" value="frontend" />
									<el-option label="后端组" value="backend" />
									<el-option label="全栈组" value="quanzhan" />
									<el-option label="无方向" value="无方向" />
									<el-option label="硬件组" value="硬件组" />
								</el-select>
							</el-form-item>

							<el-form-item label="技术偏好" prop="techPreference">
								<el-autocomplete v-model="form.techPreference" :fetch-suggestions="querySearch"
									clearable placeholder="请输入技术方向" @select="handleSelect" class="autocomplete-width" />
							</el-form-item>

							<el-form-item label="QQ号" prop="qq">
								<el-input v-model="form.qq" placeholder="请输入QQ号" />
							</el-form-item>
						</div>

						<el-form-item label="个人简介" prop="intro" class="intro-item">
							<el-input v-model="form.intro" type="textarea" :rows="3" placeholder="请输入个人简介（如技术基础、兴趣爱好等）" />
						</el-form-item>

						<el-form-item class="submit-item">
							<el-button type="primary" @click="submitForm">提交报名</el-button>
						</el-form-item>
					</el-form>
				</el-card>
			</el-main>
		</el-container>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import type { FormInstance, FormRules } from 'element-plus'
	// 1. 新增：引入路由钩子函数
	import { useRouter } from 'vue-router'

	interface TechItem {
		value: string
		link: string
	}

	const formRef = ref<FormInstance>()

	// 2. 新增：获取路由实例
	const router = useRouter()

	const form = ref({
		name: '',
		xuehao: '',
		youxiang: '',
		zhuanye: '',
		direction: '',
		techPreference: '',
		qq: '',
		intro: '' 
	})

	const rules = ref<FormRules>({
		name: [
			{ required: true, message: '请输入您的姓名', trigger: 'blur' }
		],
		xuehao: [
			{ required: true, message: '请输入您的学号', trigger: 'blur' }
		],
		youxiang: [
			{ required: true, message: '请输入您的邮箱', trigger: 'blur' },
			{ type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
		],
		zhuanye: [
			{ required: true, message: '请输入您的专业班级', trigger: 'blur' }
		],
		direction: [
			{ required: true, message: '请选择报名方向', trigger: 'change' }
		],
		techPreference: [
			{ required: true, message: '请输入技术偏好', trigger: 'blur' }
		],
		qq: [
			{ required: true, message: '请输入您的QQ号', trigger: 'blur' },
			{ pattern: /^[0-9]{5,13}$/, message: '请输入正确的QQ号（5-13位数字）', trigger: 'blur' }
		],
		intro: [
			{ required: true, message: '请输入个人简介', trigger: 'blur' }
		]
	})

	const techList = ref<TechItem[]>([])

	const querySearch = (queryString: string, cb: (results: TechItem[]) => void) => {
		const results = queryString
			? techList.value.filter(item => item.value.toLowerCase().includes(queryString.toLowerCase()))
			: techList.value
		cb(results)
	}

	const loadTechList = () => {
		return [
			{ value: 'vue', link: 'https://github.com/vuejs/vue' },
			{ value: 'element-plus', link: 'https://github.com/element-plus/element-plus' },
			{ value: 'react', link: 'https://github.com/facebook/react' },
			{ value: 'node.js', link: 'https://nodejs.org/' },
			{ value: 'python', link: 'https://www.python.org/' },
		]
	}

	const handleSelect = (item: TechItem) => {
		console.log('选择的技术：', item)
	}

	onMounted(() => {
		techList.value = loadTechList()
	})

	const submitForm = async () => {
		if (!formRef.value) return

		try {
			await formRef.value.validate()
			// 3. 新增：跳转到成功页（替换原来的alert）
			router.push('/')
			formRef.value.resetFields()
		} catch (error) {
			console.log('表单验证失败：', error)
		}
	}
</script>

<style scoped>
	.form-row {
		display: flex;
		justify-content: space-between;
		gap: 15px;
		margin-bottom: 15px;
		flex-wrap: wrap;
	}

	.app-root {
		width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		overflow: auto;
		background-color: #f8f9fa;
	}

	.page-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.page-header {
		background-color: #ff7a45;
		color: #ffffff;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		padding: 0 20px;
	}

	.header-title {
		font-size: 20px;
		font-weight: 700;
		margin: 0;
	}

	.page-main {
		flex: 1;
		padding: 40px;
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	.register-card {
		width: 900px;
		border-radius: 12px;
		padding: 25px;
		background-color: #ffffff;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
	}

	.card-title {
		font-size: 18px;
		font-weight: 600;
		color: #333;
		margin-bottom: 20px;
		border-bottom: 1px solid #eee;
		padding-bottom: 10px;
	}

	.register-form {
		width: 100%;
	}

	.select-width {
		width: 140px;
	}

	.autocomplete-width {
		width: 180px;
	}

	.intro-item {
		margin-bottom: 15px;
		width: 100%;
	}

	.submit-item {
		margin-top: 10px;
		display: flex;
		justify-content: center;
		width: 100%;
	}
</style>