<script setup>
import FoodItem from "@/components/FoodItem.vue";
import MainContainer from "@/components/MainContainer.vue";
import TitleBar from "@/components/TitleBar.vue";

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
      <div class="input-container">
        <input
          id="searchInput"
          type="text"
          placeholder="Search"
          v-model="store.addFoodModal.searchText"
        />
        <font-awesome-icon
          v-if="store.addFoodModal.searchText !== ''"
          @click="store.addFoodModal.clearSearch()"
          icon="fa-solid fa-xmark"
          class="input-icon"
        />
        <font-awesome-icon
          v-if="store.addFoodModal.searchText === ''"
          icon="fa-solid fa-magnifying-glass"
          class="input-icon"
        />
      </div>
      <div v-for="cat in store.addFoodModal.getCategories()" :key="cat">
        <div class="category-title">{{ cat }}</div>
        <FoodItem
          v-for="(food, i) in store.addFoodModal.getFoodsForCategory(cat)"
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
