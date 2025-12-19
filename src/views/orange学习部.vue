<template>
    <div class="page-container">
<div class="img-container">
        <img src="../assets/学习部.png">
    </div>
    <br>
    <br>
    <br>
    <div class="intro-container">
        <div class="intro-img">
            <img src="../assets/学习部2.jpg">
        </div>
        <div class="intro-text">
            <h1>
                学习部简介
            </h1>
            <p>
                学习部是橙果工作室负责学习相关事务的核心部门。在这个部门中，我们管理丰富多样的学习资源，同时也策划并推动各类学习活动。我们的使命还包括监督工作室成员的学习进展，确保他们能够高效地管理自己的学习。
            </p>
            <p>
                在学习部，我们致力于营造一个积极的学习氛围，激发成员的学习热情。通过不断创新和改进，我们努力推动工作室成员在各自领域的不断成长和进步。
            </p>
        </div>

    </div>
    <br>
    <br>
    <br>
    </div>
   
</template>

<script>
export default {

}
</script>

<style scoped>
    .page-container {
  width: 100vw; /* 宽度占满浏览器可视区域 */
  min-height: 100vh; /* 高度至少占满可视区域（内容多的话会自动延伸） */
  box-sizing: border-box; /* 避免padding/margin撑大盒子 */
}
.img-container img {
    width: 100%;
    height: auto;
}

.intro-container {
    display: flex;

    margin: 0 auto;
    border: 1px solid #FCFCFC;
    border-radius: 8px;
    max-width: 1000px;
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);

}

.intro-img img {
    width: 400px;
    height: 300px;
}

.intro-text {
    padding: 0 20px;
}

.intro-text h1 {
    font-weight: 400;
}

.intro-text p {
    text-indent: 2em;
    font-size: 18px;
    font-weight: 250;
    line-height: 25px;

}
</style>