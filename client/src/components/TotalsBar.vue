<script>
import { getVariable } from "@/main";

export default {
  props: {
    text: { type: String, default: "" },
    value: { type: Number, default: 0 },
    target: { type: Number, default: 0 },
  },

  computed: {
    valuePercentage() {
      return this.target == 0 ? 0 : (100 * this.value) / this.target;
    },

    displayColor() {
      if (this.valuePercentage < 85 || this.valuePercentage > 110) {
        return getVariable("--color-danger");
      }
      return getVariable("--color-text");
    },

    displayValue() {
      return this.value.toFixed();
    },

    displayTarget() {
      return this.target.toFixed();
    },
  },
};
</script>

<template>
  <div class="main-container">
    <div>{{ text }}</div>
    <div>
      <span :style="{ color: displayColor }">{{ displayValue }}</span> /
      {{ displayTarget }}
    </div>
  </div>
</template>

<style scoped>
.main-container {
  font-size: 10pt;
  text-align: center;
}
</style>
