<script setup>
import MainContainer from "@/components/MainContainer.vue";
import TabsTitleBar from "@/components/TabsTitleBar.vue";
import FoodItem from "@/components/FoodItem.vue";

import { mainStore } from "@/store";
const store = mainStore();
</script>

<template>
  <TabsTitleBar></TabsTitleBar>
  <MainContainer>
    <div class="subtitle">Shopping List</div>
    <FoodItem
      v-for="(food, i) in store.shoppingList"
      :key="i"
      :name="food.name"
      :icon="food.icon"
      :description="food.description"
      :amount="food.amount"
    ></FoodItem>
  </MainContainer>
</template>
