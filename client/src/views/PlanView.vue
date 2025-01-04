<script setup>
import MainContainer from "@/components/MainContainer.vue";
import TabsTitleBar from "@/components/TabsTitleBar.vue";
import FoodItem from "@/components/FoodItem.vue";

import { mainStore } from "@/store";
import { CALCULATION_METHODS } from "@/core/enums";
const store = mainStore();
</script>

<template>
  <TabsTitleBar></TabsTitleBar>
  <MainContainer padding="0 0 56px 0">
    <div class="subtitle" style="padding: 10px">Plan Settings</div>
    <div class="more-options-div">
      <div>Days:</div>
      <input v-model="store.planInfoInput.days" min="0" max="31" type="number" />
      <div>Optimize:</div>
      <select v-model="store.planInfoInput.calculationMethod" style="flex-grow: 1; max-width: none">
        <option v-for="option in CALCULATION_METHODS" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <table class="summary-table">
      <tr>
        <td></td>
        <td>Protein</td>
        <td>Fat</td>
        <td>Carbs</td>
        <td>Calories</td>
      </tr>
      <tr>
        <td>Target</td>
        <td>
          <input v-model="store.planInfoInput.protein" type="number" min="0" max="300" />
        </td>
        <td>
          <input v-model="store.planInfoInput.fat" type="number" min="0" max="300" />
        </td>
        <td>
          <input v-model="store.planInfoInput.carbs" type="number" min="0" max="300" />
        </td>
        <td>{{ store.planInfoInput.macros.calories }}</td>
      </tr>
      <tr>
        <td></td>
        <td>{{ store.planInfoInput.macros.proteinPercentage }}%</td>
        <td>{{ store.planInfoInput.macros.fatPercentage }}%</td>
        <td>{{ store.planInfoInput.macros.carbsPercentage }}%</td>
        <td>{{ store.planInfoInput.macros.caloriesPercentage }}%</td>
      </tr>
      <tr>
        <td>Average</td>
        <td>{{ store.planData.macrosAverage.protein }}</td>
        <td>{{ store.planData.macrosAverage.fat }}</td>
        <td>{{ store.planData.macrosAverage.carbs }}</td>
        <td>{{ store.planData.macrosAverage.calories }}</td>
      </tr>
      <tr>
        <td></td>
        <td>{{ store.planData.macrosAverage.proteinPercentage }}%</td>
        <td>{{ store.planData.macrosAverage.fatPercentage }}%</td>
        <td>{{ store.planData.macrosAverage.carbsPercentage }}%</td>
        <td>{{ store.planData.macrosAverage.caloriesPercentage }}%</td>
      </tr>
    </table>

    <!-- Shopping List -->
    <div style="padding: 10px">
      <FoodItem
        v-for="(food, i) in store.planData.shoppingList"
        :key="i"
        :name="food.name"
        :icon="food.icon"
        :description="food.description"
        :amount="food.amount"
      ></FoodItem>
    </div>

    <div class="bottom-toolbar">
      <div style="flex-grow: 1"></div>
      <div class="round-button round-button-secondary" @click="store.clearPlan()">
        <font-awesome-icon icon="fa-solid fa-trash" />
      </div>
      <div class="round-button" @click="store.generateNewPlan()">
        <font-awesome-icon icon="fa-solid fa-rotate-right" />
      </div>
    </div>
  </MainContainer>
</template>

<style scoped>
input,
select {
  background-color: var(--color-gray-1);
  border: none;
  outline: none;
  border-radius: 5px;
  width: 50%;
  max-width: 50px;
  text-align: center;
  padding: 5px;
  font-size: 1rem;
}

.more-options-div {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
  padding: 10px;
}

.summary-table {
  border: none;
  border-collapse: collapse;
  width: 100%;
}

.summary-table td {
  height: 35px;
}

.summary-table td:first-child {
  font-weight: bold;
  padding-left: 10px;
}

.summary-table td:not(:first-child) {
  text-align: center;
}

.summary-table tr:nth-child(1) td,
.summary-table tr:nth-child(3) td,
.summary-table tr:nth-child(5) td {
  border-bottom: 1px solid var(--color-gray-1);
}

.summary-table tr:nth-child(3) td,
.summary-table tr:nth-child(5) td {
  color: var(--color-gray-2);
  font-size: 13px;
  height: 25px;
}
.summary-table tr:nth-child(2) td,
.summary-table tr:nth-child(3) td {
  background-color: var(--color-gray-0);
}
</style>
