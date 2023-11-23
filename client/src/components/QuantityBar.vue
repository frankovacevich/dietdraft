<script lang="ts">
import { COLORS } from "@/colors";

export default {
  props: {
    value: { type: Number, default: 0 },
    setpoint: { type: Number, default: 0 },
    unit: { type: String, default: "" },
    text: { type: String, default: "" },
  },

  computed: {
    valuePercentage() {
      return this.setpoint == 0 ? 0 : (100 * this.value) / this.setpoint;
    },

    valueRounded() {
      return this.value.toFixed();
    },

    barWidth() {
      if (this.valuePercentage < 50) {
        return 0;
      } else if (this.valuePercentage > 150) {
        return 100;
      } else {
        return (100 * (this.valuePercentage - 50)) / (150 - 50);
      }
    },

    barColor() {
      if (this.valuePercentage < 85 || this.valuePercentage > 115) {
        return COLORS.danger;
      } else {
        return COLORS.primary;
      }
    },
  },
};
</script>

<template>
  <div class="quantity-bar-container">
    <a class="quantity-bar-text">{{ text }}</a>
    <div class="quantity-bar-outer">
      <div
        class="quantity-bar-inner"
        :style="{ width: barWidth + '%', backgroundColor: barColor }"
      ></div>
    </div>
    <a class="quantity-bar-text" v-if="value != 0">{{ valueRounded }}{{ unit }} </a>
    <a class="quantity-bar-text" v-if="value == 0">-</a>
  </div>
</template>

<style>
.quantity-bar-container {
  display: flex;
  height: 50px;
  flex-direction: column;
  width: 60px;
  text-align: center;
  line-height: 2;
}

.quantity-bar-outer {
  background-color: var(--color-gray-1);
  border-radius: 6px;
  width: 100%;
  min-height: 6px;
  overflow: hidden;
}

.quantity-bar-inner {
  height: 100%;
}

.quantity-bar-text{
  font-size: 10pt;
  font-weight: bold;
}

</style>
