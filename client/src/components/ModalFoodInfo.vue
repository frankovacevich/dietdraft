<script lang="ts">
import FoodQuantityBar from "@/components/FoodQuantityBar.vue";
import { mainStore } from "@/store";

export default {
  props: {
    name: { type: String, default: "Food name" },
    icon: { type: String, default: "egg" },
    description: { type: String, default: "" },
    protein: { type: Number, default: 0 },
    fat: { type: Number, default: 0 },
    carbs: { type: Number, default: 0 },
  },

  computed: {
    calories() {
      return (4 * this.protein + 9 * this.fat + 4 * this.carbs).toFixed();
    },
  },

  methods: {
    resolveImg(image: string) {
      return `./food/${image}.svg`;
    },
    close() {
      mainStore().closeModals();
    },
  },

  components: {
    FoodQuantityBar,
  },
};
</script>

<template>
  <div class="modal-outside" @click.self="close()">
    <div class="modal">
      <div class="modal-inside">
        <div class="modal-food-info-name">{{ name }}</div>

        <div class="modal-food-info-description">{{ description }}</div>
        <div style="flex: 1"></div>
        <div class="modal-food-info-icon"><img :src="resolveImg(icon)" /></div>

        <span style="padding: 10px">{{ calories }} kcal</span>
        <div style="flex: 1"></div>

        <FoodQuantityBar
          :protein="protein"
          :fat="fat"
          :carbs="carbs"
        ></FoodQuantityBar>
      </div>
      <div class="modal-button" @click.self="close()">Close</div>
    </div>
  </div>
</template>

<style>
.modal-outside {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 60%;
  height: 60%;
  max-width: 250px;
  min-width: 250px;
  max-height: 300px;
  min-height: 300px;

  background-color: var(--color-background);
  border-radius: 10px;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 0 5px 5px rgb(0, 0, 0, 0.4);

  overflow: hidden;
}

.modal-inside {
  padding: 20px;
  flex: 1;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-button {
  font-size: 12px;
  color: var(--color-gray-3);
  cursor: pointer;
  border-top: 1px solid var(--color-gray-1);
  width: 100%;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
}

.modal-button:hover {
  background-color: var(--color-gray-1);
}

.modal-food-info-name {
  font-size: 20px;
}

.modal-food-info-icon,
.modal-food-info-icon img {
  width: 80px;
  height: 80px;
}

.modal-food-info-description {
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
}
</style>
