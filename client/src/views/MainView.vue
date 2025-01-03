<script setup>
import draggable from "vuedraggable";

import AddFoodModal from "@/components/AddFoodModal.vue";
import FoodInfoModal from "@/components/FoodInfoModal.vue";
import FoodItem from "@/components/FoodItem.vue";
import MainContainer from "@/components/MainContainer.vue";
import TitleBar from "@/components/TitleBar.vue";
import TotalsBar from "@/components/TotalsBar.vue";

import { mainStore } from "@/store";

const store = mainStore();
</script>

<template>
  <AddFoodModal></AddFoodModal>
  <FoodInfoModal></FoodInfoModal>
  <TitleBar>
    <div style="margin-left: 8px">
      Day {{ store.day + 1 }} / {{ store.planInfo.days }} ({{ store.selectedDayName }})
    </div>
    <div style="flex-grow: 1"></div>
    <div class="title-bar-icon" @click="store.goToPreviousDay">
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </div>
    <div class="title-bar-icon" @click="store.toggleEditMode">
      <font-awesome-icon v-if="store.editMode" icon="fa-solid fa-pen-to-square" />
      <font-awesome-icon v-if="!store.editMode" icon="fa-regular fa-pen-to-square" />
    </div>
    <div class="title-bar-icon" @click="store.goToNextDay">
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </div>
  </TitleBar>

  <MainContainer>
    <div class="total-bars-container">
      <div @click="store.selectedQuantity = 1">
        <TotalsBar
          :text="'Protein' + (store.selectedQuantity === 1 ? ' •' : '')"
          :value="store.selectedDayMacros.protein"
          :target="store.planInfo.protein"
        ></TotalsBar>
      </div>
      <div @click="store.selectedQuantity = 2">
        <TotalsBar
          :text="'Fat' + (store.selectedQuantity === 2 ? ' •' : '')"
          :value="store.selectedDayMacros.fat"
          :target="store.planInfo.fat"
        ></TotalsBar>
      </div>
      <div @click="store.selectedQuantity = 3">
        <TotalsBar
          :text="'Carbs' + (store.selectedQuantity === 3 ? ' •' : '')"
          :value="store.selectedDayMacros.carbs"
          :target="store.planInfo.carbs"
        ></TotalsBar>
      </div>
      <div @click="store.selectedQuantity = 0">
        <TotalsBar
          :text="'Calories' + (store.selectedQuantity === 0 ? ' •' : '')"
          :value="store.selectedDayMacros.calories"
          :target="store.planInfo.calories"
        ></TotalsBar>
      </div>
    </div>

    <div v-for="(mealName, meal) in store.mealNames" :key="meal">
      <div class="meal-title-container">
        <div class="meal-title">{{ mealName }}</div>
        <div
          v-if="store.editMode"
          class="meal-title-icon"
          @click="store.addFoodModal.open(meal, store.foodSet.foods)"
        >
          <font-awesome-icon icon="fa-solid fa-plus" />
        </div>
        <div style="flex-grow: 1"></div>
      </div>
      <draggable
        :list="store.planData.getFoods(store.day, meal)"
        item-key="id"
        tag="div"
        group="foods"
        :end="store.foodDragEnd()"
        :disabled="!store.editMode"
      >
        <template #item="{ element: food, index: j }">
          <FoodItem
            :name="food.name"
            :icon="food.icon"
            :description="food.description"
            :protein="food.protein"
            :fat="food.fat"
            :carbs="food.carbs"
            :amount="store.editMode || food.amount !== 1 ? food.amount : null"
            :crossed="food.selected"
            :selected-quantity="store.selectedQuantity"
            :allow-delete="store.editMode"
            @bodyClick="store.changeFoodSelected(food)"
            @amountClick="if (store.editMode) store.changeFoodAmount(food);"
            @hold="store.foodInfoModal.open(food)"
            @delete="store.removeFood(meal, j)"
          ></FoodItem>
        </template>
      </draggable>
    </div>
  </MainContainer>

  <div class="bottom-toolbar" v-if="store.editMode">
    <router-link to="/plan">
      <div class="round-button">
        <font-awesome-icon icon="fa-solid fa-sliders" />
      </div>
    </router-link>
    <div style="flex-grow: 1"></div>
    <div class="round-button round-button-secondary" @click="store.clearSelectedDay()">
      <font-awesome-icon icon="fa-solid fa-trash" />
    </div>
    <div class="round-button" @click="store.recalculateToday()">
      <font-awesome-icon icon="fa-solid fa-rotate-right" />
    </div>
  </div>
</template>

<style scoped>
.meal-title-container {
  display: flex;
  align-items: center;
}

.meal-title-icon {
  font-size: 12pt;
  padding: 10px;
}

.meal-title-icon:active {
  color: var(--color-primary-active);
}

.meal-title {
  font-size: 12pt;
  text-transform: capitalize;
  color: var(--color-gray-1);
  padding: 10px 0 10px 0;
}

.total-bars-container {
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
}

.total-bars-container div {
  flex-grow: 1;
}
</style>
