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
  baby: {
    descriptionContent: "母婴用品专卖店解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "母婴用品",
        disabled: false,
      },
    ],
    content: [
      {
        title: "适用业态",
        text: ["母婴用品专卖店", "婴儿服装店"],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "消费周期提醒",
        text: [
          "母婴用品属于典型的周期性消费商品，设置周期性提醒，既方便了顾客，也维持了与会员顾客的正常交易",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "品类、批次、规格管理",
        text: [
          "专属的母婴门店功能，将商品按品类、批次、不同规格管理，支持奶粉寄存，门店货品井井有条",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },
      {
        title: "母婴会员",
        text: [
          "母婴会员系统，精细记录会员宝宝资料和成长动态",
          "按阶段向会员发放不同卡券礼包，增加会员与门店互动",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
    ],
  }, // 母婴用品
  fashion: {
    descriptionContent: "服装鞋帽专卖店解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "服装鞋帽",
        disabled: false,
      },
    ],
    content: [
      {
        title: "适用业态",
        text: ["时装店", "旅行服装专卖店"],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "智能RFID吊牌",
        text: [
          "配备RFID盘点机+RFID标签打印机，通过RFID标签，可以实现一物一码精准管理库存，对于动辄几万SKU的服装行业而言，极大提高盘点效率，搭配防盗门禁提升门店经营利润",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "多颜色尺码管理",
        text: [
          "自定义货号管理规则，一键生成货号。丰富吊牌模板一键套用，上千上万货品也能轻松管理",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },
      {
        title: "精细进销存管理",
        text: [
          "连锁巨头都在用的40+可视化报表，店铺库存、销量业绩、会员储值等数据一目了然，为门店运营分析提高数据支撑",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
      {
        title: "连锁门店跨区快速调货",
        text: [
          "连锁子门店出现颜色尺码缺货时，总部随时可查各门店库存及货流情况，支持就近门店调货配送，避免错过成交机会",
        ],
        img: `/${datasheet}/index5.jpeg`,
      },
    ],
  }, // 服装鞋帽
  medicine: {
    descriptionContent: "药店解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "药店",
        disabled: false,
      },
    ],
    content: [
      {
        title: "适用业态",
        text: ["社区中药店", "保健品专卖店", "中西医综合药店"],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "药品销售可追溯",
        text: [
          "可根据国家相关规定登记购买人信息和联系方式",
          "支持短信发送关怀、用药指导、特别注意事项",
          "特殊管控药品重点登记和跟踪，比如，麻黄类",
          ,
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "支持处方单销售",
        text: [
          "支持普通药品扫码销售、批号销售、处方单销售",
          "处方单销售支持选择执业医生、指纹验证、采集处方单图像、智能提醒等",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },
      {
        title: "药品批号有效期管理",
        text: [
          "药品入库时自动自动计算有效期并生成相关报表，系统智能预警，帮助药店严格管理药品有效期，避免经营风险",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
      {
        title: "全面 GSP 管理",
        text: [
          "本方案对 GSP 管理提供全面支持",
          "GSP是Good Supply Practice的简称，即药品经营质量管理规范，也叫药品供应规范。它是指在药品流通过程中，针对计划采购、购进验收、储存、销售及售后服务等环节而制定的保证药品符合质量标准的一项管理制度。其核心是通过严格的管理制度来约束企业的行为，对药品经营全过程进行质量控制，保证向用户提供优质的药品。是药品经营质量管理的基本准则，适用于中华人民共和国境内经营药品的专营或兼营企业",
        ],
        img: `/${datasheet}/index5.jpeg`,
      },
      {
        title: "对接医保系统",
        text: [
          "可对接当地医保系统，支持医保结算，医保目录自动匹配，实时上传进销存数据",
        ],
        img: `/${datasheet}/index6.jpeg`,
      },
    ],
  }, // 药店
  pet: {
    descriptionContent: "宠物之家数字化解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "宠物之家",
        disabled: false,
      },
    ],
    content: [
      {
        title: "适用业态",
        text: ["宠物用品店", "宠物医院", "宠物酒店"],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "驱虫、疫苗提醒",
        text: [
          "【驱虫周期】",
          "- 后台设置提醒，系统自动提醒家长，提高客户满意度",
          "【疫苗周期】",
          "- 错过疫苗周期可能导致前一针失效，准确记录和提醒，为宠物家长省心",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "宠物粮食玩具档案",
        text: [
          "【宠物粮食偏好档案】",
          "- 宠物对粮食口味具有依赖性，宠物消费记录有利于为常客备货，提高家长满意度",
          "【宠物玩具偏好档案】",
          "- 不同阶段的宠物对玩具有偏好行，根据宠物成长记录推荐最合适的玩具",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },
      {
        title: "宠物病历全记录",
        text: [
          "【病历全记录】",
          "- 是医院就要有病例档案系统，无论是宠物还是病人，才能有据可查，也有利于积累医生病例",
          "【医生方便】",
          "- 宠物医生记录和查阅方便，简单易用，不影响看病效率",
          "【家长方便】",
          "- 家长通过小程序随时查阅病历记录，可以从容仔细阅读医嘱，宠物服药周期和计量清晰可见",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
    ],
  }, // 宠物之家
  fresh: {
    descriptionContent: "专卖店解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "生鲜果蔬",
        disabled: false,
      },
    ],
    content: [
      {
        title: "适用业态",
        text: [
          "水果专卖店",
          "蔬菜店、社区菜市场",
          "肉铺",
          "农副产品专卖店",
          "其它需要称重的门店",
        ],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "生鲜称重AI图像识别",
        text: [
          "近千种水果和蔬菜瞬间识别，识别完成后快速添加购物车，极大提升了称重效率和顾客购物体验，省时省力，开启生鲜称重新时代。 打印价签也可以用AI识别功能快速选商品",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "果蔬组合、分级销售",
        text: [
          "支持礼盒组合销售同类商品分拣后，按品相分类分级别定价，提升利润空间支持库存转换单位换算果蔬加工，库存联动",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },
      {
        title: "肉禽类分割销售",
        text: [
          "支持生鲜肉类完整或大部位的进货切割后按不同部位不同价格销售毛利计算更精准",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
      {
        title: "移动智能盘点",
        text: [
          "极速多人盘点，手机变身盘点机，边营业边盘点。小组盘点、分类盘点、品牌盘点，多种模式可选",
          "及时盘点，减少压货、缺货、商品过期，降低损耗",
        ],
        img: `/${datasheet}/index5.jpeg`,
      },
    ],
  }, // 生鲜果蔬
  retail_chain: {
    descriptionContent: "连锁便利店解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "连锁便利店",
        disabled: false,
      },
    ],
    content: [
      {
        title: "适用业态",
        text: ["- 连锁便利店、图书文具连锁、美妆日化连锁、烟酒连锁、茶叶连锁"],
        img: `/${datasheet}/index.jpeg`,
      },
      {
        title: "多门店连锁，一套系统管理",
        text: [
          "一套系统打通门店报表、货流管理、营销活动、会员和储值积分。",
          "门店交易数据动态展示，实时监控热销商品、店铺交易情况、门店排行、最近交易走势。实时监控查看，全方位掌握店面信息",
          "内置门店所需的多种营业报表，从单店到连锁都能用，帮助您分析生意、进行连锁管理，并做出科学的决策",
        ],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "调货配货，运筹帷幄",
        text: [
          "根据库存信息实现门店间商品自由调货，全程自动化。如果你的供应商对接系统，你就能实现一站式订货、追踪货流以及结算",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "总部做活动，分店秒同步",
        text: [
          "当总部发起统一的营销活动，只需在云后台设置，并同步到门店就能使用，并且一键推送到会员和客户的手机，活动业绩、利润、折让统一汇总，无需再安排人员层层通知和统计",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },
      {
        title: "会员共享、储值通用",
        text: [
          "各门店的会员可以设置分区域共享，也可以设置全国共享，结合后台潜水会员报表，开卡门店可以根据会员消费情况发放会员优惠券进行促活，开启会员充值直达总部功能，可以让会员储值在门店间通用，月底总部对账给门店，增加会员卡价值的同时，还能为总部增加现金流",
        ],
        img: `/${datasheet}/index5.jpeg`,
      },
      {
        title: "一键克隆门店",
        text: [
          "支持既有门店一键复制，商品信息、会员资料、供货商信息等全部迁移到新店，无需重新录入资料和设置，真正实现1分钟开新店",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
    ],
  }, // 超市便利店
  store: {
    descriptionContent: "社区超市连锁便利店大型超市专卖店精品百货",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "超市便利店",
        disabled: false,
      },
    ],
    content: [
      {
        title: "适用业态",
        text: ["社区超市", "夫妻便利店", "五金杂货店"],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "简单：为社区店设计",
        text: [
          "社区超市是指规模不大但商品种类繁多的小型综合性超市，销售从生活必须品到五金、生鲜，品类繁杂，多为家庭或夫妻经营",
          "系统设计目标是要使用简单、维护简单、对网络要求低，停电断网也不影响经营",
          "一台收银机：仅售卖普通条码商品",
          "收银秤重一体机（或收银机 + 称重秤）：同时售卖生鲜等需要称重的商品",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "极简：手持收银机",
        text: [
          "如果店面空间较小，或者不方便布线安装普通收银设备，可以选择手持设备收银",
          "支持4G网络，离线收银",
          "支持支付宝、微信支付等",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },
      {
        title: "管店：一部手机全掌控",
        text: [
          "前台安装收银机的店面，可以方便地通过云后台管理进货、盘点",
          "不方便安装收银机的超小店面，可以全部在手机上完成",
          "手机拍照即可完成商品建档",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
    ],
  }, // 社区超市

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
  spa_chain: {
    descriptionContent: "美容美发数字化解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "美容保健连锁",
        disabled: false,
      },
    ],
    content: [
      {
        title: "适用业态",
        text: [
          "适合5家门店以上的美容保健连锁机构",
          "- 美容店连锁",
          "- 美发、快剪连锁",
          "- 美甲、美睫连锁",
          "- 足浴保健连锁",
          "- 健身、瑜伽连锁",
        ],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "商品集中采购，统一配送",
        text: [
          "提高与供应商的议价能力，享受更高进货折扣",
          "统一调配库存，降低资金占压，减少缺货概率",
          "集中采购权限，选择优质供应商，避免内部腐败，保障商品品质",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "会员共享",
        text: [
          "会员卡、积分多店互通互认，支持跨店消费",
          "会员生活工作地点迁移，继续就近同品牌门店消费，顾客买卡充值无顾虑",
          "出差旅游，会员享受同品牌跨地域消费",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },
      {
        title: "营销活动，覆盖所有门店",
        text: [
          "营销活动，统一宣传，声势更大，同时享受品牌红利",
          "会员抢购营销优惠，多店适用，充值不担心",
          "根据会员地域属性，自动匹配就近门店，精准导流",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
    ],
  }, // 连锁品牌店
  spa_big: {
    descriptionContent: "美容美发数字化解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "美容保健大品牌",
        disabled: false,
      },
    ],
    content: [
      {
        title: "适用商家形态",
        text: [
          "大型美容保健连锁品牌",
          "需要与品牌形象相一致的个性化设计，适配品牌特有的运作流程。除连锁管理、品牌管理和日常店务管理外，配套相应的品牌营销方案和数字化营销工具",
        ],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "量身定制的数字化方案",
        text: [
          "适配品牌特定形象定制方案",
          "丰富的拓客方案和花样的营销手段，吸引顾客上门、引导消费巩固顾客与门店关系，实现持续消费，不断提升门店业绩",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "多平台营销方案",
        text: [
          "强大的线上线下营销平台，转为美业场景设计，多样化营销模式，私域流量运营",
          "多维度分析，让数据成为美业门店经营决策的依据，驱动门店快速增长，持续盈利",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },
    ],
  }, // 美业大品牌
  gym: {
    descriptionContent: "美容美发数字化解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "健身房瑜伽馆",
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
          "- 电脑前台 + 手机小程序，是一般美业门店的标准配置。 ",
          "- 前台电脑用苹果 iMac 或 iPad Pro 能有效提升门店档次。",
          "- 在线预约、收银卖卡、会员管理、消费推送、业绩提成、营收报表、美团抖音核销等功能能充分满足日常门店管理需要",
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
          "【全数字化门店】员工端和商家端小程序包含电脑前台的全部功能，可以满足无实体前台的全数字化门店需要。特别适合位于商务楼内，或小区住宅内的美业工作室，把空间多留给客户服务区",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },
    ],
  }, // 健身瑜伽

  /************* 餐厅茶饮 */
  catering: {
    descriptionContent: "碧海数科餐饮数字化解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "餐饮总述",
        disabled: false,
      },
    ],
    content: [
      {
        title: "餐饮总述",
        text: [
          "数字化系统已经成为餐饮业的标准配置，特别是在用工成本高、租金高的大中城市，离开现代数字化系统无法在成本效率和客户满意度上与同行竞争",
          "【餐饮行业数字化三大标配，缺一不可】",
          "- 扫码点餐",
          "- 外卖平台对接",
          "- KDS电子厨显",
        ],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "多场景点餐",
        text: ["小程序扫码点餐", "前台PC点餐", "移动分机点餐", "自助点餐机"],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "门店小程序",
        text: [
          "小程序扫码立刻点餐，无需关注公众号，无需额外的身份认证操作，简单直接",
          "菜单分类清晰，一目了然，滚动方便",
          "爆款推荐，菜品介绍，如同贴身服务",
          "常客购买优惠券、充值，获得更多优惠，常客更长久",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
      {
        title: "第三方平台对接",
        text: [
          "【对接外卖平台】",
          "- 银豹支持一键对接美团/饿了么，订单在收银系统自动同步，无需多平台对账，一个系统掌握所有订单",
          "【对接团购平台】",
          "- 餐厅用短视频和图片宣传自己时，配置团购券，吸引顾客到店核销，银豹线下收银同步核销领取商品",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },

      {
        title: "KDS电子厨显",
        text: [
          "减少错漏单",
          "出菜自动提醒",
          "厨师烹饪计时",
          "前台点餐，后台接单，跑堂催菜，高峰控菜全程电子化",
        ],
        img: `/${datasheet}/index5.jpeg`,
      },
    ],
  }, // 餐饮总述
  cafe: {
    descriptionContent: "轻食快餐店数字化解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "轻食快餐",
        disabled: false,
      },
    ],
    content: [
      {
        title: "适用业态",
        text: [
          "西式快餐店、中式快餐店",
          "早餐店、广式早茶店",
          "面馆、饺子馆、小吃店",
          "川菜夫妻店、湘菜夫妻店、各地小炒饭菜餐馆",
        ],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "扫码点餐：简！约！",
        text: [
          "创建与本店风格匹配的点餐小程序，强化品牌形象",
          "极致的简约易用，节约顾客时间，更节约店员时间",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "后厨：快！快！快！",
        text: [
          "后厨KDS屏显，滴答记时，快速响应",
          "顾客满意，控制'静坐'等待时间",
          "抓住宝贵的就餐高峰期，快速轮桌，提高单店营业额",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },
    ],
  }, // 轻食快餐
  drink: {
    descriptionContent: "咖啡茶饮店数字化解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "咖啡茶饮",
        disabled: false,
      },
    ],
    content: [
      {
        title: "适用业态",
        text: ["咖啡厅", "茶饮店", "鲜榨果汁店", "酒吧"],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "彰显品牌形象",
        text: [
          "【个性化杯贴打印】",
          "- 系统支持根据品牌VI个性化设计",
          "【点餐小程序独特装修】",
          "- 手机自助点单小程序色彩、图案风格根据品牌形象设计，赏心悦目印象深刻",
        ],
        img: `/${datasheet}/index11.jpeg`,
      },
      {
        title: "多渠道点单",
        text: [
          "集成外卖平台、团购、线上商城",
          "外卖、堂食、自取，多种模式任选",
          "极速POS收银，减少排队",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "前台电子屏显",
        text: ["呈现品牌形象风格", "饮品种类价格一目了然，顾客方便，店员轻松"],
        img: `/${datasheet}/index3.jpeg`,
      },
    ],
  }, // 咖啡茶饮
  diner: {
    descriptionContent: "餐厅酒楼数字化解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "餐厅酒楼",
        disabled: false,
      },
    ],
    content: [
      {
        title: "适用业态",
        text: ["围坐式中餐酒楼", "海鲜酒楼", "高端商务宴请酒楼", "VIP高端包房"],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "桌台包房管理",
        text: [
          "桌台预订",
          "VIP包房预订",
          "桌台、包房服务项目跟踪管理，不久等不遗漏",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "堂食打包管理",
        text: [
          "快速打包结算，顾客不仅高兴而来，也要开心离去",
          "少等待，提高顾客满意度和翻台率",
        ],
        img: `/${datasheet}/index3.jpeg`,
      },
      {
        title: "VIP服务",
        text: [
          "VIP会员管理，为老客、常客、贵客提供优先留位等服务",
          "VIP折扣计算，享受特殊优惠",
          "免费停车或停车费优惠",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
    ],
  }, // 餐厅酒楼

  /************* 其它 */
  superMarket: {
    descriptionContent: "商超百货解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "商超百货",
        disabled: false,
      },
    ],
    content: [
      {
        title: "方案概要",
        text: [
          "建议先浏览 <a href='/retail'>零售总述</a>，完整了解【零售/公共特性和功能】",
          "本页内容介绍【零售/商超百货/专有特性和功能】",
          "1、根据药监局要求全面支持GSP管理，部分省份接入了当地医保",
          "2、门店前台销售支持医药结算、处方单销售、实名销售",
          "3、管理药品的生产企业、注册商标、批准文号、处方单用药分类、医保用药类型等",
        ],
        img: `/${datasheet}/index.jpeg`,
      },
      {
        title: "多通道高效收银",
        text: [
          "- 收银员通道，商品扫码顺畅不卡顿，提高单台收银机的收银笔数",
          "- 自助收银通道，简单易用，照顾年轻一代顾客的偏好",
          "- 高峰期可临时扩充随意数量的便携手持收银通道",
        ],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "商品种类繁多",
        text: ["- 从日用品到称重生鲜，支持多品类商品的销售管理", "- "],
        img: `/${datasheet}/index2.jpeg`,
      },

      {
        title: "行业动态",
        text: [
          "- 挑战：来自电商的挑战。",
          "- 新机遇：专业化、连锁化",
          "- 方便性是核心：社区店始终具有方便性的天然优势，区域大商超没有了，社区店承接了线下购物方便性的需求",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
    ],
  }, // 商超百货
  mall: {
    descriptionContent: "购物中心商业综合体解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "购物中心",
        disabled: false,
      },
    ],
    content: [
      {
        title: "方案概要",
        text: [
          "建议先浏览 <a href='/retail'>零售总述</a>，完整了解【零售/公共特性和功能】",
          "本页内容介绍【零售/购物中心/专有特性和功能】",
          "为城市中心大型购物中心，商业综合体而设计的系统方案",
        ],
        img: `/${datasheet}/index.jpeg`,
      },
      {
        title: "管理招商物业",
        text: [
          "提供楼层管理、铺位规划、商户管理、水电费统计、店铺管理、商户合同管理等",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },

      {
        title: "VIP会员服务",
        text: [
          "商户扫码即可开通自己门店的线上会员，无需开通小程序。会员通过微会员系统可及时接收优惠活动通知领取优惠券、消费后实时收到消费、积动通知、支持自助充值续费、积分兑换、并可通过电子小票查询消费清单等",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
      {
        title: "一键导航到店",
        text: [
          "- 为商户提供线上门店，方便顾客在线下单",
          "- 为顾客提供线下一键导航到店",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
      {
        title: "自助停车缴费",
        text: [
          "线上商城与停车系统无缝打通，顾客进入停车场后自动开始计算时间、费用，离开商场时，在线上进行缴费即可，支持核销停车优惠",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
    ],
  }, // 购物中心
  shops: {
    descriptionContent: "专卖店解决方案",
    breadcrumbs: [
      {
        title: "首页",
        disabled: false,
        href: "/",
      },
      {
        title: "专卖总述",
        disabled: false,
      },
    ],
    content: [
      {
        title: "专卖总述",
        text: [
          "【专卖/公共特性和功能】",
          "1、行业特性明显",
          "2、品牌形式突出",
          "3、小店大连锁模式",
          "【适用业态】",
          "- 社区超市、夫妻店、五金杂货店",
          "- 连锁便利店、图书文具连锁、美妆日化连锁、烟酒连锁、茶叶连锁",
          "- 商超百货、精品百货、区域中心大超市",
          "- 购物中心、商业综合体、招商物业、大型百货商场、商业一条街、百货餐饮夜市",
        ],
        img: `/${datasheet}/index1.jpeg`,
      },
      {
        title: "更契合的行业特性",
        text: [
          "美发、美容店数字化离不开两大模块：门店管理和客户营销",
          "- 客户营销：用数字化工具触达客户、服务客户、留住客户。如：微信公众号、抖音直播等",
          "- 门店管理：数字化无纸化管理门店日常业务，如：线上预约、服务记录、开单收银等",
        ],
        img: `/${datasheet}/index4.jpeg`,
      },
      {
        title: "连锁加盟管理",
        text: [
          "- 拼团小程序",
          "- 优惠券",
          "- 积分",
          "- 分销返佣",
          "- 社群裂变",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
      {
        title: "彰显品牌独特形象",
        text: [
          "- 拼团小程序",
          "- 优惠券",
          "- 积分",
          "- 分销返佣",
          "- 社群裂变",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },

      {
        title: "行业动态",
        text: [
          "支持PC、ipad、手机多段开单开卡续卡、会员名下有多种优惠时，自动匹配最佳耗卡用券方案、支持A4和常规尺寸小票，自定义小票打印内容、支持电子签名规避风险、收银结束自动按规则分配",
        ],
        img: `/${datasheet}/index2.jpeg`,
      },
    ],
  }, // 专卖总述

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
