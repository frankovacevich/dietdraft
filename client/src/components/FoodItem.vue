<script>
export default {
  data() {
    return {
      // Hold
      holdStartTimestamp: 0,
      // Drag delete
      dragStartX: null,
      dragAboutToDelete: false,
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
      return 9 * this.fat + 4 * this.protein + 4 * this.carbs;
    },

    displayName() {
      return this.name.charAt(0).toUpperCase() + this.name.slice(1);
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
    resolveImg(image) {
      return `/food/${image}.png`;
    },

    heldLongEnough() {
      const now = new Date().getTime();
      const holdThreshold = 500; // 500 milliseconds
      return now - this.holdStartTimestamp > holdThreshold;
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
      // Drag delete
      if (this.allowDelete) {
        this.dragStartX = e.touches[0].clientX;
      }

      // Hold
      this.holdStartTimestamp = new Date().getTime();
    },

    touchMove(e) {
      // Drag delete
      if (this.allowDelete && this.dragStartX) {
        const threshold = 100;
        const delta = this.dragStartX - e.touches[0].clientX;
        if (Math.abs(delta) > threshold) {
          this.dragAboutToDelete = true;
        } else {
          this.dragAboutToDelete = false;
        }
      }
    },

    touchEnd() {
      // Drag delete
      if (this.allowDelete && this.dragAboutToDelete) {
        this.$emit("delete");
        this.dragAboutToDelete = false;
        this.dragStartX = null;
        return;
      }

      // Hold
      if (this.heldLongEnough()) {
        this.$emit("hold");
        this.holdStartTimestamp = 0;
        return;
      }
    },
  },
};
</script>

<template>
  <div
    class="food-item"
    :class="{ selected: selected, delete: dragAboutToDelete }"
    @click.self="bodyClick()"
    @mousedown="holdStart()"
    @mouseup="holdEnd()"
    @touchstart="touchStart($event)"
    @touchmove="touchMove($event)"
    @touchend="touchEnd()"
  >
    <div class="food-icon" :class="{ crossed: crossed }">
      <img :src="resolveImg(icon)" />
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
