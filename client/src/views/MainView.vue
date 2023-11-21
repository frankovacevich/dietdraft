<script setup lang="ts">
import Day from "../components/Day.vue";
import Title from "../components/Title.vue";
import DayEdit from "@/components/DayEdit.vue";
import InfoPanel from "../components/InfoPanel.vue";
import ModalFoodInfo from "@/components/ModalFoodInfo.vue";

import { mainStore } from "@/store";
const store = mainStore();
</script>

<template>
  <Title>
    <template v-slot:right-icon>
      <font-awesome-icon icon="fa-solid fa-ellipsis" />
    </template>
  </Title>

  <div class="main-container">
    <ModalFoodInfo
      v-if="store.modal_food_info !== undefined"
      :name="store.modal_food_info.name"
      :icon="store.modal_food_info.icon"
      :description="store.modal_food_info.description"
      :protein="store.modal_food_info.protein"
      :fat="store.modal_food_info.fat"
      :carbs="store.modal_food_info.carbs"
    >
    </ModalFoodInfo>

    <div class="main-info-panel-container">
      <InfoPanel
        v-if="store.planInfo !== undefined"
        :protein="store.todaysQuantities.protein"
        :fat="store.todaysQuantities.fat"
        :carbs="store.todaysQuantities.carbs"
        :protein-setpoint="store.planInfo.proteinSetpoint"
        :fat-setpoint="store.planInfo.fatSetpoint"
        :carbs-setpoint="store.planInfo.carbsSetpoint"
      >
        <template v-slot:left-icon>
          <div
            v-if="store.today > 0"
            @click="store.previousDay()"
            class="info-panel-icon"
          >
            <font-awesome-icon icon="fa-solid fa-chevron-left" />
          </div>
        </template>
        <template v-slot:right-icon>
          <div
            v-if="store.today + 1 < store.planData.length"
            @click="store.nextDay()"
            class="info-panel-icon"
          >
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
          </div>
        </template>
      </InfoPanel>
    </div>
    <div class="main-day-container">
      <DayEdit />
    </div>
  </div>
</template>

<style>
.main-container {
  left: 0;
  bottom: 0;
  top: 54px;
  right: 0;
  position: fixed;
  overflow-x: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  background-color: var(--color-background);
}

.main-info-panel-container {
  position: sticky;
  top: 0px;
  padding: 10px 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: var(--color-background);
  box-shadow: 0px 20px 20px -20px var(--color-gray-1);
  z-index: 10;
}

.main-day-container {
  padding: 15px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  z-index: 5;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
  overflow-y: scroll;
}
</style>
