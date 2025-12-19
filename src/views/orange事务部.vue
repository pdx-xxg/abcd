<template>
  <div class="page-container">
<div class="img-container">
        <img src="../assets/事务部.png">
    </div>
    <br>
    <br>
    <br>
    <div class="intro-container">
        <div class="intro-img">
            <img src="../assets/事务部2.jpg">
        </div>
        <div class="intro-text">
            <h1>
                事务部简介
            </h1>
            <p>
                事务部是一个非常重要的部门，其职责涵盖了各个方面，包括活动记录、人事管理和财务管理等。这些职责使得事务部成为了组织中的核心力量，对于保证组织的顺利运转和决策的准确性起到了至关重要的作用。
            </p>
            <p>
                同时，事务部还要负责沟通和协调各个部门，确保信息的及时传递和工作的顺利协调。这样的职责使得事务部成为了工作室的参谋和副手，为组织的决策和发展提供了重要的支持和帮助。
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
    html, body {
    margin: 0;
    padding: 0;
    width: 100%;
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