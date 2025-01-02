<script setup>
import { mainStore } from "@/store";
const store = mainStore();
</script>

<template>
  <div
    class="overlay"
    :class="{ 'overlay-hidden': !store.foodInfoModal.visible }"
    @mousedown="store.foodInfoModal.close()"
  ></div>
  <div class="bottom-sheet" :class="{ 'bottom-sheet-hidden': !store.foodInfoModal.visible }">
    <div class="bottom-sheet-container">
      <div class="icon">
        <img :src="`/food/${store.foodInfoModal.food.icon}.png`" />
      </div>
      <div class="text-title">{{ store.foodInfoModal.food.name }}</div>
      <div class="text-description">
        {{ store.foodInfoModal.food.description }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 54px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  opacity: 1;
  display: block;
  transition: opacity 0.2s ease-in-out;
}

.overlay-hidden {
  display: none;
  opacity: 0.5;
}

.bottom-sheet {
  z-index: 100;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 150px;
  background-color: var(--color-background);
  /* box-shadow: 0px 0px 5px 1px rgba(255, 255, 255, 0.3);*/
  border-radius: 15px 15px 0 0;
  text-align: center;
  transition: height 0.2s ease-in-out;
}

.bottom-sheet-hidden {
  height: 0;
}

.bottom-sheet-container {
  padding: 10px;
}

.handle {
  width: 60px;
  height: 5px;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--color-gray-2);
}

.text-title {
  width: 100%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.text-description {
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.icon {
  margin-top: 10px;
}

.icon img {
  width: 48px;
  height: 48px;
}
</style>
