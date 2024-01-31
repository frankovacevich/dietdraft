<script setup>
import TitleBar from "@/components/TitleBar.vue";
import MainContainer from "@/components/MainContainer.vue";
import FoodItem from "@/components/FoodItem.vue";
import { mainStore } from "@/store";
const store = mainStore();
</script>

<template>
  <div class="modal" :class="{ 'modal-hidden': !store.addFoodModal.visible }">
    <TitleBar>
      <div class="title-bar-icon" @click="store.addFoodModal.close()">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </div>
      <div style="flex-grow: 1"></div>
      <div>Add {{ store.addFoodModal.mealName }}</div>
      <div style="flex-grow: 1"></div>
      <div class="title-bar-icon" @click="store.addFoodFromModal()">
        <font-awesome-icon icon="fa-solid fa-check" />
      </div>
    </TitleBar>
    <MainContainer>
      <div v-for="category in store.addFoodModal.foodCategores" :key="category">
        <div class="category-title">{{ category }}</div>
        <FoodItem
          v-for="(food, i) in store.addFoodModal.getFoodsByCategory(category)"
          :key="i"
          :name="food.name"
          :icon="food.icon"
          :description="food.description"
          :protein="food.protein"
          :fat="food.fat"
          :carbs="food.carbs"
          :amount="undefined"
          :selected="food.selected"
          :selected-quantity="store.selectedQuantity"
          @bodyClick="food.selected = !food.selected"
        ></FoodItem>
      </div>
    </MainContainer>
  </div>
</template>

<style scoped>
.modal {
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: top 0.2s ease-in-out;
}

.modal-hidden {
  top: 100vh;
}

.category-title {
  font-size: 12pt;
  text-transform: capitalize;
  color: var(--color-gray-1);
  padding: 10px 0 10px 0;
}
</style>
