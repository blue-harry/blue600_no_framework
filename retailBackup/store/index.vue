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
const path = "/retail/store";
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
    title: "社区超市",
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
      "本页内容介绍【零售/社区超市/专有特性和功能】",
      "1、社区超市是指规模不大但商品种类繁多的小型综合性超市，通常位于三四线城市、村镇、或城市周边等人口密度不大的生活区。销售从生活必须品到五金、生鲜，品类繁杂，多为家庭或夫妻经营。",
      "2、方案设计目标是要使用简单、维护简单、对网络要求低，停电断网不影响经营。",
      "3、通常一台收银设备即可满足要求。如果同时卖生鲜，则需要配置称重秤，或安装收银秤重一体机。",
    ],
    img: `${path}/index.jpeg`,
  },
  {
    title: "简单：为社区店设计",
    text: [
      "社区超市是指规模不大但商品种类繁多的小型综合性超市，通常位于三四线城市、村镇、或城市周边等人口密度不大的生活区。销售从生活必须品到五金、生鲜，品类繁杂，多为家庭或夫妻经营。",
      "系统设计目标是要使用简单、维护简单、对网络要求低，停电断网也不影响经营。",
      "仅仅买杂货，不买生鲜，一台收银设备即可满足要求。如果同时卖生鲜，则需要配置称重秤，或安装收银秤重一体机。",
    ],
    img: `${path}/index1.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },
  {
    title: "极简：手持收银机",
    text: [
      "如果店面空间较小，或者不方便布线安装普通收银设备，可以选择手持设备收银",
      "- 支持4G网络，离线收银",
      "- <h2>小票打印</h2>",
      "- 支持支付宝、微信支付等",
    ],
    img: `${path}/index2.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },
  {
    title: "管店：一部手机全掌控",
    text: ["进货、盘点，可以全部在手机上完成", "手机拍照即可完成商品建档"],
    img: `${path}/index4.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },
  {
    title: "成功案例：阅酥堂",
    text: [
      "一场活动超200%储值预期！",
      "随着国潮风的复兴，阅酥堂凭借其国潮多元化创新升级，受到众多市民喜爱。绿豆糕、淮山酥、肉松小贝、蛋黄酥……外观精致小巧，味道也是可圈可点。",
    ],
    img: `${path}/case1.jpeg`,
  },
];
</script>
