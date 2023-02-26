import type {
  CalculationMethod,
  Food,
  PlanInfo,
  PlanItem,
  PlanTotal,
} from "./food";
import DATA from "./data";
import { defineStore } from "pinia";

export const mainStore = defineStore("mainStore", {
  state: () => {
    return {
      allFoods: DATA as Food[],
      planData: [] as PlanItem[][],
      planInfo: {} as PlanInfo,
      today: 0,
    };
  },

  getters: {
    todaysPlan(): {[key: string]: PlanItem}{
      const plan: {[key: string]: PlanItem} = {};
      for(const item of this.planData[this.today]){
        plan[item.foodId] = item;
      }
      return plan;
    },

    todaysFoods(): Food[] {
      if (this.planData.length == 0) {
        return [];
      }

      return this.allFoods.filter((food) => food.id this.todaysPlan);
    },

    todaysFoodsAll(): Food[] {
      return 
    },

    todaysQuantities(): PlanTotal {
      const total = { protein: 0, fat: 0, carbs: 0 };
      for (const food of this.todaysFoods) {
        total.protein += food.protein;
        total.fat += food.fat;
        total.carbs += food.carbs;
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

    updateFoodAmount(foodId: string, delta: number) {},

    save() {},

    load() {},

    createPlan(days: number) {
      const newPlan: PlanItem[][] = [];
      const N = 4;

      for (let day = 0; day < days; day++) {
        const shuffled = this.allFoods
          .sort(() => 0.5 - Math.random())
          .slice(0, N);
        const planItem = shuffled.map((item) => ({
          foodId: item.id,
          amount: 1,
          eaten: false,
        }));
        newPlan[day] = planItem;
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
