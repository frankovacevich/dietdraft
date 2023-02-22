import type { CalculationMethod, Food, Plan } from "./food";
import { defineStore } from "pinia";

export const mainStore = defineStore("mainStore", {
  state: () => {
    return {
      currentDay: 0,
      currentPlan: null as Plan | null,
      tst: true,
    };
  },

  actions: {
    save() {},
    load() {},
    insertFoodItem(foodItem: Food, day: number) {},
    createPlan(
      proteinRequired: number,
      fatRequired: number,
      carbsRequired: number,
      daysRequired: number,
      calculationMethod: CalculationMethod
    ) {},
    test() {
      this.tst = !this.tst;
      console.log(this.tst);
    },
  },
});
