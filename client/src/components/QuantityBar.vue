<script lang="ts">
import { COLORS } from "@/colors";

export default {
  props: {
    value: { type: Number, default: 0 },
    setpoint: { type: Number, default: 1 },
    unit: { type: String, default: "" },
    text: { type: String, default: "" },
  },

  computed: {
    barWidth() {
      return (100 * this.value) / this.setpoint;
    },

    barColor() {
      if (this.barWidth < 85 || this.barWidth > 110) {
        return COLORS.danger;
      }
      return COLORS.primary;
    },
  },
};
</script>

<template>
  <div class="quantity-bar-container">
    <small>{{ text }}</small>
    <div class="quantity-bar-outer">
      <div
        class="quantity-bar-inner"
        :style="{ width: barWidth + '%', backgroundColor: barColor }"
      ></div>
    </div>
    <small>{{ value }}{{ unit }} </small>
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
  height: 6px;
}

.quantity-bar-inner {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  height: 6px;
}
</style>
