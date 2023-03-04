<script lang="ts">
import { mainStore } from "@/store";

export default {
  data() {
    return {
      maxCalories: mainStore().maxFoodCalories,
    };
  },

  props: {
    protein: { type: Number, default: 0 },
    fat: { type: Number, default: 0 },
    carbs: { type: Number, default: 0 },
  },

  computed: {
    calories() {
      return 9 * this.fat + 4 * this.protein + 4 * this.carbs;
    },

    proteinBarWidth() {
      return 100 * ((4 * this.protein) / this.calories);
    },

    fatBarWidth() {
      return 100 * ((9 * this.fat) / this.calories);
    },

    carbsBarWidth() {
      return 100 * ((4 * this.carbs) / this.calories);
    },
  },
};
</script>

<template>
  <div class="food-quantity-bar">
    <div class="protein-bar" :style="{ width: proteinBarWidth + '%' }">
      <span v-if="proteinBarWidth > 5">{{ protein.toFixed() }}g</span>
    </div>
    <div class="fat-bar" :style="{ width: fatBarWidth + '%' }">
      <span v-if="fatBarWidth > 5">{{ fat.toFixed() }}g</span>
    </div>
    <div class="carbs-bar" :style="{ width: carbsBarWidth + '%' }">
      <span v-if="carbsBarWidth > 5">{{ carbs.toFixed() }}g</span>
    </div>
  </div>
</template>

<style>
.food-quantity-bar {
  display: flex;
  background-color: var(--color-gray-1);
  width: 100%;
  min-height: 12px;
  max-height: 12px;
  border-radius: 5px;
  font-size: 8px;
  overflow: hidden;
}
.protein-bar {
  background-color: var(--color-protein);
  text-align: center;
  line-height: 12px;
}
.fat-bar {
  background-color: var(--color-fat);
  text-align: center;
  line-height: 12px;
}
.carbs-bar {
  background-color: var(--color-carbs);
  text-align: center;
  line-height: 12px;
}
</style>
