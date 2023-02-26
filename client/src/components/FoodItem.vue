<script lang="ts">
export default {
  data() {
    return {};
  },

  props: {
    name: { type: String, default: "Food name" },
    icon: { type: String, default: "egg" },
    description: { type: String, default: "" },
    protein: { type: Number, default: 0 },
    fat: { type: Number, default: 0 },
    carbs: { type: Number, default: 0 },
    amount: { type: Number, default: null },
    selected: { type: Boolean, default: false },
    quantity: { type: String, default: null },
  },

  computed: {
    calories() {
      return 9 * this.fat + 4 * this.protein + 4 * this.carbs;
    },
  },

  methods: {
    resolveImg(image: string) {
      return `./food/${image}.svg`;
    },

    topClick() {
      this.$emit("topClick");
    },

    bottomClick() {
      this.$emit("bottomClick");
    },
  },
};
</script>

<template>
  <div class="food-item" :class="{ selected: selected }">
    <div class="food-item-top" @click="topClick()"></div>
    <div class="food-item-bottom" @click="bottomClick()"></div>

    <div class="food-icon">
      <img :src="resolveImg(icon)" />
    </div>
    <div v-if="amount > 0" class="food-amount">
      {{ amount }}
    </div>
    <div v-if="quantity" class="food-quantity">{{ calories }} kcal</div>
    <div class="food-name">
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<style>
.food-item {
  background-color: var(--color-gray-0);
  border-radius: 8px;
  padding: 8px;

  width: 72px;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
}

.food-item.selected {
  outline: 3px solid var(--color-primary);
  outline-offset: -3px;
}

.food-icon img {
  width: 32px;
  height: 32px;
}

.food-amount {
  position: absolute;
  font-size: 10px;
  top: 0;
  left: 0;
  background-color: var(--color-primary);
  width: 18px;
  height: 18px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 8px;
  text-align: center;
  padding-top: 3px;
  box-sizing: border-box;
}

.food-quantity {
  position: absolute;
  font-size: 8px;
  top: 0;
  right: 0;
  color: var(--color-gray-2);
  text-align: right;
  padding-top: 3px;
  padding-right: 5px;
}

.food-name {
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
  font-size: 8px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  overflow-x: hidden;
  color: var(--color-gray-2);
}

.food-item-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50%;
  z-index: 1;
}

.food-item-bottom {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
</style>
