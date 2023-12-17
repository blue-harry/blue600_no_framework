<template>
  <v-container> </v-container>
  <v-sheet min-height="500" class="d-flex flex-column align-center">
    <div class="text-primary text-h3 my-16">{{ title }}</div>
    <NuxtLink to="/"><v-btn color="primary">返回首页</v-btn></NuxtLink>
  </v-sheet>
</template>
<script setup>
const title = "网站内容建设中...";
</script>
