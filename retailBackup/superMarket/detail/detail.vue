<template>
  <!-- 面包屑导航 -->
  <v-breadcrumbs :items="breadcrumbs">
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>

  <!-- 电脑版 -->
  <v-container class="d-none d-sm-flex flex-column">
    <div v-for="(item, index) in items" :key="index">
      <div class="text-h4 my-5" :class="item.title ? '' : 'd-none'">
        {{ item.title }}
      </div>
      <img
        class="mx-3"
        :class="item.imgPosition == 'left' ? 'float-left' : 'float-right'"
        :width="item.imgWith || 400"
        :src="item.img"
      />
      <div
        v-for="(text, index1) in item.text"
        :key="index1"
        style="text-indent: 2em"
        class="mb-2"
      >
        {{ text }}
      </div>

      <div v-if="item.link" class="d-flex justify-space-between">
        <NuxtLink :to="item.link">
          <v-btn variant="outlined" color="primary"> 深入了解 >></v-btn>
        </NuxtLink>
      </div>
    </div>
  </v-container>

  <!-- 手机版 -->
  <v-container class="d-sm-none">
    <div v-for="(item, index) in items" :key="index">
      <div class="text-h6 my-5" :class="item.title ? '' : 'd-none'">
        {{ item.title }}
      </div>

      <div
        v-for="(text, index1) in item.text"
        :key="index1"
        style="text-indent: 2em"
        class="mb-2"
      >
        {{ text }}
      </div>

      <div v-if="item.link" class="d-flex justify-space-between">
        <NuxtLink :to="item.link">
          <v-btn variant="outlined" color="primary"> 深入了解 >></v-btn>
        </NuxtLink>
      </div>

      <!-- 因为手机版不用 float ，所以可以使用 v-img -->
      <v-img :src="item.img" />
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
    href: `${path}`,
  },
  {
    title: "方案详情",
    disabled: false,
  },
];
/**
 *
 * 详情文章内容
 */
const items = [
  {
    title: "这里是解决方案详细情况", // 可以为空
    text: [
      "碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。方便商家管理门店，方便顾客与商家建立亲密链接。",
      "第二段：碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。",
      "第三段：碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。",
    ],
    img: `${path}/detail/detail1.jpeg`, // 可以为空
    imgWith: "400", // 默认宽 400
    imgPosition: "right", // right 或者 left
    link: `${path}/detail/ddetail/ddetail`,
  },
  {
    title: "标题二：另一个主题", // 可以为空
    text: [
      "碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。方便商家管理门店，方便顾客与商家建立亲密链接。",
      "第二段：碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。",
      "第三段：碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。",
    ],
    img: `${path}/detail/detail1.jpeg`, // 可以为空
    imgWith: "400", // 默认宽 400
    imgPosition: "left", // right 或者 left
    link: `${path}/detail/ddetail/ddetail`,
  },
  {
    title: "", // 可以为空
    text: [
      "碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。方便商家管理门店，方便顾客与商家建立亲密链接。",
      "第二段：碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。",
      "第三段：碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。",
    ],
    img: `${path}/detail/detail1.jpeg`, // 可以为空
    imgWith: "300", // 默认宽 400
    imgPosition: "right", // right 或者 left
  },
];
</script>
