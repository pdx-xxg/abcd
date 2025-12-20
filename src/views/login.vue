<template>
  <!-- 底部导航容器 -->
    <footer class="footer-container">
        <!-- Logo区域 -->
        <div class="footer-logo">
            <img src="../assets/logo.png"alt="橙果工作室Logo">
        </div>

        <!-- 导航列容器 -->
        <div class="footer-navs">
            <!-- 网站导航列 -->
            <div class="nav-column">
                <h3 class="column-title">网站导航</h3>
                <ul class="nav-list">
                    <li><a href="#">主页</a></li>
                    <li><a href="#">学习部</a></li>
                    <li><a href="#">开发部</a></li>
                    <li><a href="#">事务部</a></li>
                    <li><a href="#">外宣部</a></li>
                    <li><a href="#">短视频组</a></li>
                    <li><a href="#">全栈组</a></li>
                    <li><a href="#">硬件组</a></li>
                    <li><a href="#">嵌入式组</a></li>
                    <li><a href="#">开发组</a></li>
                    <li><a href="#">大数据组</a></li>
                </ul>
            </div>

            <!-- 工作室风采列 -->
            <div class="nav-column">
                <h3 class="column-title">工作室风采</h3>
                <ul class="nav-list">
                    <li><a href="#">选购推荐</a></li>
                    <li><a href="#">活动剪影</a></li>
                    <li><a href="#">橙果新闻</a></li>
                    <li><a href="#">技术分享</a></li>
                </ul>
            </div>

            <!-- 友情链接列 -->
            <div class="nav-column">
                <h3 class="column-title">友情链接</h3>
                <ul class="nav-list">
                    <li><a href="#">工大官网</a></li>
                    <li><a href="#">工大教务系统</a></li>
                    <li><a href="#">工大教务处</a></li>
                    <li><a href="#">数字工大</a></li>
                    <li><a href="#">微软正版化</a></li>
                    <li><a href="#">校园邮箱</a></li>
                </ul>
            </div>

            <!-- 加入我们列 -->
            <div class="nav-column">
                <h3 class="column-title">加入我们</h3>
                <ul class="nav-list">
                    <li><a href="#">在线报名</a></li>
                    <li><a href="#">查询报名状态</a></li>
                </ul>
            </div>
        </div>
    </footer>

    <!-- 版权信息区域 -->
    <div class="copyright">
        <p>Copyright © 2015-2025齐鲁工业大学网络信息中心橙果工作室</p>
        <p>本站点由橙果工作室前端组提供技术支持</p>
    </div>

</template>
<script>



export default {
  
}
</script>
<style scoped>
     body {
            font-family: "微软雅黑", sans-serif;
            color: #5a5555;
            /* 文字默认灰色 */
        }

        /* 底部导航容器：Flex布局，左Logo + 右导航列 */
        .footer-container {
            display: flex;
            padding: 40px 80px;
            border-bottom: 1px solid #eee;
            /* 底部分隔线 */
        }

        /* Logo区域：Flex垂直居中 */
        .footer-logo {
            display: flex;
            align-items: center;
            margin-right: 80px;
            /* 与导航列的间距 */
        }

        .footer-logo img {
            width: 150px;
            height: 140px;
            margin-right: 15px;
        }

        .logo-text .logo-title {
            font-size: 20px;
            color: #22c55e;
            /* 绿色标题 */
            font-weight: bold;
        }



        /* 导航列容器：Flex平分空间 */
        .footer-navs {
            display: flex;
            flex: 1;
            /* 占满剩余宽度 */
            justify-content: space-between;
            /* 列之间均匀分布 */
        }

        /* 单个导航列 */
        .nav-column {
            min-width: 120px;
        }

        .column-title {
            font-size: 18px;
            color: #5a5555;
            margin-bottom: 15px;
            font-weight: 600;
        }

        .nav-list {
            list-style: none;
            padding-left: 0;
        }

        .nav-list li {
            margin-bottom: 10px;
        }

        .nav-list a {
            color: #5a5555;
            font-size: 14px;
            text-decoration: none;
        }

        .nav-list a:hover {
            color: #acacac;
            text-decoration: underline;
        }

        /* 版权信息区域 */
        .copyright {
            padding: 20px 80px;
            font-size: 14px;
            color: #999;
            display: flex;
            justify-content: space-between;
            /* 左右分布 */
            background-color: #f8f8f8;
        }
</style>
