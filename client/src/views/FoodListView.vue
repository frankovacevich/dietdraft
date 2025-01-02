<script setup>
import EditFoodModal from "@/components/EditFoodModal.vue";
import FoodItem from "@/components/FoodItem.vue";
import MainContainer from "@/components/MainContainer.vue";
import TabsTitleBar from "@/components/TabsTitleBar.vue";

import { mainStore } from "@/store";
const store = mainStore();
</script>

<template>
  <EditFoodModal></EditFoodModal>
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
        @bodyClick="store.editFoodModal.open(food)"
      ></FoodItem>
    </div>
  </MainContainer>
</template>
