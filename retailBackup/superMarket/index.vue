<template>
  <!-- 面包屑导航 -->
  <div class="d-flex justify-space-between">
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
  </div>

  <!-- 电脑版 -->
  <v-container class="d-none d-sm-flex flex-column">
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

  <!-- 手机版 -->
  <v-container class="d-sm-none">
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
const path = "/retail/superMarket";
/**
 *
 * 面包屑导航
 */
const breadcrumbs = [
  {
    title: "首页",
    disabled: false,
    href: "/",
  },
  {
    title: "商超百货",
    disabled: false,
  },
];

/**
 * 可搜索内容
 */
useHead({
  meta: [
    {
      name: "description",
      content: "社区超市连锁便利店大型超市专卖店精品百货",
    },
  ],
});
/**
 *
 * 图文内容
 */
const items = [
  {
    title: "方案概要",
    text: [
      "建议先浏览 <a href='/retail/common'>零售总述</a>，完整了解【零售/公共特性和功能】",
      "本页内容介绍【零售/商超百货/专有特性和功能】",
      "1、根据药监局要求全面支持GSP管理，部分省份接入了当地医保",
      "2、门店前台销售支持医药结算、处方单销售、实名销售",
      "3、管理药品的生产企业、注册商标、批准文号、处方单用药分类、医保用药类型等",
    ],
    img: `${path}/index.jpeg`,
  },
  {
    title: "多通道高效收银",
    text: [
      "- 收银员通道，商品扫码顺畅不卡顿，提高单台收银机的收银笔数。",
      "- 自助收银通道，简单易用，照顾年轻一代顾客的偏好。",
      "- 高峰期可临时扩充随意数量的便携手持收银通道",
    ],
    img: `${path}/index1.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },
  {
    title: "商品种类繁多",
    text: ["- 从日用品到称重生鲜，支持多品类商品的销售管理", "- "],
    img: `${path}/index2.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },

  {
    title: "行业动态",
    text: [
      "- 挑战：来自电商的挑战。",
      "- 新机遇：专业化、连锁化",
      "- 方便性是核心：社区店始终具有方便性的天然优势，区域大商超没有了，社区店承接了线下购物方便性的需求。",
    ],
    img: `${path}/index4.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },
];
</script>
