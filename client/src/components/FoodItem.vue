<script lang="ts">
import { COLORS } from "@/colors";
export default {};
</script>

<template>
  <div class="food-item">
    <div class="food-icon">
      <img src="@/assets/food/sandwich.svg" />
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
}

.food-icon img {
  width: 32px;
  height: 32px;
}
</style>
