<script setup lang="ts">
import oForm from "@/views/computerFreeDiagnosis/appointment/components/oForm.vue";
import { ref } from "vue";
import dataOrange from '@/views/home/components/dataOrange.vue'

const isShow = ref(true);

const reload = () => {
  isShow.value = false;
  setTimeout(() => {
    isShow.value = true;
  }, 0);
};
</script>

<template>
  <div class="bg-[url('@/assets/bg.png')] bg-[#6900c7] pb-[8rem] mb-[-5rem]">
    <div class="pt-[10rem] md:px-[4rem] nr:px-[2rem] lg:px-[5rem] px-[1rem]">
      <div
        class="flex flex-col justify-center align-middle py-8 xl:max-w-[1140px] mx-[auto]"
      >
        <o-form v-if="isShow" :reload="reload" />
      </div>
    </div>
  </div>
</template>
