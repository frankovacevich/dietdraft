<script setup>
import MainContainer from "@/components/MainContainer.vue";
import TitleBar from "@/components/TitleBar.vue";

import { mainStore } from "@/store";
const store = mainStore();
</script>

<template>
  <div class="modal" :class="{ 'modal-hidden': !store.presetPlansModal.visible }">
    <TitleBar>
      <div class="title-bar-icon" @click="store.presetPlansModal.close()">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </div>
      <div style="flex-grow: 1"></div>
      <div>Preset Plans</div>
      <div style="flex-grow: 1"></div>
      <div style="width: 40px"></div>
    </TitleBar>
    <MainContainer> Preset plans will go here! </MainContainer>
  </div>

  <div v-for="plan in store.presetPlans" :key="plan.name">
    <div class="preset-plan" @click="store.selectPresetPlan(plan)">
      <div class="preset-plan-name">{{ plan.name }}</div>
      <div class="preset-plan-description">{{ plan.description }}</div>
    </div>
  </div>
</template>

<style scoped>
.preset-plan {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.preset-plan:hover {
  background-color: var(--color-gray-1);
}

.preset-plan-name {
  font-size: 20px;
  font-weight: bold;
}

.preset-plan-description {
  font-size: 14px;
  color: var(--color-gray-2);
}
</style>
