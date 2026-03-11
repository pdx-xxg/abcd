<script setup lang="ts">
import ali from '@/assets/company/ali.png';
import chaosuan from '@/assets/company/chaosuan.png';
import beikuang from '@/assets/company/beikuang.png';
import xiaomi from '@/assets/company/xiaomi.png';
import jingdong from '@/assets/company/jingdong.png';
import zijie from '@/assets/company/zijie.png';
</script>

<template>
  <div class="flex flex-row flex-wrap">
    <div class="px-16 max-w-[720px] md:max-w-[1140px] mx-[auto]">
      <div class="mt-[2rem] mb-10">
        <!-- <div class="flex justify-center text-4xl">
          <h2 class="border-b-2 border-black p-6">数据橙果</h2>
        </div> -->
      </div>
      <div class="flex flex-col item-center space-y-4 space-x-0 mb-16 nr:flex-row nr:space-y-0 nr:justify-around nr:space-x-4">
        <div class="nr:w-[33%] text-center">
          <h1 class="text-4xl font-bold mb-2 text-blue-500">600+</h1>
          <p class="text-base mb-2">往届与当届橙果工作室成员总数</p>
          <p class="text-sm text-[#687281]">橙果工作室自2015年起在学校网络信息中心成立, 经过数年的发展, 至今已经有总约400余名工作室成员。</p>
        </div>
        <div class="nr:w-[33%] text-center">
          <h1 class="text-4xl font-bold mb-2 text-orange-500">20+</h1>
          <p class="text-base mb-2">认可工作室成员的企事业单位</p>
          <p class="text-sm text-[#687281]">我们的优秀成员得到了多家知名企业的认可, 如字节跳动, 阿里巴巴, 水滴筹, 浪潮集团等。</p>
        </div>
        <div class="nr:w-[33%] text-center">
          <h1 class="text-4xl font-bold mb-2 text-green-500">45+</h1>
          <p class="text-base mb-2">工作室成员服务过的校院系部门</p>
          <p class="text-sm text-[#687281]">工作室的服务面向全校师生, 我们已为校内众多院系部门负责过计算机安装维修, 官网更新维护等工作。</p>
        </div>
      </div>
      <div class="flex flex-col items-center space-y-4 space-x-0 mb-16 nr:flex-row nr:space-y-0 nr:justify-around nr:space-x-4">
        <div class="nr:max-w-[50%] mb-8 nr:mb-0">
          <img :src="ali">
        </div>
        <div class="nr:max-w-[50%]">
          <img :src="chaosuan">
        </div>
      </div>
      <div class="flex flex-col items-center space-y-4 space-x-0 mb-16 nr:flex-row nr:space-y-0 nr:justify-around nr:space-x-4">
        <div class="nr:max-w-[50%]">
          <img :src="beikuang">
        </div>
        <div class="nr:max-w-[50%]">
          <img :src="xiaomi">
        </div>
      </div>
      <div class="flex flex-col items-center space-y-4 space-x-0 nr:flex-row nr:space-y-0 nr:justify-around nr:space-x-4">
        <div class="nr:max-w-[50%]">
          <img :src="jingdong">
        </div>
        <div class="nr:max-w-[50%]">
          <img :src="zijie">
        </div>
      </div>
    </div>
  </div>
</template>
