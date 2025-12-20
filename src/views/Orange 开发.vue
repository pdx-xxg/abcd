<template>
<div class="page-wrap">
    <!-- 顶部图片区域：替换为你的顶部背景图URL -->
    <div class="top-img-container">
        <img src="../assets/top2.png" 
        alt="橙果工作室开发组顶部背景"
        class="top-bg-img"
        >
    </div>

    <!-- 主体内容（保留原有结构） -->
    <div class="container">
        <img src="http://orangestudio.cn/static/department/xxb.jpg" alt="开发组活动" class="group-img">
        <div class="text-area">
            <h2>开发组简介</h2>
            <p>开发组是橙果工作室负责项目开发的小组，承担网络信息中心及学校的开发任务。</p>
            <p>开发组由橙果工作室各个小组、部门中有一定技术水平的成员组成，涵盖前端、后端、运维等各个技术点。部门中提供丰富的学习资料和生产资源，便于组员完成开发任务及进行自身发展。</p>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'Orange 开发',
    }
</script>

<style scoped>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .page-wrap {
            font-family: "微软雅黑", sans-serif;
        }

        /* 顶部图片容器：让图片适配页面宽度 */
        .top-img-container {
            width: 100%;
            overflow: hidden;
            /* 防止图片溢出 */
            border-radius: 0 0 50% 50% / 0 0 30px 30px;
            /* 保留底部弧形（可选） */
        }

        /* 顶部背景图：铺满容器，保持比例 */
        .top-bg-img {
            width: 100%;
            height: auto;
            /* 自适应高度，避免变形 */
            display: block;
            /* 消除图片底部默认空白 */
        }

        /* 主体容器（保留原有样式） */
        .container {
            width: 80%;
            margin: 30px auto;
            display: flex;
            align-items: center;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .group-img {
            width: 40%;
            border-radius: 4px;
        }

        .text-area {
            width: 60%;
            padding-left: 30px;
        }

        .text-area h2 {
            font-size: 24px;
            color: #333;
            margin-bottom: 10px;
        }

        .text-area p {
            font-size: 18px;
            color: #666;
             /* 首行缩进2个字符（推荐用em单位，适配字体大小） */
            text-indent: 2em; 
            /* 段落上下间距（控制段落之间的距离） */
            margin: 10px 0; 
            /* 可选：行高，让段落内文字更易读 */
        }

        /* 响应式适配：手机端自动调整 */
        @media (max-width: 768px) {
            .container {
                flex-direction: column;
                /* 手机端图片+文字竖向排列 */
            }

            .group-img,
            .text-area {
                width: 100%;
                padding-left: 0;
            }

            .text-area {
                margin-top: 20px;
            }
        }
</style>