import {
  defaultPlanInfo,
  type Food,
  type PlanInfo,
  type PlanTotal,
} from "./food";
import { calculateDay } from "./food";
import { defineStore } from "pinia";
import DATA from "./data";

export const mainStore = defineStore("mainStore", {
  state: () => {
    return {
      allFoods: DATA as Food[],
      planData: [] as Food[][],
      planInfo: undefined as PlanInfo | undefined,
      today: 0,
      modal_food_info: undefined as Food | undefined,
    };
  },

  getters: {
    maxFoodCalories(): number {
      const calcCalories = (food: Food) => {
        return food.protein * 4 + food.fat * 9 + food.carbs * 4;
      };

      return Math.max(...this.allFoods.map(calcCalories));
    },

    todaysFoods(): Food[] {
      return this.planData[this.today];
    },

    todaysFoodsExtended(): Food[] {
      const map = new Map<string, number>(); // id: count
      for (const food of this.planData[this.today]) {
        map.set(food.id, (map.get(food.id) || 0) + (food.amount || 0));
      }
      return this.allFoods.map((f) => ({ ...f, amount: map.get(f.id) }));
    },

    todaysQuantities(): PlanTotal {
      const total = { protein: 0, fat: 0, carbs: 0 };
      for (const food of this.planData[this.today]) {
        total.protein += food.protein * (food.amount || 0);
        total.fat += food.fat * (food.amount || 0);
        total.carbs += food.carbs * (food.amount || 0);
      }
      return total;
    },

    todaysQuantitiesSelected(): PlanTotal {
      const total = { protein: 0, fat: 0, carbs: 0 };
      for (const food of this.planData[this.today]) {
        if (!food.selected) {
          continue;
        }
        total.protein += food.protein * (food.amount || 0);
        total.fat += food.fat * (food.amount || 0);
        total.carbs += food.carbs * (food.amount || 0);
      }
      return total;
    },

    allPlanQuantities(): PlanTotal {
      const total = { protein: 0, fat: 0, carbs: 0 };
      for (let day = 0; day < this.planData.length; day++) {
        for (const food of this.planData[day]) {
          total.protein += food.protein * (food.amount || 0);
          total.fat += food.fat * (food.amount || 0);
          total.carbs += food.carbs * (food.amount || 0);
        }
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

    save() {
      localStorage.setItem("planData", JSON.stringify(this.planData));

      if (this.planInfo !== undefined) {
        localStorage.setItem("planInfo", JSON.stringify(this.planInfo));
      }
    },

    load() {
      const planData = localStorage.getItem("planData");
      this.planData = planData ? JSON.parse(planData) : [[]];

      const planInfo = localStorage.getItem("planInfo");
      if (planInfo) {
        this.planInfo = JSON.parse(planInfo);
      } else {
        this.planInfo = { ...defaultPlanInfo, created: new Date().getTime() };
      }
    },

    updateFoodAmount(food: Food, delta: number) {
      const newAmount = (food.amount || 0) + delta;
      if (newAmount < 0) {
        return;
      }

      const map = new Map<string, number>(); // id: count
      for (const food of this.planData[this.today]) {
        map.set(food.id, (map.get(food.id) || 0) + (food.amount || 0));
      }

      map.set(food.id, newAmount);
      const newPlan = [];
      for (const item of this.allFoods) {
        const amount = map.get(item.id);
        if (amount !== undefined && amount !== 0) {
          newPlan.push({ ...item, amount: amount });
        }
      }

      this.planData[this.today] = newPlan;
      this.planData = [...this.planData];
      this.save();
    },

    toggleSelected(food: Food) {
      food.selected = food.selected !== undefined ? !food.selected : true;
      this.save();
    },

    redoPlanToday() {
      if (this.planInfo === undefined) {
        return;
      }

      this.planData[this.today] = calculateDay(this.allFoods, this.planInfo);
      this.save();
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
      this.save();
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

    openModalFoodInfo(food: Food) {
      this.modal_food_info = food;
    },

    closeModals() {
      this.modal_food_info = undefined;
    },
  },
});
