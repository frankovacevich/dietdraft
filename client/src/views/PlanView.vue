<script setup>
import TitleBar from "@/components/TitleBar.vue";
import MainContainer from "@/components/MainContainer.vue";
import FoodItem from "@/components/FoodItem.vue";

import { mainStore } from "@/store";
import { CalculationMethods } from "@/calculator";
const store = mainStore();
</script>

<template>
  <TitleBar>
    <router-link to="/menu">
      <div class="title-bar-icon">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
      </div>
    </router-link>
    <div style="flex-grow: 1"></div>
    <div>Plan</div>
    <div style="flex-grow: 1"></div>
    <div class="title-bar-icon" @click="store.generateNewPlan()">
      <font-awesome-icon
        icon="fa-solid fa-rotate-right"
        :spin="store.calculating"
      />
    </div>
  </TitleBar>
  <MainContainer>
    <div class="more-options-div">
      <div>Days:</div>
      <input
        v-model="store.planInfoInput.days"
        min="0"
        max="31"
        type="number"
      />
      <div>Optimize:</div>
      <select
        v-model="store.planInfoInput.calculationMethod"
        style="flex-grow: 1; max-width: none"
      >
        <option
          v-for="option in CalculationMethods"
          :key="option"
          :value="option"
        >
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
          <input
            v-model="store.planInfoInput.protein"
            type="number"
            min="0"
            max="300"
          />
        </td>
        <td>
          <input
            v-model="store.planInfoInput.fat"
            type="number"
            min="0"
            max="300"
          />
        </td>
        <td>
          <input
            v-model="store.planInfoInput.carbs"
            type="number"
            min="0"
            max="300"
          />
        </td>
        <td>{{ store.planInfoInput.calories }}</td>
      </tr>
      <tr>
        <td>%</td>
        <td>{{ store.planInfoInput.percentages.protein }}%</td>
        <td>{{ store.planInfoInput.percentages.fat }}%</td>
        <td>{{ store.planInfoInput.percentages.carbs }}%</td>
        <td>{{ store.planInfoInput.percentages.calories }}%</td>
      </tr>
      <tr>
        <td>Average</td>
        <td>{{ store.planFoodsAverages.protein.toFixed() }}</td>
        <td>{{ store.planFoodsAverages.fat.toFixed() }}</td>
        <td>{{ store.planFoodsAverages.carbs.toFixed() }}</td>
        <td>{{ store.planFoodsAverages.calories.toFixed() }}</td>
      </tr>
      <tr>
        <td>%</td>
        <td>{{ store.planFoodsAveragesPercentages.protein }}%</td>
        <td>{{ store.planFoodsAveragesPercentages.fat }}%</td>
        <td>{{ store.planFoodsAveragesPercentages.carbs }}%</td>
        <td>{{ store.planFoodsAveragesPercentages.calories }}%</td>
      </tr>
    </table>

    <div class="subtitle">Shopping List</div>
    <FoodItem
      v-for="(food, i) in store.shoppingList"
      :key="i"
      :name="food.name"
      :icon="food.icon"
      :description="food.description"
      :amount="food.amount"
    ></FoodItem>
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
}

.button {
  border-radius: 5px;
  background-color: var(--color-primary);
  padding: 12px;
  margin-top: 10px;
  text-align: center;
}

.button:active {
  background-color: var(--color-primary-active);
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
  width: 20%;
  font-weight: bold;
}

.summary-table tr:nth-child(1) td,
.summary-table tr:nth-child(3) td,
.summary-table tr:nth-child(5) td {
  border-bottom: 1px solid;
}

.summary-table tr:nth-child(3) td,
.summary-table tr:nth-child(5) td {
  color: var(--color-gray-2);
}

.summary-table td:not(:first-child) {
  width: 20%;
  text-align: center;
}

.subtitle {
  color: var(--color-gray-1);
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
