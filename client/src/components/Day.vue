<script setup lang="ts">
import FoodItem from "../components/FoodItem.vue";
</script>

<template>
  <div class="day-container">
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
    <FoodItem />
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
