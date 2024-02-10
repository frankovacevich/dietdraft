<script>
import { SwipeBottomNavigation } from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";
import { getVariable } from "@/main";

export default {
  components: { SwipeBottomNavigation },
  data: () => ({
    selected: 1,
    colors: {
      text: getVariable("--color-text"),
      background: getVariable("--color-gray-0"),
    },
    options: [
      {
        id: 1,
        icon: "fa-solid fa-utensils",
        title: "Menu",
        path: { name: "menu" },
      },
      {
        id: 2,
        icon: "fa-solid fa-calendar",
        title: "Plan",
        path: { name: "plan" },
      },
      {
        id: 3,
        icon: "fa-solid fa-cart-shopping",
        title: "List",
        path: { name: "list" },
      },
    ],
  }),
};
</script>

<template>
  <SwipeBottomNavigation
    :options="options"
    v-model="selected"
    :swiper-color="colors.text"
    :icon-color="colors.text"
    :background-color="colors.background"
  >
    <template #icon="{ props }">
      <font-awesome-icon :icon="props.icon" />
    </template>
  </SwipeBottomNavigation>
</template>
