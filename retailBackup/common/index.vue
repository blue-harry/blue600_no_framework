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
const path = "/retail/common";
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
    title: "零售总述",
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
  // {
  //   title: "零售总述",
  //   text: [
  //     "- 社区超市、夫妻店、五金杂货店",
  //     "- 连锁便利店、图书文具连锁、美妆日化连锁、烟酒连锁、茶叶连锁",
  //     "- 商超百货、精品百货、区域中心大超市",
  //     "- 购物中心、商业综合体、招商物业、大型百货商场、商业一条街、百货餐饮夜市",
  //   ],
  //   img: `${path}/index.jpeg`,
  //   link: `${path}/detail/detail`, // 了解详情，链接
  // },
  {
    title: "零售总述",
    text: [
      "【零售/公共特性和功能】",
      "1、行业特性明显",
      "2、品牌形式突出",
      "3、小店大连锁模式",
      "【适用业态】",
      "- 社区超市、夫妻店、五金杂货店",
      "- 连锁便利店、图书文具连锁、美妆日化连锁、烟酒连锁、茶叶连锁",
      "- 商超百货、精品百货、区域中心大超市",
      "- 购物中心、商业综合体、招商物业、大型百货商场、商业一条街、百货餐饮夜市",
    ],
    img: `${path}/index1.jpeg`,
  },
  {
    title: "高效收银台",
    text: [
      "【功能特性】",
      "- 快捷收银，无需按键",
      "- 触屏快速定位商品",
      "- 扫描即付",
      "- 易操作（要细化具体化）",
      "【价值收益】",
      "- 降低差错率",
      "- 减少顾客排队",
      "- 降低弃购率",
      "- 新员工上手快",
    ],
    img: `${path}/index2.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },

  {
    title: "小程序商城，打通线上线下",
    text: [
      "小程序商城，顾客可通过小程序下单。特别是本社区的街坊邻里，年轻人线上下单，老人孩子到店领取，为邻里提供方便，也因此增加了门店销量。",
      "对接第三方外卖，为邻居送货到家，解决了顾客有时“懒得下楼”的问题。",
      "顾客通过手机查询门店商品清单，避免白跑一趟。紧缺商品到货及时通知需要的顾客，方便了顾客，增加了销量。",
    ],
    img: `${path}/index3.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },
  {
    title: "商品精细管理",
    text: [
      "- 可实现商品分批次规格管理，方便单人、多人盘点",
      "- 能用ABC报表标记优质商品。",
    ],
    img: `${path}/index4.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },

  {
    title: "行业动态",
    text: [
      "- 挑战：来自电商的挑战。",
      "- 新机遇：专业化、连锁化",
      "- 方便性是核心：社区店始终具有方便性的天然优势，区域大商超没有了，社区店承接了线下购物方便性的需求。",
    ],
    img: `${path}/forum.jpeg`,
    link: `${path}/detail/detail`, // 了解详情，链接
  },
];
</script>
