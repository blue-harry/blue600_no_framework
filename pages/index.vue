<template>
  <!-- 电脑版首页 -->
  <v-container class="d-none d-sm-flex flex-column">
    <!-- 走马灯 -->
    <v-carousel
      cycle
      height="120"
      hide-delimiters
      show-arrows="hover"
      class="mb-15"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">{{ slide }}</div>
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
      height="80"
      hide-delimiters
      show-arrows="hover"
      class="mb-2"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h5">{{ slide }}</div>
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
  "碧海数科，本地生活数字化专家",
  "读万卷书，行万里路，做一件事",
  "让遇见，成为彼此的幸运",
  // "战略合作：思迅、科脉、智百威、中伦",
  "大道至简，简洁易用才是好系统",
];
const colors = [
  "indigo",
  "deep-purple-lighten-1",
  "blue-darken-3",
  "indigo-darken-1",
];

/**
 *
 * 首页没有“了解详情”链接
 */
const items = [
  {
    title: "本地生活数字化专家",
    text: [
      "碧海数科专注社区本地生活数字化，为社区开店提供最佳数字化解决方案",
      "敬请点击下方【了解详情】按钮，认识我们的团队，了解我们的业务范围",
    ],
    img: "/home/index4.jpeg",
    link: "/detail/home_detail1", // 了解详情，链接
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
  {
    title: "简洁易用 Elegant & Friendly",
    text: [
      "简洁易用，是碧海数字化解决方案的不懈追求",
      "杂乱无章的功能堆砌只会让用户无端耗费宝贵的时间和精力",
      "数字化的目的是减轻日常经营管理工作量，提高客户满意度，而不是作茧自缚，备受糟糕的营业系统的折磨",
    ],
    img: "/home/index2.jpeg",
    link: "/detail/home_detail2", // 了解详情，链接
  },
];
</script>
