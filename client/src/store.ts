import type { CalculationMethod, Food, Plan } from "./food";
import { defineStore } from "pinia";

export const store = defineStore("store", {
  state: () => {
    return {
      currentDay: 0,
      currentPlan: null as Plan | null,
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
  },
});
