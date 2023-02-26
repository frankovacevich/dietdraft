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
      :amount="1"
    />
  </template>
</template>
