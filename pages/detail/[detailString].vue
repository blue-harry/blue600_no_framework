<template>
  <!-- 面包屑导航 -->
  <v-breadcrumbs :items="details[datasheet][detailName].breadcrumbs">
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>

  <!-- 电脑版 -->
  <v-container class="d-none d-sm-flex flex-column">
    <div
      v-for="(item, index) in details[datasheet][detailName].content"
      :key="index"
    >
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
    </div>
  </v-container>
  <!-- 手机版 -->
  <v-container class="d-sm-none">
    <div
      v-for="(item, index) in details[datasheet][detailName].content"
      :key="index"
    >
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

      <!-- 因为手机版不用 float ，所以可以使用 v-img -->
      <v-img :src="item.img" />
    </div>
  </v-container>
</template>
<script setup>
const { detailString } = useRoute().params;
const [datasheet, detailName] = detailString.split("_");

const details = {
  home: {
    detail1: {
      breadcrumbs: [
        {
          title: "首页",
          disabled: false,
          href: "/",
        },
        {
          title: "认识碧海数科",
          disabled: false,
        },
      ],
      content: [
        {
          title: "碧海数科是怎样一支团队", // 可以为空
          text: [
            "公司主要合伙人有超过20年大中型企业数字化实操经验，有的来自腾讯阿里等互联网企业，有的来自金融行业数字化团队。",
            "我们反对烦琐哲学，擅长化繁为简，竭力为您提供最简洁易用的设计方案。",
            "除了自研的产品，我们也同本地生活领域最好的软件公司合作，选择最适合客户业务场景的产品。甚至不拒绝客户自己选择喜欢的软件产品，我们只收取售前和售后服务费用。",
          ],
          img: `/${datasheet}/detail/team1.jpeg`, // 可以为空
          imgWith: "600", // 默认宽 400
          imgPosition: "right", // right 或者 left
        },
        {
          title: "我们有执念", // 可以为空
          text: [
            "我们坚持自己的价值观，宁可不挣钱，也决不向市场投放垃圾产品。",
            "商业业务软件领域产品和解决方案鱼目混珠良莠不齐，垃圾产品已经很多很多，坑蒙拐骗的商家已经很多很多，并不缺少碧海数科这一家，市场上真正缺乏的是优质产品。我们誓言要为本地生活领域带来优雅易用（ELEGANT & FRIENDLY）的优质产品和解决方案。",
          ],
          img: `/${datasheet}/detail/team2.jpeg`, // 可以为空
          imgWith: "500", // 默认宽 400
          imgPosition: "left", // right 或者 left
        },
      ],
    },
    detail2: {
      breadcrumbs: [
        {
          title: "首页",
          disabled: false,
          href: "/",
        },
        {
          title: "简洁易用",
          disabled: false,
        },
      ],
      content: [
        {
          title: "简洁易用 Elegant & Friendly ", // 可以为空
          text: [
            "Elegant 和 Friendly 这两个英文单词似乎更能准确表达我们对产品品质的追求，为了用户容易理解，中文我们称为简洁易用。",
            "Elegant 是指 Elegant Design 优雅的设计。那什么是优雅的设计呢？就是简洁优美的设计，还是太抽象吧？那就通过实例来传达我们的意思。比如，淘宝商城的设计就是跟我们的设计理念完全相反的方向，混乱而低俗。",
            "Friendly 是指 User Friendly 用户友好的设计，这个容易理解，就是容易使用。这种设计追求 Intuitive，就是说用户凭着自己的直觉就能学会使用，而不是满屏幕的按钮和输入框让人一脸困惑莫衷一是。最经典的实例是乔布斯的iPad刚上市，他的一个朋友几岁的女儿在没有任何成人帮助下自己凭人类的直觉学会了如何使用。",
          ],
          img: `/${datasheet}/detail/index1.jpeg`, // 可以为空
          imgWith: "300", // 默认宽 400
          imgPosition: "right", // right 或者 left
        },
        {
          title: "大道至简 Less is more", // 可以为空
          text: [
            "Less is more ，乔布斯的审美哲学，来源于建筑设计的简约化运动。",
            "这是20世纪30年代著名的建筑师路德维希·密斯·凡德罗说过的一句话，意思是“少即多”这是一种提倡简单，反对过度装饰的设计理念。简单的东西往往带给人们的是更多的享受，更深刻的印象，类似于我们中国人所说的“大道至简”。",
            "商业业务软件的设计也应追求简约，越是简洁易用，越会带来更多的实际价值。太多太杂的无用功能只会让用户心力疲惫，不愿意使用，发挥不了业务软件本应提高工作效率的功效。",
          ],
          img: `/${datasheet}/detail/index2.webp`, // 可以为空
          imgWith: "300", // 默认宽 400
          imgPosition: "left", // right 或者 left
        },
      ],
    },
  }, // 首页详情文章
  /* 零售 */
  store: {
    detail1: {
      breadcrumbs: [
        {
          title: "首页",
          disabled: false,
          href: "/",
        },
        {
          title: "社区超市",
          disabled: false,
          href: `/${datasheet}`,
        },
        {
          title: "社区店详情文章1",
          disabled: false,
        },
      ],
      content: [
        {
          title: "这里是解决方案详细情况", // 可以为空
          text: [
            "碧海数科为社区本地生活而生，坚持只做一件事：用前沿数字化科技为本地生活提供方便。方便商家管理门店，方便顾客与商家建立亲密链接。",
          ],
          img: `/${datasheet}/detail/detail1.jpeg`, // 可以为空
          imgWith: "400", // 默认宽 400
          imgPosition: "right", // right 或者 left
        },
      ],
    },
  }, // 社区超市
  /* 美业 */
  spa: {
    detail1: {
      breadcrumbs: [
        {
          title: "首页",
          disabled: false,
          href: "/",
        },
        {
          title: "美业总述",
          disabled: false,
          href: `/${datasheet}`,
        },
        {
          title: "美业与零售业系统的区别",
          disabled: false,
        },
      ],
      content: [
        {
          title: "美业更注重服务体验", // 可以为空
          text: [
            "美业属于服务业，其产品就是门店提供的服务。",
            "客户多为白领女性，得到放松，得到尊重。",
            "避免做强行推销这种杀鸡取卵的傻事。产品组合和各种优惠，让顾客自主选择最适合自己的。",
          ],
          img: `/${datasheet}/detail/p1.jpeg`, // 可以为空
          imgWith: "400", // 默认宽 400
          imgPosition: "right", // right 或者 left
        },
        {
          title: "零售业注重商品管理和收银效率", // 可以为空
          text: [
            "零售行业的收银系统不适合应用到服务业，它们要解决的问题是差别很大的",
            "有些产品根植于零售收银系统，我们不建议采用。",
          ],
          img: `/${datasheet}/detail/p1.jpeg`, // 可以为空
          imgWith: "200", // 默认宽 400
          imgPosition: "left", // right 或者 left
        },
      ],
    },
    detail2: {
      breadcrumbs: [
        {
          title: "首页",
          disabled: false,
          href: "/",
        },
        {
          title: "美业总述",
          disabled: false,
          href: `/${datasheet}`,
        },
        {
          title: "美业与零售业系统的区别",
          disabled: false,
        },
      ],
      content: [
        {
          title: "会员管理常用功能", // 可以为空
          text: [
            "系统自动化智能提醒、会员服务周期提醒、数千种客户维度搜索、以客人为中心的服务计划与个性标签、会员生命周期管理方案",
            "会员管理是会员营销的具体实施过程，具体包括企业会员库建立、会员数据分析及挖掘、分类及实时更新，积分发行及兑换，会员企业间实现会员交换、共享，会员二次营销等服务。",
          ],
          img: `/${datasheet}/detail/p1.jpeg`, // 可以为空
          imgWith: "400", // 默认宽 400
          imgPosition: "right", // right 或者 left
        },
        {
          title: "零售业注重商品管理和收银效率", // 可以为空
          text: [
            "零售行业的收银系统不适合应用到服务业，它们要解决的问题是差别很大的",
            "有些产品根植于零售收银系统，我们不建议采用。",
          ],
          img: `/${datasheet}/detail/p1.jpeg`, // 可以为空
          imgWith: "200", // 默认宽 400
          imgPosition: "left", // right 或者 left
        },
      ],
    },
  }, // 美业总述
};
</script>
