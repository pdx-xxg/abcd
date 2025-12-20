<template>
<div class="body">
      <div class="head">
        <img src="../assets/head.png" class="head-img">
    </div>

    <div class="detail">
        <img src="..//assets/graph.png" alt="无法加载" class="left-img">
        <div class="right-text">
            <h2>全栈组简介</h2>
            <p>全栈组是一个氛围轻松的小组。在这里,你可以学习到各种基础的编程知识,无论是简单的静态页面,还是复杂小游戏等,学长们会一步步带你上手。</p>
            <p>另外我们会关注科技与编码生态的最新动态,尽量做到步伐紧跟市场,眼光长于市场。</p>
            <p>如果你想更进一步的学习,在这里成员们不仅能够提升技术水平，还能通过组织的各种活动分享知识、结交志同道合的朋友。无论你是初学者还是有一定基础，我们都欢迎你的加入，共同探索代码的世界。</p>

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