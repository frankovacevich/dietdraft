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
    <div class="subtitle">Food List</div>
    <div v-for="cat in store.foodSet.getCategories()" :key="cat">
      <div class="category-title">{{ cat }}</div>
      <FoodItem
        v-for="(food, i) in store.foodSet.getFoodsForCategory(cat)"
        :key="i"
        :name="food.name"
        :icon="food.icon"
        :description="food.description"
        :protein="food.protein"
        :fat="food.fat"
        :carbs="food.carbs"
        :selected="food.selected"
        @click="store.changeFoodSelected(food)"
      ></FoodItem>
    </div>
  </MainContainer>
</template>
