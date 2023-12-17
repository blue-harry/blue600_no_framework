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
const path = "/retail/mall";
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
    title: "购物中心",
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
      "本页内容介绍【零售/购物中心/专有特性和功能】",
      "为城市中心大型购物中心，商业综合体而设计的系统方案",
    ],
    img: `${path}/index.jpeg`,
  },
  {
    title: "管理招商物业",
    text: [
      "提供楼层管理、铺位规划、商户管理、水电费统计、店铺管理、商户合同管理等。",
    ],
    img: `${path}/index4.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },

  {
    title: "VIP会员服务",
    text: [
      "商户扫码即可开通自己门店的线上会员，无需开通小程序。会员通过微会员系统可及时接收优惠活动通知领取优惠券、消费后实时收到消费、积动通知、支持自助充值续费、积分兑换、并可通过电子小票查询消费清单等。",
    ],
    img: `${path}/index4.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },
  {
    title: "一键导航到店",
    text: [
      "- 为商户提供线上门店，方便顾客在线下单",
      "- 为顾客提供线下一键导航到店",
    ],
    img: `${path}/index4.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },
  {
    title: "自助停车缴费",
    text: [
      "线上商城与停车系统无缝打通，顾客进入停车场后自动开始计算时间、费用，离开商场时，在线上进行缴费即可，支持核销停车优惠。",
    ],
    img: `${path}/index4.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },
];
</script>
