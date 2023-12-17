<template>
  <!-- 顶部菜单 -->
  <v-banner sticky style="z-index: 10">
    <v-toolbar flat dark prominent class="d-flex bg-white">
      <template v-slot:prepend>
        <nuxt-link to="/">
          <img src="/logo.jpeg" style="height: 50px" />
        </nuxt-link>
      </template>

      <div class="d-none d-sm-flex justify-space-around w-50 ml-12">
        <v-menu open-on-hover v-for="(item, index) in navItems" :key="index">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" size="x-large" class="btn" v-bind="props">
              {{ item.navTitle }}
            </v-btn>
          </template>
          <v-card width="500">
            <v-list lines="two">
              <v-list-item
                v-for="(menuItem, index1) in item.navMenu"
                :key="index1"
              >
                <template v-slot:prepend>
                  <v-icon :icon="menuItem.icon"></v-icon>
                </template>
                <nuxt-link :to="menuItem.link" class="text-decoration-none">
                  <v-list-item-title class="text-black">
                    {{ menuItem.title }}</v-list-item-title
                  >
                  <v-list-item-subtitle>
                    {{ menuItem.subtitle }}
                  </v-list-item-subtitle>
                </nuxt-link>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        <!--  -->
      </div>

      <v-spacer></v-spacer>

      <!-- 联系客服 -->
      <v-dialog open-on-hover width="360" location-strategy="connected">
        <template v-slot:activator="{ props }">
          <v-btn
            variant="text"
            color="primary"
            size="x-large"
            append-icon="mdi-account-outline"
            v-bind="props"
            class="d-none d-sm-flex"
          >
            联系客服
          </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card title="耐心解答，不拉客！不纠缠！">
            <v-card-text> 联系电话：13823673216 </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                variant="outlined"
                color="primary"
                @click="isActive.value = false"
                >关闭</v-btn
              >
            </v-card-actions>
          </v-card></template
        >
      </v-dialog>

      <!-- 手机小屏幕下拉菜单 -->
      <v-btn
        color="primary"
        variant="outlined"
        rounded="xl"
        size="small"
        class="d-sm-none"
        id="mobile-activator"
        >导航栏</v-btn
      >

      <v-menu activator="#mobile-activator">
        <v-card min-width="280">
          <v-list>
            <v-list-item prepend-icon="mdi-home">
              <nuxt-link to="/" class="text-decoration-none">
                <v-list-item-title class="text-black">
                  返回首页</v-list-item-title
                >
              </nuxt-link></v-list-item
            >
            <v-divider></v-divider>
            <v-list-group
              v-for="(item, index) in navItems"
              :key="index"
              :value="item.navTitle"
            >
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  :title="item.navTitle"
                  @click.stop=""
                ></v-list-item>
              </template>

              <v-list-item
                v-for="(menuItem, index1) in item.navMenu"
                :key="index1"
              >
                <template v-slot:prepend>
                  <v-icon :icon="menuItem.icon"></v-icon>
                </template>
                <nuxt-link :to="menuItem.link" class="text-decoration-none">
                  <v-list-item-title class="text-black">
                    {{ menuItem.title }}</v-list-item-title
                  >
                </nuxt-link>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-card>
      </v-menu>
    </v-toolbar>
  </v-banner>
</template>
<script setup>
/**
 *
 * 菜单项，和页面路由
 *
 */
