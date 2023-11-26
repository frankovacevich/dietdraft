<script setup lang="ts">
import FoodItemAlt from "../components/FoodItemAlt.vue";
import { mainStore } from "@/store";
const store = mainStore();
</script>

<template>
  <template v-for="food in store.todaysFoodsExtended">
    <FoodItemAlt
      :name="food.name"
      :icon="food.icon"
      :description="food.description"
      :protein="food.protein"
      :fat="food.fat"
      :carbs="food.carbs"
      :amount="food.amount"
      :selected="food.amount ? food.amount > 0 : false"
      @top-click="store.updateFoodAmount(food, 1)"
      @bottom-click="store.updateFoodAmount(food, -1)"
      @hold="store.openModalFoodInfo(food)"
    />
  </template>
</template>
