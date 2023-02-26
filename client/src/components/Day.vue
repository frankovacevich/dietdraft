<script setup lang="ts">
import FoodItem from "../components/FoodItem.vue";
import { mainStore } from "@/store";
const store = mainStore();
</script>

<template>
  <template v-for="food in store.todaysFoods">
    <FoodItem
      :name="food.name"
      :icon="food.icon"
      :description="food.description"
      :protein="food.protein"
      :fat="food.fat"
      :carbs="food.carbs"
      :selected="food.selected"
      :amount="food.amount !== 1 ? food.amount : undefined"
      @top-click="store.toggleSelected(food)"
      @bottom-click="store.toggleSelected(food)"
    />
  </template>
</template>
