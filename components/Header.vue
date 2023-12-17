<template>
  <!-- 顶部菜单 -->
  <v-banner sticky style="z-index: 10">
    <v-toolbar flat dark prominent class="d-flex bg-white">
      <template v-slot:prepend>
        <nuxt-link to="/">
          <v-icon
            icon="mdi-home"
            size="large"
            color="primary"
            class="mb-1 ml-2"
          ></v-icon>
        </nuxt-link>
      </template>

      <div class="d-none d-sm-flex justify-space-around w-75 ml-12">
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

      <!-- 手机小屏幕下拉菜单 -->
      <v-btn
        color="primary"
        variant="outlined"
        rounded="xl"
        size="small"
        class="d-sm-none"
        id="mobile-activator"
        >menu</v-btn
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
    navTitle: "games by Jason",
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
    ],
  }, //games by Jason
  {
    navTitle: "games recommended",
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
    ],
  }, //games recommended

  {
    navTitle: "About me",
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
    ],
  }, //"碧海公司"
];
</script>
