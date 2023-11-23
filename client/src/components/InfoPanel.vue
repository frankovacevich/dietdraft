<script setup lang="ts">
import QuantityBar from "../components/QuantityBar.vue";
</script>

<script lang="ts">
export default {
  props: {
    protein: { type: Number, default: 0 },
    fat: { type: Number, default: 0 },
    carbs: { type: Number, default: 0 },

    proteinSetpoint: { type: Number, default: 0 },
    fatSetpoint: { type: Number, default: 0 },
    carbsSetpoint: { type: Number, default: 0 },
  },

  computed: {
    calories() {
      return 4 * this.protein + 4 * this.carbs + 9 * this.fat;
    },

    caloriesSetpoint() {
      return (
        4 * this.proteinSetpoint + 4 * this.carbsSetpoint + 9 * this.fatSetpoint
      );
    },
  },
};
</script>

<template>
  <div class="info-panel-container">
    <slot name="left-icon">
      <div class="info-panel-icon"></div>
    </slot>

    <div style="flex: 1"></div>
    <QuantityBar
      text="Protein"
      :value="protein"
      unit="g"
      :setpoint="proteinSetpoint"
    />
    <QuantityBar 
      text="Fat" 
      :value="fat" 
      unit="g" 
      :setpoint="fatSetpoint"
    />
    <QuantityBar
      text="Carbs"
      :value="carbs"
      unit="g"
      :setpoint="carbsSetpoint"
    />
    <QuantityBar
      text="Calories"
      :value="calories"
      unit=""
      :setpoint="caloriesSetpoint"
    />
    <div style="flex: 1"></div>

    <slot name="right-icon">
      <div class="info-panel-icon"></div>
    </slot>
  </div>
</template>

<style>
.info-panel-container {
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.info-panel-icon {
  cursor: pointer;
  width: 24px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
