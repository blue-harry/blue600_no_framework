<template>
  <!-- 电脑版首页 -->
  <v-container class="d-none d-sm-flex flex-column">
    <!-- 走马灯 -->
    <v-carousel
      cycle
      height="80"
      hide-delimiters
      show-arrows="hover"
      class="mb-15"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h4">{{ slide }}</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- 图文内容 -->
    <div v-for="(item, index) in items" :key="index" class="ma-12">
      <v-row v-if="index % 2 === 0">
        <v-col cols="6">
          <v-card flat>
            <div class="text-h4 mb-3">
              {{ item.title }}
            </div>
            <div
              v-for="(p, index1) in item.text"
              :key="index1"
              class="mb-2"
              v-html="p"
            ></div>

            <div v-if="item.link" class="d-flex justify-space-between">
              <NuxtLink :to="item.link">
                <v-btn variant="outlined" color="primary" rounded="xl">
                  了解详情</v-btn
                >
              </NuxtLink>
            </div>
          </v-card></v-col
        >
        <v-col cols="6">
          <v-img
            class="align-end text-white"
            height="300"
            :src="item.img"
          ></v-img
        ></v-col>
      </v-row>
      <v-row v-if="index % 2 === 1">
        <v-col cols="6">
          <v-img
            class="align-end text-white"
            height="300"
            :src="item.img"
          ></v-img
        ></v-col>
        <v-col cols="6">
          <v-card flat>
            <div class="text-h4 mb-3">
              {{ item.title }}
            </div>
            <div
              v-for="(p, index1) in item.text"
              :key="index1"
              class="mb-2"
              v-html="p"
            ></div>

            <div v-if="item.link" class="d-flex justify-space-between">
              <NuxtLink :to="item.link">
                <v-btn variant="outlined" color="primary" rounded="xl">
                  了解详情</v-btn
                >
              </NuxtLink>
            </div>
          </v-card></v-col
        >
      </v-row>
    </div>
  </v-container>

  <!-- 手机版首页 -->
  <v-container class="d-sm-none">
    <!-- 走马灯 -->
    <v-carousel
      cycle
      height="100"
      hide-delimiters
      show-arrows="hover"
      class="mb-2"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h6">{{ slide }}</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- 图文内容 -->
    <div v-for="(item, index) in items" :key="index" class="mb-15">
      <v-img class="align-end text-white" height="250" :src="item.img"></v-img>
      <v-card flat class="my-5">
        <div class="text-h5 mb-3">
          {{ item.title }}
        </div>
        <div
          v-for="(p, index1) in item.text"
          :key="index1"
          class="mb-2"
          v-html="p"
        ></div>

        <NuxtLink :to="item.link">
          <v-btn
            v-if="item.link"
            variant="outlined"
            color="primary"
            rounded="xl"
            >了解详情</v-btn
          ></NuxtLink
        >
      </v-card>
    </div>
  </v-container>
</template>
<script setup>
/**
 * 滚动字幕条
 */
const slides = [
  "Welcome to my Games Website",
  " Go confidently in the direction of your dreams, live your own life",
  "Do something today that your future self will thank you for",
  " Opportunities don’t happen, you create them",
  " It always seems impossible until it’s done",
];
const colors = [
  "indigo",
  "warning",
  "pink darken-2",
  "red lighten-1",
  "deep-purple accent-4",
];

/**
 *
 * 首页没有“了解详情”链接
 */
const items = [
  {
    title: "Flappy bird of my version",
    text: [
      "Maybe it's simple, but it is the first game developed by myself. ",
      "<v-html> <a href='https://www.blue600.com/flappybird' target='_blank'>play  FLAPPY BIRD</a></v-html>",
    ],
    img: "/home/index4.jpeg",
  },
  {
    title: "零售｜餐饮｜美容保健",
    text: [
      "三大产品线，覆盖社区生活方方面面",
      "【零售】",
      "- 便利店、社区超市、蔬菜水果店、药店、面包店、母婴用品店、社区服装鞋帽店、宠物店等",
      "【餐饮】",
      "- 快餐店、面馆、饺子馆、茶餐厅、咖啡店、茶馆、西餐厅、火锅店、中式餐馆、酒楼等",
      "【美容保健】",
      "- 美容店、美发店、美甲店、足浴店、社区按摩店、健身房、瑜伽馆等",
    ],
    img: "/home/index1.jpeg",
  },
];
</script>
