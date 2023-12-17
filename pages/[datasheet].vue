<template>
  <!-- 面包屑导航 -->
  <div class="d-flex justify-space-between">
    <v-breadcrumbs :items="datasheets[datasheet].breadcrumbs">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
  </div>

  <!-- 电脑版 -->
  <v-container class="d-none d-sm-flex flex-column">
    <div
      v-for="(item, index) in datasheets[datasheet].content"
      :key="index"
      class="ma-12"
    >
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

            <!-- link: `/detail/${datasheet}_简单：为社区店设计`, // 了解详情，链接 -->
            <div v-if="item.link" class="d-flex justify-space-between">
              <NuxtLink :to="item.link">
                <v-btn variant="outlined" color="primary" rounded="xl">
                  了解详情</v-btn
                >
              </NuxtLink>
            </div>
          </v-card></v-col
        >
        <v-col cols="6"> <v-img height="300" :src="item.img"></v-img></v-col>
      </v-row>
      <v-row v-if="index % 2 === 1">
        <v-col cols="6"> <v-img height="300" :src="item.img"></v-img></v-col>
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
    <div
      v-for="(item, index) in datasheets[datasheet].content"
      :key="index"
      class="mb-15"
    >
      <v-img height="250" :src="item.img"></v-img>
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
const { datasheet } = useRoute().params;

