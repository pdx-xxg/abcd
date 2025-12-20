<template>
<div class="body">
    <div class="head">
        <img src="../assets/heads.png" class="head-img">
    </div>

    <div class="detail">
        <img src="../assets/graph.png" alt="无法加载" class="left-img">
        <div class="right-text">
            <h2>硬件组简介</h2>
            <p>硬件组是一个氛围轻松的小组。在这里,你可以学习到各种基础的硬件知识,无论是简单的接网线、装机,还是复杂的路由器配置等,学长们会一步步带你上手。</p>
            <p>另外我们会关注科技圈的最新动态,不仅能让你自主选择合适的电脑和手机,还能亲自动手解决设备上的小问题。</p>
            <p>而如果你想更进一步,我们还会传授服务器和运维方面的专业知识,打开硬件的大门。欢迎有相同兴趣的小伙伴加入我们这个热烈的大家庭。让我们相互讨论和学习,在这个充满可能的组织里成长。</p>

        </div>
    </div>
</div>

    </template>
    <script>
        export default{

        }
    </script>
    <style>

        .body{
            height: 200vh;
        }
 .head {
            border: none;
        }

        .head-img {
            width: 1300px;
            height: auto;

        }

        .detail {
            display: flex;
            align-items: center;
            gap: 20px;
            width: 1000px;

            padding: 30;
            border: 1px solid #eee;
            margin: 50px auto;
        }

        .left-img {
            width: 300px;
            height: auto;
            border-radius: 8px;
        }

        .right-text {
            flex: 1;
        }
    </style>