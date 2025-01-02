<script setup>
import MainContainer from "@/components/MainContainer.vue";
import TitleBar from "@/components/TitleBar.vue";
import { MEALS } from "@/core/enums";

import { mainStore } from "@/store";
const store = mainStore();
</script>

<template>
  <div class="modal" :class="{ 'modal-hidden': !store.editFoodModal.visible }">
    <TitleBar>
      <div class="title-bar-icon" @click="store.editFoodModal.close()">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </div>
      <div style="flex-grow: 1"></div>
      <div>Edit Food</div>
      <div style="flex-grow: 1"></div>
      <div class="title-bar-icon" @click="store.saveAndCloseEditFoodModal()">
        <font-awesome-icon icon="fa-solid fa-check" />
      </div>
    </TitleBar>

    <MainContainer>
      <div class="input-container">
        <input type="text" placeholder="Name" v-model="store.editFoodModal.nameInput" />
      </div>
      <div class="input-container">
        <input type="text" placeholder="Icon" v-model="store.editFoodModal.iconInput" />
        <div class="food-icon" :class="{ crossed: crossed }">
          <img :src="store.editFoodModal.iconSrc" />
        </div>
      </div>
      <div class="input-container">
        <input type="text" placeholder="Category" v-model="store.editFoodModal.categoryInput" />
      </div>
      <div class="input-container">
        <textarea
          placeholder="Description"
          v-model="store.editFoodModal.descriptionInput"
        ></textarea>
      </div>
      <div class="input-container">
        <table class="macros-table">
          <tr>
            <td>Protein</td>
            <td>Fat</td>
            <td>Carbs</td>
            <td>Calories</td>
          </tr>
          <tr>
            <td>
              <input v-model="store.editFoodModal.proteinInput" type="number" min="0" max="300" />
            </td>
            <td>
              <input v-model="store.editFoodModal.fatInput" type="number" min="0" max="300" />
            </td>
            <td>
              <input v-model="store.editFoodModal.carbsInput" type="number" min="0" max="300" />
            </td>
            <td>{{ store.editFoodModal.calories }}</td>
          </tr>
        </table>
      </div>
      <div class="input-container checkboxes">
        <label v-for="option in MEALS" :key="option">
          <input type="checkbox" :value="option" v-model="store.editFoodModal.mealsInput" />
          {{ option }} </label
        ><br />
      </div>
    </MainContainer>
  </div>
</template>

<style scoped>
.macros-table {
  border: none;
  border-collapse: collapse;
  width: 100%;
}

.macros-table td {
  height: 25px;
}

.food-icon,
.food-icon img {
  width: 20px;
  height: 20px;
}
</style>
