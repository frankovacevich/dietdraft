<script setup>
import TotalsBar from "./TotalsBar.vue";
</script>

<script>
export default {
  props: {
    protein: { type: Number, default: 0 },
    fat: { type: Number, default: 0 },
    carbs: { type: Number, default: 0 },
    proteinTarget: { type: Number, default: 0 },
    fatTarget: { type: Number, default: 0 },
    carbsTarget: { type: Number, default: 0 },
    selected: { type: String, default: undefined },
  },

  computed: {
    calories() {
      return 4 * this.protein + 9 * this.fat + 4 * this.carbs;
    },

    caloriesTarget() {
      return 4 * this.proteinTarget + 9 * this.fatTarget + 4 * this.carbsTarget;
    },
  },
};
</script>

<template>
  <div class="container">
    <div>
      <TotalsBar
        text="Protein"
        :value="protein"
        :target="proteinTarget"
      ></TotalsBar>
    </div>
    <div>
      <TotalsBar text="Fat" :value="fat" :target="fatTarget"></TotalsBar>
    </div>
    <div>
      <TotalsBar text="Carbs" :value="carbs" :target="carbsTarget"></TotalsBar>
    </div>
    <div>
      <TotalsBar
        text="Kcal"
        :value="calories"
        :target="caloriesTarget"
      ></TotalsBar>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
}

.container div {
  flex-grow: 1;
}
</style>
