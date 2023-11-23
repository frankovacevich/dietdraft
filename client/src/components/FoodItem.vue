<script lang="ts">
export default {
  data() {
    return {
      holdStartTimestamp: 0,
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
    extra: { type: String, default: undefined },
  },

  computed: {
    calories() {
      return 9 * this.fat + 4 * this.protein + 4 * this.carbs;
    },

    amountDisplay() {
      if (this.amount === undefined) {
        return undefined;
      }

      if (this.amount == 0.5) {
        return "½";
      }

      return this.amount.toString();
    },
  },

  methods: {
    resolveImg(image: string) {
      return `./food/${image}.svg`;
    },

    heldLongEnough() {
      const now = new Date().getTime();
      const holdThreshold = 500; // 500 milliseconds
      return now - this.holdStartTimestamp > holdThreshold;
    },

    topClick() {
      if (!this.heldLongEnough()) {
        this.$emit("topClick");
      }
    },

    bottomClick() {
      if (!this.heldLongEnough()) {
        this.$emit("bottomClick");
      }
    },

    holdStart() {
      this.holdStartTimestamp = new Date().getTime();
    },

    holdEnd() {
      if (this.heldLongEnough()) {
        this.$emit("hold");
      }
    },
  },
};
</script>

<template>
  <div class="food-item" :class="{ selected: selected }">
    <div
      class="food-item-top"
      @click="topClick()"
      @mousedown="holdStart()"
      @mouseup="holdEnd()"
      @touchstart="holdStart()"
      @touchend="holdEnd()"
    ></div>
    <div
      class="food-item-bottom"
      @click="bottomClick()"
      @mousedown="holdStart()"
      @mouseup="holdEnd()"
      @touchstart="holdStart()"
      @touchend="holdEnd()"
    ></div>

    <div class="food-icon">
      <img :src="resolveImg(icon)" />
    </div>
    <div v-if="amount" class="food-amount">
      {{ amount }}
    </div>
    <div v-if="extra" class="food-quantity">
      {{ extra }}
    </div>
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

  width: 20vw;
  height: 20vw;

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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  top: 0;
  left: 0;
  background-color: var(--color-primary);
  width: 18px;
  height: 18px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 8px;
  box-sizing: border-box;
}

.food-quantity {
  position: absolute;
  font-size: 8px;
  top: 0;
  right: 0;
  color: var(--color-gray-2);
  text-align: right;
  padding-top: 5px;
  padding-right: 8px;
}

.food-name {
  position: absolute;
  bottom: 0;
  margin-bottom: 5px;
  font-size: 10pt;
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