const datasheets = {
  /***********  零售专卖 */
  retail: {
    descriptionContent: "碧海数科零售数字化方案总述",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "零售总述",
        disabled: false,
      },
    ],
    content: [
      {
        title: "零售总述",
        text: [
          "【专卖店】",
          "- 专卖店的特征是商品管理需要更加细致，比如，服装专卖需要细致管理尺码颜色",
          "【社区超市】",
          "- 超市类门店的特征则是存在客流高峰时段，必须高效收银减少排队，对于生鲜类商品还必须方便称重计价",
          "- 我们需要针对不同类型的零售专卖门店提供专门的解决方案，才能合适和易于使用",
        ],
        img: `/${datasheet}/index1.jpeg`,
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
        img: `/${datasheet}/index2.jpeg`,
      },

      {
        title: "小程序商城，打通线上线下",
        text: [
          "小程序商城，顾客可通过小程序下单。特别是本社区的街坊邻里，年轻人线上下单，老人孩子到店领取，为邻里提供方便，也因此增加了门店销量",
          "对接第三方外卖，为邻居送货到家，解决了顾客有时“懒得下楼”的问题",
          "顾客通过手机查询门店商品清单，避免白跑一趟。紧缺商品到货及时通知需要的顾客，方便了顾客，增加了销量",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },
      {
        title: "商品精细管理",
        text: [
          "可实现商品分批次规格管理，方便单人、多人盘点",
          "能用ABC报表标记优质商品",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
    ],
  }, // 零售总述
  bakery: {
    descriptionContent: "点心烘焙解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "点心烘焙",
        disabled: false,
      },
    ],
    content: [
      {
        title: "适用业态",
        text: ["面包店", "蛋糕店"],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "收银台，一秒识别商品",
        text: [
          "AI图像识别1秒识别商品，减少店员操作步骤，小白3天就可以上岗收银，节约收银的培训成本",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "蛋糕选购自助",
        text: [
          "蛋糕选购耗时费力，挑战店员耐心",
          "安装蛋糕自助选购机，一键同步蛋糕图片，蛋糕导购更贴心，闲时轮播广告，支持视频，图片等多种格式宣传",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },
      {
        title: "中央工厂ERP生产管理",
        text: [
          "支持烘焙连锁机构管理，跨店活动运营、补货、调货一体化",
          "支持中央工厂集中生产模式，接单、排产、配送更加高效，配方BOM、工序管理，成本核算更精准。材料批次管理，保质期预警，门店对账，集中对钱对货更方便",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
      {
        title: "成功案例：阅酥堂",
        text: [
          "一场活动超200%储值预期",
          "随着国潮风的复兴，阅酥堂凭借其国潮多元化创新升级，受到众多市民喜爱。绿豆糕、淮山酥、肉松小贝、蛋黄酥……外观精致小巧，味道也是可圈可点",
        ],
        img: `/${datasheet}/index5.jpeg`,
      },
    ],
  }, // 点心烘焙

  /************* 美容保健 */
  spa: {
    descriptionContent: "美容美发美甲等社区服务数字化解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "美容保健总述",
        disabled: false,
      },
    ],
    content: [
      {
        title: "美容保健总述",
        text: [
          "美容保健业两大模块：门店管理和客户营销",
          "【门店管理】",
          "- 会员管理、服务日志",
          "- 预约开单、收银售卡",
          "【客户营销】",
          "- 公域拓客营销：微信公众号、抖音直播等",
          "- 留客促销：优惠卡、积分，给忠诚老客户看得见的实惠",
          // "【适用业态】",
          // "- 美容院、美发店、美甲店、足浴店等社区门店",
          // "- 美容单店、大型美容连锁品牌",
          // "- 美容整形医院",
        ],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "会员管理",
        text: [
          "【服务日志】",
          "- 顾客消费历史记录、服务效果、服务满意度、到店频度、消费品类等可随时查阅、分析",
          "【客户画像】",
          "- 以实际数据为基础，能更了解顾客的消费偏好，更准确地推荐服务项目",
          "【优惠卡券】",
          "- 给忠诚老客户以看得见的实惠，诚心留住老客户，老客户才是门店稳定经营的基础",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "预约开单",
        text: [
          "【小程序预约】",
          "- 顾客端小程序自助预约，指定偏爱技师，准时到店，节省双方的时间",
          "【电话微信预约】",
          "- 门店前台接电话、收微信预约，为时间紧的顾客，特别是常客协调预约喜好的技师，感受服务温度，提高服务满意度",
          "【到店立刻服务】",
          "- 预约客户到店即开始享受服务，自动生成订单。流程简单流畅，门店轻松，顾客舒心",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },
      {
        title: "收银售卡",
        text: [
          "【多样终端】",
          "- 支持PC、ipad、手机多端开单开卡续卡",
          "【订单生成】",
          "- 订单自动生成，一键收银",
          "【自动匹配】",
          "- 会员名下有多种优惠时，自动匹配最佳耗卡用券方案",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
      {
        title: "拓客留客",
        text: [
          "【营销拓客】",
          "- 分销返佣、社群裂变，拓展新客户",
          "【团购拓客】",
          "- 拼团小程序，消费一次即成会员",
          "【常客优惠】",
          "- 优惠券、积分，留住老客户",
        ],
        img: `/${datasheet}/index5.jpeg`,
      },
    ],
  }, // 美容保健总述
  spa_mini: {
    descriptionContent: "美容美发数字化解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "创业型单店",
        disabled: false,
      },
    ],
    content: [
      {
        title: "适用业态",
        text: [
          "方案适合美业单店，或者少数几家店。因为门店人手不多，系统功能力求简洁易用，提供无纸化运营的核心、基础功能",
          "- 美发专业店、美发工作室、快剪店、养发店、假发店",
          "- 美甲店、美睫店、祛痘店、瘦身店、SPA养生馆",
          "- 足浴店、盲人按摩、正骨推拿店",
        ],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "简单易用的单店方案",
        text: [
          "电脑前台 + 手机小程序，是一般美业门店的标准配置",
          "前台电脑用苹果 iMac 或 iPad Pro 能有效提升门店档次",
          "在线预约、收银卖卡、会员管理、消费推送、业绩提成、营收报表、美团抖音核销等功能能充分满足日常门店管理需要",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "一部手机全掌控",
        text: [
          "【三款核心小程序】",
          "- 会员端：散客和会员用于预约、会员卡余额查询、消费记录核对等",
          "- 员工端：会员开通、售卡、服务日志填写、业绩提成核对等",
          "- 商家端：门店管理、员工管理、会员管理、统计分析等所有电脑端功能",
          "【全数字化门店】",
          "- 员工端和商家端小程序包含电脑前台的全部功能，可以满足无实体前台的全数字化门店需要，特别适合位于商务楼内，或小区住宅内的美业工作室，把空间多留给客户服务区",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },
    ],
  }, // 创业型单店

  /************* 碧海公司 */
  team: {
    descriptionContent: "碧海数字科技有限公司团队文化公司文化",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "团队文化",
        disabled: false,
      },
    ],
    content: [
      {
        title: "让遇见，成为彼此的幸运",
        text: [
          "【为人之道】",
          "碧海数科员工必须明白，利他双赢才是人间正道。我们的为人处事之道应该是，努力让客户因为选择了我们感到幸运，努力让同事因为与我们一起共事感到幸运。",
        ],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "无才便无德",
        text: [
          "【处事之道】",
          "碧海数科提供专业服务，如同建筑师和医生，以才华安身立命。一名建筑师人品再好，如果他设计的房屋倒塌了，他就不能算是一个好人。一名医生无论如何和蔼可亲，如果他是耽误病人的庸医，跟杀人犯相差无几。真才实学是专业人员最高的道德追求！碧海公司员工必须不遗余力地提升自身专业技能，为客户提供最优质的服务。",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "物超所值，我们公开的商业秘密",
        text: [
          "【经商之道】",
          "碧海数科管理团队相信，在商业竞争中取得持久成功的唯一秘密是让我们的产品和服务物超所值！任何心机和奇巧，甚至坑蒙拐骗，都不可能获得持久的成功，不可能让脚下的路越走越宽。",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },
    ],
  }, // 团队文化
};

useHead({
  meta: [
    {
      name: "description",
      content: `${datasheets[datasheet].descriptionContent}`,
    },
  ],
}); // 本页描述文本，用于搜索优化（SEO）
</script>
