<template>
  <div class="d-flex justify-space-between">
    <!-- 面包屑导航 -->
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
const path = "/retail/chain";
/**
 *
 * 面包屑导航
 */
const breadcrumbs = [
  {
    title: "零售",
    disabled: false,
    href: "/retail/common/",
  },
  {
    title: "连锁便利店",
    disabled: false,
  },
];

/**
 * 搜索内容
 */
useHead({
  meta: [
    {
      name: "description",
      content: "7-Eleven便利店连锁便利店社区店",
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
      "本页内容介绍【零售/连锁便利店/专有特性和功能】",
      "1、社区超市是指规模不大但商品种类繁多的小型综合性超市，通常位于三四线城市、村镇、或城市周边等人口密度不大的生活区。销售从生活必须品到五金、生鲜，品类繁杂，多为家庭或夫妻经营。",
      "2、方案设计目标是要使用简单、维护简单、对网络要求低，停电断网不影响经营。",
      "3、通常一台收银设备即可满足要求。如果同时卖生鲜，则需要配置称重秤，或安装收银秤重一体机。",
    ],
    img: `${path}/index.jpeg`,
  },
  {
    title: "多门店连锁，一套系统管理",
    text: [
      "一套系统打通门店报表、货流管理、营销活动、会员和储值积分。",
      "门店交易数据动态展示，实时监控热销商品、店铺交易情况、门店排行、最近交易走势。实时监控查看，全方位掌握店面信息",
      "内置门店所需的多种营业报表，从单店到连锁都能用，帮助您分析生意、进行连锁管理，并做出科学的决策。",
    ],
    img: `${path}/index1.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },
  {
    title: "调货配货，运筹帷幄",
    text: [
      "根据库存信息实现门店间商品自由调货，全程自动化。如果你的供应商对接系统，你就能实现一站式订货、追踪货流以及结算。",
    ],
    img: `${path}/index2.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },
  {
    title: "总部做活动，分店秒同步",
    text: [
      "当总部发起统一的营销活动，只需在云后台设置，并同步到门店就能使用，并且一键推送到会员和客户的手机，活动业绩、利润、折让统一汇总，无需再安排人员层层通知和统计",
    ],
    img: `${path}/index3.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },
  {
    title: "会员共享、储值通用",
    text: [
      "各门店的会员可以设置分区域共享，也可以设置全国共享，结合后台潜水会员报表，开卡门店可以根据会员消费情况发放会员优惠券进行促活，开启会员充值直达总部功能，可以让会员储值在门店间通用，月底总部对账给门店，增加会员卡价值的同时，还能为总部增加现金流。",
    ],
    img: `${path}/index5.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },
  {
    title: "一键克隆门店",
    text: [
      "支持既有门店一键复制，商品信息、会员资料、供货商信息等全部迁移到新店，无需重新录入资料和设置，真正实现1分钟开新店！",
    ],
    img: `${path}/index4.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },
];
</script>
