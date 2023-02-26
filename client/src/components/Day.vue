<script setup lang="ts">
import FoodItem from "../components/FoodItem.vue";
import { mainStore } from "@/store";
const store = mainStore();
</script>

<template>
  <div class="day-container">
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
  </div>
</template>

<style>
.day-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
  overflow-y: scroll;
}
</style>