const navItems = [
  {
    navTitle: "零售专卖",
    navMenu: [
      {
        icon: "mdi-cart-outline",
        title: "零售总述",
        subtitle: "零售专卖解决方案的公共特性、功能模块，建议先浏览一遍",
        link: "/retail",
      },

      {
        icon: "mdi-baguette",
        title: "点心烘焙",
        subtitle:
          "社区烘培店 | 烘焙连锁 | 中式烘焙 | 西式甜点 | 面包茶饮 | 烘焙餐吧",
        link: "/bakery",
      },
      {
        icon: "mdi-baby-bottle-outline",
        title: "母婴用品",
        subtitle: "母婴用品店 | 奶粉寄存",
        link: "/baby",
      },
      {
        icon: "mdi-hanger",
        title: "服装鞋帽",
        subtitle:
          "时装专卖 | 仓储式门店 | 连锁服装店 | 大型服装卖场 | 自助体验店",
        link: "/fashion",
      },
      {
        icon: "mdi-pill",
        title: "药品保健",
        subtitle: "便民药店 | 保健品店",
        link: "/medicine",
      },
      {
        icon: "mdi-dog-side",
        title: "宠物之家",
        subtitle: "社区宠物店 | 宠物医院 | 宠物用品超市 | 宠物酒店 | 宠物乐园",
        link: "/pet",
      },
      {
        icon: "mdi-fruit-grapes-outline",
        title: "生鲜果蔬",
        subtitle: "水果连锁店 | 海鲜市场 | 蔬菜市场",
        link: "/fresh",
      },
      {
        icon: "mdi-store-outline",
        title: "超市便利",
        subtitle: "社区超市 | 街边便利店 | 连锁便利店",
        link: "/store",
      },
    ],
  }, //"零售专卖"
  {
    navTitle: "美容保健",
    navMenu: [
      {
        icon: "mdi-spa-outline",
        title: "美容保健总述",
        subtitle: "美容保健解决方案的公共特性、功能模块，建议先浏览一遍",
        link: "/spa",
      },
      {
        icon: "mdi-hair-dryer-outline",
        title: "创业单店",
        subtitle:
          "社区单店 | 夫妻小店 | 手机&电脑预约及收银 | 简洁易用 | 费用亲民",
        link: "/spa_mini",
      },

      {
        icon: "mdi-lotion-outline",
        title: "连锁品牌",
        subtitle: "美业连锁机构 | 统一管理和调配 | 支持连锁门店有限业务差异化",
        link: "/spa_chain",
      },
      {
        icon: "mdi-hospital-box-outline",
        title: "美容保健大品牌",
        subtitle:
          "大品牌服务机构 | 量身定制数字化方案 | 实现品牌战略和管理目标",
        link: "/spa_big",
      },
    ],
  }, //"美容保健"
  {
    navTitle: "餐厅茶饮",
    navMenu: [
      {
        icon: "mdi-silverware-variant",
        title: "餐饮总述",
        subtitle: "餐饮解决方案的公共特性、功能模块，建议先浏览一遍",
        link: "/catering",
      },
      {
        icon: "mdi-pasta",
        title: "轻食快餐",
        subtitle: "快餐轻食 | 2人和4人小桌台 | 特色菜品 | 上餐用餐快",
        link: "/cafe",
      },
      {
        icon: "mdi-coffee-outline",
        title: "咖啡茶饮",
        subtitle: "咖啡厅 | 茶饮休闲 | 提供简餐",
        link: "/drink",
      },
      {
        icon: "mdi-glass-wine",
        title: "餐馆酒楼",
        subtitle: "标准围坐式 | VIP包间 | 菜品丰富 | 用餐时间较长",
        link: "/diner",
      },
    ],
  }, //"餐厅茶饮"

  {
    navTitle: "关于公司",
    navMenu: [
      {
        icon: "mdi-office-building",
        title: "公司简介",
        subtitle: "本地生活数字化专家",
        link: "/about_us",
      },
      {
        // icon: "mdi-account-cog-outline",
        icon: "mdi-account-group-outline",
        title: "团队文化",
        subtitle: "利他双赢｜卓越才能｜物超所值",
        link: "/team",
      },
      {
        icon: "mdi-account-multiple-plus-outline",
        title: "诚聘英才",
        subtitle: "软件销售员｜售后服务工程师｜小程序开发工程师",
        link: "/job",
      },
    ],
  }, //"碧海公司"
];
</script>
