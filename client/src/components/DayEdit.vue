<script setup lang="ts">
import FoodItem from "../components/FoodItem.vue";
import { mainStore } from "@/store";
const store = mainStore();
</script>

<template>
  <template v-for="food in store.todaysFoodsExtended">
    <FoodItem
      :name="food.name"
      :icon="food.icon"
      :description="food.description"
      :protein="food.protein"
      :fat="food.fat"
      :carbs="food.carbs"
      :amount="food.amount"
      :selected="food.amount ? food.amount > 0 : false"
      :extra="
        (food.carbs * 4 + food.protein * 4 + food.fat * 9).toFixed() + ' kcal'
      "
      @top-click="store.updateFoodAmount(food, 1)"
      @bottom-click="store.updateFoodAmount(food, -1)"
    />
  </template>
</template>
