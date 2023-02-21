<script lang="ts">
import { COLORS } from "@/colors";
export default {};
</script>

<template>
  <div class="food-item">
    <div class="food-icon">
      <img src="@/assets/food/sandwich.svg" />
    </div>
    <div class="food-name">
      <span>Sandwich</span>
    </div>
  </div>
</template>

<style>
.food-item {
  background-color: var(--color-gray-0);
  border-radius: 8px;
  padding: 8px;

  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.food-icon img {
  width: 32px;
  height: 32px;
}

.food-name {
  position: absolute;
  bottom: 5px;
  font-size: 9px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  overflow-x: hidden;
}
</style>
