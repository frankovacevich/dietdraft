import {
  type CalculationMethod,
  type Food,
  type PlanInfo,
  type PlanTotal,
  calculateDay,
} from "./food";
import DATA from "./data";
import { defineStore } from "pinia";

export const mainStore = defineStore("mainStore", {
  state: () => {
    return {
      allFoods: DATA as Food[],
      planData: [] as Food[][],
      planInfo: undefined as PlanInfo | undefined,
      today: 0,
    };
  },

  getters: {
    todaysFoods(): Food[] {
      return this.planData[this.today];
    },

    todaysFoodsExtended(): Food[] {
      const map = new Map(this.planData[this.today].map((f) => [f.id, f]));
      return this.allFoods.map((f) => map.get(f.id) || f);
    },

    todaysQuantities(): PlanTotal {
      let total = { protein: 0, fat: 0, carbs: 0 };
      for (const food of this.planData[this.today]) {
        total.protein += food.protein * (food.amount || 0);
        total.fat += food.fat * (food.amount || 0);
        total.carbs += food.carbs * (food.amount || 0);
      }
      return total;
    },
  },

  actions: {
    log(v: any) {
      console.log("[INFO]", v);
    },

    error(e: any) {
      console.error("[ERROR]", e);
    },

    save() {},

    load() {},

    updateFoodAmount(foodId: string, delta: number) {
      const map = new Map(this.planData[this.today].map((f) => [f.id, f]));
      const newAmount = delta + (map.get(foodId)?.amount || 0);
      if (newAmount < 0) {
        return;
      }

      const newPlan = [];
      for (const food of this.allFoods) {
        const foodInPlan = map.get(food.id);

        if (food.id === foodId && foodInPlan === undefined) {
          // new food item, does not exist in current plan
          newPlan.push({ ...food, amount: newAmount });
        } else if (food.id === foodId && foodInPlan !== undefined) {
          // new food item, already exists in current plan
          newPlan.push({ ...foodInPlan, amount: newAmount });
        } else if (food.id !== foodId && foodInPlan !== undefined) {
          // other food items in current plan
          newPlan.push(foodInPlan);
        }
      }

      this.planData[this.today] = newPlan;
      this.planData = [...this.planData];
    },

    redoPlanToday() {
      if (this.planInfo === undefined) {
        return;
      }

      this.planData[this.today] = calculateDay(this.allFoods, this.planInfo);
    },

    redoPlanAll() {
      if (this.planInfo === undefined) {
        return;
      }

      const newPlan = [];
      for (let day = 0; day < this.planInfo.daysSetpoint; day++) {
        newPlan.push(calculateDay(this.allFoods, this.planInfo));
      }
      this.planData = newPlan;
    },

    nextDay() {
      this.today += 1;
      if (this.today >= this.planData.length) {
        this.today = this.planData.length - 1;
      }
    },

    previousDay() {
      this.today -= 1;
      if (this.today < 0) {
        this.today = 0;
      }
    },
  },
});
