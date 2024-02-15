<script setup>
import TitleBar from "@/components/TitleBar.vue";
</script>

<script>
export default {
  methods: {
    isActive(routePath) {
      // Check if the current route path matches the provided route path
      return this.$route.path === routePath;
    },
  },
};
</script>

<template>
  <TitleBar>
    <router-link to="/menu">
      <div class="title-bar-icon">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
      </div>
    </router-link>
    <div style="flex-grow: 1"></div>
    <router-link to="/plan">
      <div class="title-bar-icon">
        <font-awesome-icon icon="fa-solid fa-map" />
        <div v-if="isActive('/plan')" class="title-bar-icon-dot"></div>
      </div>
    </router-link>
    <router-link to="/shopping-list">
      <div class="title-bar-icon">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        <div v-if="isActive('/shopping-list')" class="title-bar-icon-dot"></div>
      </div>
    </router-link>
    <router-link to="/foods">
      <div class="title-bar-icon">
        <font-awesome-icon icon="fa-solid fa-utensils" />
        <div v-if="isActive('/foods')" class="title-bar-icon-dot"></div>
      </div>
    </router-link>

    <div style="flex-grow: 1"></div>
    <div class="title-bar-icon-hidden"></div>
  </TitleBar>
</template>
