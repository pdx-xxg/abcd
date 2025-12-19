<template>
    <section class="hero-section">
        <div class="hero-content">
            <div class="hero-text-left">
                <h2>橙果工作室</h2>
                <h1>嵌入式组</h1>
            </div>
            <div class="hero-text-right">
                <div class="big-icon">🍊</div>
                <div class="big-text">
                    <div class="cn">橙果工作室</div>
                    <div class="en">range studio</div>
                </div>
            </div>
        </div>
    </section>

    <main class="main-container">
        <div class="info-card">
            <div class="card-image">
                <img src="" alt="">
            </div>
            <div class="card-content">
                <h3>嵌入式组简介</h3>
                <p>嵌入式学习使用单片机和操作系统来开发和实现实际的硬件驱动和设备控制。</p>
                <p>通过学习，你可以造手机、造电脑、造机器人、让万物互联，远程控制机器，打造属于你自己的智能家居系统，让生活更加舒适。</p>
                <p class="highlight">欢迎加入我们，一起探索嵌入式的世界！</p>
            </div>
        </div>
    </main>

    <footer class="site-footer">
        <div class="footer-content">
            <div class="footer-logo">
                <div class="f-logo-icon">🍊</div>
                <div class="f-logo-text">
                    <span>橙果工作室</span>
                    <span class="en">Orange Studio</span>
                </div>
            </div>

            <div class="footer-links">
                <div class="link-col">
                    <h4>网站导航</h4>
                    <a href="#">主页</a>
                    <a href="#">学习部</a>
                    <a href="#">开发部</a>
                    <a href="#">事务部</a>
                    <a href="#">外宣部</a>
                    <a href="#">短视频组</a>
                    <a href="#">全栈组</a>
                    <a href="#">硬件组</a>
                    <a href="#">嵌入式组</a>
                    <a href="#">开发组</a>
                    <a href="#">大数据组</a>
                </div>
                <div class="link-col">
                    <h4>工作组风采</h4>
                    <a href="#">选聘推荐</a>
                    <a href="#">活动剪影</a>
                    <a href="#">橙果新闻</a>
                    <a href="#">技术分享</a>
                </div>
                <div class="link-col">
                    <h4>友情链接</h4>
                    <a href="#">工大官网</a>
                    <a href="#">工大教务系统</a>
                    <a href="#">工大教务处</a>
                    <a href="#">数字工大</a>
                    <a href="#">微软正版化</a>
                    <a href="#">校园邮箱</a>
                </div>
                <div class="link-col">
                    <h4>加入我们</h4>
                    <a href="#">在线报名</a>
                    <a href="#">查询报名状态</a>
                </div>
            </div>
        </div>
        
        <div class="copyright">
            <p>Copyright © 2015-2025齐鲁工业大学网络信息中心橙果工作室</p>
            <p style="text-align: right;">本站点由橙果工作室前端组提供技术支持</p>
        </div>
    </footer>

</template>
<script>
    export default {
        
    }
</script>
<style scoped>
    .hero-section {
    position: relative;
    background: linear-gradient(135deg, #e4d708 0%, #8cc63f 100%);
    height: 480px;
    width: 100%;
    border-bottom-left-radius: 50% 80px;
    border-bottom-right-radius: 50% 80px;
    overflow: hidden;
}

.hero-content {
    width: 1200px;
    margin: 0 auto;
    padding-top: 80px;
    display: flex;
    justify-content: space-between;
    position: relative;
}

.hero-text-left {
    color: #fff;
    padding-left: 20px;
}

.hero-text-left h2 {
    font-size: 48px;
    font-weight: normal;
    margin-bottom: 10px;
    letter-spacing: 2px;
}

.hero-text-left h1 {
    font-size: 64px;
    font-weight: bold;
    letter-spacing: 4px;
}

.hero-text-right {
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.8);
    margin-right: 100px;
    margin-top: 20px;
}

.big-icon {
    font-size: 60px;
    margin-right: 15px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.big-text .cn {
    font-size: 32px;
    font-weight: bold;
}

.big-text .en {
    font-size: 24px;
    font-family: monospace;
}

.main-container {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    margin-top: 120px;
    margin-bottom: 60px;
}

.info-card {
    background: #fff;
    display: flex;
    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
    border-radius: 4px;
    overflow: hidden;
    min-height: 400px;
}

.card-image {
    width: 45%;
    overflow: hidden;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.card-content {
    width: 55%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.card-content h3 {
    font-size: 24px;
    color: #333;
    margin-bottom: 25px;
    font-weight: normal;
}

.card-content p {
    font-size: 14px;
    color: #777;
    line-height: 1.8;
    margin-bottom: 15px;
    text-align: justify;
    text-indent: 2em;
}

.card-content .highlight {
    color: #666;
    font-weight: bold;
    margin-top: 10px;
}

.site-footer {
    border-top: 1px solid #eee;
    padding-top: 50px;
    padding-bottom: 20px;
    background-color: #fff;
}

.footer-content {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
}

.footer-logo {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 20px;
}

.f-logo-icon {
    font-size: 60px;
    color: #fdb933;
    margin-bottom: 10px;
}

.f-logo-text {
    text-align: center;
}

.f-logo-text span {
    display: block;
    color: #fdb933;
    font-weight: bold;
    font-size: 18px;
}
.f-logo-text .en {
    font-size: 12px;
    letter-spacing: 1px;
}

.footer-links {
    flex: 1;
    display: flex;
    justify-content: space-around;
}

.link-col {
    display: flex;
    flex-direction: column;
}

.link-col h4 {
    color: #999;
    font-size: 12px;
    margin-bottom: 15px;
    font-weight: normal;
}

.link-col a {
    color: #999;
    font-size: 12px;
    margin-bottom: 8px;
    transition: color 0.2s;
}

.link-col a:hover {
    color: #fdb933;
}

.copyright {
    width: 1000px;
    margin: 0 auto;
    border-top: 1px solid #eee;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #ccc;
}
</style>