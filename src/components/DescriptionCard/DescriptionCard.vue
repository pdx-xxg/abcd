<!-- 可复用说明卡片：悬停加阴影，slot 自由填充内容。 -->
<template>
  <div class="description-card">
    <div class="desc-card">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'DescriptionCard' })
</script>

<style scoped>
.description-card {
  margin-top: 16px;
}
.desc-card {
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  line-height: 1.6;
  width: 100%;
  box-sizing: border-box;
  min-height: 280px;
  box-shadow: 0 2px 8px rgba(31, 45, 61, 0.06);
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    transform 0.08s ease;
}
.desc-card:hover {
  box-shadow: 0 8px 24px rgba(31, 45, 61, 0.18);
  border-color: #c7d2fe;
  transform: translateY(-2px);
}
.desc-card :deep(h4) {
  margin: 12px 0 8px;
  color: #374151;
  font-weight: 600;
}
.desc-card :deep(p) {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .desc-card {
    background-image: none;
    min-height: auto;
  }
}

@media (max-width: 480px) {
  .desc-card {
    padding: 22px;
  }
}
</style>
