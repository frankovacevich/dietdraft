<script lang="ts">
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <div class="food-item" :class="{ selected: count > 0 }">
    <div class="food-item-top" @click="count++"></div>
    <div class="food-item-bottom" @click="count--"></div>

    <div class="food-icon">
      <img src="@/assets/food/sandwich.svg" />
    </div>
    <div v-if="count > 0" class="food-quantity">
      {{ count }}
    </div>
    <div class="food-name">
      <span>Emp. gallega</span>
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

.food-quantity {
  position: absolute;
  font-size: 10px;
  top: 0;
  right: 0;
  background-color: var(--color-primary);
  width: 18px;
  height: 18px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 8px;
  text-align: center;
  padding-top: 3px;
  box-sizing: border-box;
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
