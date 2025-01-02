<script>
import { Macros } from "@/core/macros";

export default {
  data() {
    return {
      touchStartTimestamp: null,
      touchStartX: null,
      touchStartY: null,
      aboutToDelete: false,
    };
  },

  props: {
    name: { type: String, default: "Food name" },
    icon: { type: String, default: "egg" },
    description: { type: String, default: "" },
    protein: { type: Number, default: 0 },
    fat: { type: Number, default: 0 },
    carbs: { type: Number, default: 0 },
    amount: { type: Number, default: undefined },
    selected: { type: Boolean, default: false },
    crossed: { type: Boolean, default: false },
    allowDelete: { type: Boolean, default: false },
    selectedQuantity: { type: Number, default: undefined },
  },

  computed: {
    calories() {
      return new Macros(this.protein, this.fat, this.carbs).calories;
    },

    displayName() {
      return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    },

    iconSrc() {
      return `/food/${this.icon}.png`;
    },

    displayQuantity() {
      let value;
      let unit;
      switch (this.selectedQuantity) {
        case 0:
          value = this.calories;
          unit = "kcal";
          break;
        case 1:
          value = this.protein;
          unit = "g";
          break;
        case 2:
          value = this.fat;
          unit = "g";
          break;
        case 3:
          value = this.carbs;
          unit = "g";
          break;
      }
      if (value === undefined) {
        return undefined;
      }
      return `${value.toFixed(0)} ${unit}`;
    },
  },

  methods: {
    heldLongEnough() {
      const now = new Date().getTime();
      const holdThreshold = 500; // milliseconds
      return this.touchStartTimestamp !== null && now - this.touchStartTimestamp > holdThreshold;
    },

    bodyClick() {
      if (!this.heldLongEnough()) {
        this.$emit("bodyClick");
      }
    },

    amountClick() {
      if (!this.heldLongEnough()) {
        this.$emit("amountClick");
      }
    },

    touchStart(e) {
      if (e.touches !== undefined) {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
      }
      this.touchStartTimestamp = new Date().getTime();
    },

    touchMove(e) {
      // Drag delete
      if (this.allowDelete && this.touchStartX) {
        const threshold = 70; //pixels
        const delta = this.touchStartX - e.touches[0].clientX;
        this.aboutToDelete = Math.abs(delta) > threshold;
      }
    },

    touchEnd(e) {
      const threshold = 10; // pixels

      if (this.allowDelete && this.aboutToDelete) {
        this.$emit("delete");
      } else if (
        e !== undefined &&
        this.heldLongEnough() &&
        Math.abs(e.changedTouches[0].clientY - this.touchStartY) < threshold
      ) {
        this.$emit("hold");
      }

      this.aboutToDelete = false;
      this.touchStartX = null;
      this.touchStartY = null;
      this.touchStartTimestamp = null;
    },
  },
};
</script>

<template>
  <div
    class="food-item"
    :class="{ selected: selected, delete: aboutToDelete }"
    @click.self="bodyClick()"
    @mousedown="touchStart($event)"
    @mouseup="touchEnd()"
    @touchstart="touchStart($event)"
    @touchmove="touchMove($event)"
    @touchend="touchEnd($event)"
  >
    <div class="food-icon" :class="{ crossed: crossed }">
      <img :src="iconSrc" />
    </div>
    <div class="food-name" :class="{ crossed: crossed }" @click="bodyClick()">
      <span>{{ displayName }}</span>
    </div>
    <div style="flex-grow: 1"></div>
    <div v-if="selectedQuantity !== undefined" class="display-quantity">
      <span>{{ displayQuantity }}</span>
    </div>
    <div v-if="amount" class="food-amount" @click="amountClick()">
      <span>{{ amount }}</span>
    </div>
  </div>
</template>

<style scoped>
.food-item {
  background-color: var(--color-gray-0);
  border-radius: 8px;

  width: 100%;
  height: 34px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  position: relative;
  box-sizing: border-box;

  margin-bottom: 5px;
}

.food-item.selected {
  outline: 2px solid var(--color-primary);
  outline-offset: -1px;
}

.food-item.delete {
  background-color: var(--color-danger);
}

.food-name {
  font-size: 0.9rem;
}

.food-name.crossed {
  text-decoration: line-through;
}

.food-icon img {
  width: 24px;
  height: 24px;
  margin: 0 6px;
}

.food-icon.crossed {
  filter: grayscale(1);
}

.food-amount {
  border-radius: 5px;
  padding: 6px 6px;
  background-color: rgba(255, 255, 255, 0.2);
  margin-right: 3px;
  font-size: 12px;
}

.display-quantity {
  font-size: 9pt;
  color: var(--color-gray-1);
  margin-right: 6px;
}
</style>
