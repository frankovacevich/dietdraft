import { defineStore } from "pinia";
import { Calculator, CalculationMethods } from "./calculator";

/*
Classes
*/
export class Food {
  id;
  name;
  icon;
  description;
  protein;
  fat;
  carbs;
  category;

  get calories() {
    return this.protein * 4 + this.fat * 9 + this.carbs * 4;
  }
}

export class PlanInfo {
  created = new Date().getTime();
  protein = 110;
  fat = 105;
  carbs = 100;
  days = 1;
  calculationMethod = CalculationMethods.all;

  get calories() {
    return this.protein * 4 + this.fat * 9 + this.carbs * 4;
  }

  get currentDay() {
    const now = new Date().getTime();
    return Math.floor((now - this.created) / (24 * 60 * 60 * 1000));
  }

  get percentages() {
    return {
      protein: Math.round((100 * this.protein * 4) / this.calories),
      fat: Math.round((100 * this.fat * 9) / this.calories),
      carbs: Math.round((100 * this.carbs * 4) / this.calories),
      calories: 100,
    };
  }

  toJson() {
    return JSON.stringify({
      created: this.created,
      protein: this.protein,
      fat: this.fat,
      carbs: this.carbs,
      days: this.days,
      calculationMethod: this.calculationMethod,
    });
  }

  static fromJson(json) {
    const obj = JSON.parse(json);
    const planInfo = new PlanInfo();
    planInfo.created = obj.created;
    planInfo.protein = obj.protein;
    planInfo.fat = obj.fat;
    planInfo.carbs = obj.carbs;
    planInfo.days = obj.days;
    planInfo.calculationMethod = obj.calculationMethod;
    return planInfo;
  }
}

export class AddFoodModal {
  visible = false;
  meal = 0;
  foods = [];

  get foodCategores() {
    return new Set(this.foods.map((food) => food.category));
  }

  get mealName() {
    return Meals[this.meal];
  }

  getSelectedFoods() {
    const foods = this.foods.filter((food) => food.selected);
    foods.forEach((food) => {
      food.selected = false;
      food.amount = 1;
    });
    return foods;
  }

  getFoodsByCategory(category) {
    return this.foods.filter((food) => food.category === category);
  }

  open(meal, foods) {
    this.meal = meal;
    this.visible = true;
    this.foods = foods.map((food) => ({ ...food }));
  }

  close() {
    this.visible = false;
    return this.getSelectedFoods();
  }
}

export class PlanInfoInput {
  constructor(planInfo) {
    this.protein = planInfo.protein;
    this.fat = planInfo.fat;
    this.carbs = planInfo.carbs;
    this.days = planInfo.days;
    this.calculationMethod = planInfo.calculationMethod;
  }

  get calories() {
    return this.protein * 4 + this.fat * 9 + this.carbs * 4;
  }

  get percentages() {
    return {
      protein: Math.round((100 * this.protein * 4) / this.calories),
      fat: Math.round((100 * this.fat * 9) / this.calories),
      carbs: Math.round((100 * this.carbs * 4) / this.calories),
      calories: 100,
    };
  }
}

export const Meals = ["breakfast", "snack", "lunch", "dinner"];

/*
Store
*/
export const mainStore = defineStore("mainStore", {
  state: () => {
    return {
      allFoods: [],
      planFoods: [],
      planInfo: new PlanInfo(),
      day: 0,
      editMode: false,
      selectedQuantity: 0,
      //
      addFoodModal: new AddFoodModal(),
      //
      planInfoInput: new PlanInfoInput(new PlanInfo()),
      calculating: false,
    };
  },

  getters: {
    meals() {
      return Meals;
    },

    todaysFoods() {
      return this.planFoods[this.day];
    },

    todayIsFirstDay() {
      return this.day === 0;
    },

    todayIsLastDay() {
      return this.day === this.planInfo.days - 1;
    },

    todaysQuantities() {
      const total = { protein: 0, fat: 0, carbs: 0 };
      for (const meal of this.todaysFoods) {
        for (const food of meal) {
          total.protein += food.protein * (food.amount || 0);
          total.fat += food.fat * (food.amount || 0);
          total.carbs += food.carbs * (food.amount || 0);
        }
      }
      return total;
    },

    planFoodsAverages() {
      const total = { protein: 0, fat: 0, carbs: 0, calories: 0 };
      for (let day = 0; day < this.planFoods.length; day++) {
        for (const meal of this.planFoods[day]) {
          for (const food of meal) {
            total.protein += food.protein * (food.amount || 0);
            total.fat += food.fat * (food.amount || 0);
            total.carbs += food.carbs * (food.amount || 0);
          }
        }
      }

      total.calories = total.protein * 4 + total.fat * 9 + total.carbs * 4;
      total.calories = total.calories / this.planInfo.days;

      total.protein = total.protein / this.planInfo.days;
      total.fat = total.fat / this.planInfo.days;
      total.carbs = total.carbs / this.planInfo.days;

      return total;
    },

    planFoodsAveragesPercentages() {
      const avg = { ...this.planFoodsAverages };
      avg.protein = Math.round((100 * avg.protein * 4) / avg.calories);
      avg.fat = Math.round((100 * avg.fat * 9) / avg.calories);
      avg.carbs = Math.round((100 * avg.carbs * 4) / avg.calories);
      avg.calories = 100;
      return avg;
    },

    planInfoCalories() {
      return (
        this.planInfo.protein * 4 +
        this.planInfo.fat * 9 +
        this.planInfo.carbs * 4
      );
    },

    allFoodsCategories() {
      const categories = new Set(this.allFoods.map((food) => food.category));
      return Array.from(categories);
    },
  },

  actions: {
    save() {
      localStorage.setItem("planFoods", JSON.stringify(this.planFoods));

      if (this.planInfo !== null) {
        localStorage.setItem("planInfo", this.planInfo.toJson());
      }
    },

    load() {
      const obj = localStorage.getItem("planInfo");
      if (obj) {
        this.planInfo = PlanInfo.fromJson(obj);
      } else {
        this.planInfo = new PlanInfo();
      }
      this.planInfoInput = new PlanInfoInput(this.planInfo);
      this.day = this.planInfo.currentDay;

      const planFoods = localStorage.getItem("planFoods");
      if (planFoods) {
        this.planFoods = JSON.parse(planFoods);
        if (planFoods.length === this.planInfo.days) {
          this.planFoods = undefined;
        }
      }

      if (!planFoods) {
        this.planFoods = [[]];
        for (let i = 0; i < this.planInfo.days; i++) {
          for (let m = 0; m < this.meals.length; m++) {
            this.planFoods[0].push([]);
          }
        }
      }
    },

    async fetchData() {
      const response = await fetch("/data.json");
      this.allFoods = await response.json();
      this.allFoods.forEach((food) => {
        food.selected = false;
      });
    },

    goToPreviousDay() {
      if (!this.todayIsFirstDay) {
        this.day--;
      }
    },

    goToNextDay() {
      if (!this.todayIsLastDay) {
        this.day++;
      }
    },

    toggleEditMode() {
      this.editMode = !this.editMode;
    },

    newPlan() {},

    recalculateToday() {
      // Calculate targets based on what's already been eaten
      const totalEaten = { protein: 0, fat: 0, carbs: 0 };
      for (const meal of this.todaysFoods) {
        for (const food of meal) {
          if (food.selected) {
            totalEaten.protein += food.protein * (food.amount || 0);
            totalEaten.fat += food.fat * (food.amount || 0);
            totalEaten.carbs += food.carbs * (food.amount || 0);
          }
        }
      }

      const calculator = new Calculator(
        this.allFoods,
        this.planInfo.calculationMethod,
        this.planInfo.protein - totalEaten.protein,
        this.planInfo.fat - totalEaten.fat,
        this.planInfo.carbs - totalEaten.carbs
      );

      const newPlan = calculator.calculateDay();
      for (let m = 0; m < newPlan.length; m++) {
        const eatenFoods = this.todaysFoods[m].filter((food) => food.selected);
        newPlan[m] = [...eatenFoods, ...newPlan[m]];
      }

      this.planFoods[this.day] = newPlan;

      this.save();
    },

    generateNewPlan() {
      this.calculating = true;

      const calculator = new Calculator(
        this.allFoods,
        this.planInfo.calculationMethod,
        this.planInfo.protein,
        this.planInfo.fat,
        this.planInfo.carbs
      );

      this.planInfo.days = this.planInfoInput.days;
      this.planInfo.calculationMethod = this.planInfoInput.calculationMethod;
      this.planInfo.created = new Date().getTime();
      this.planFoods = calculator.calculateDays(this.planInfo.days);
      this.day = 0;
      this.save();
      this.calculating = false;
    },

    clearToday() {
      const newPlan = [];
      for (const meal of this.planFoods[this.day]) {
        newPlan.push(meal.filter((food) => food.selected));
      }
      this.planFoods[this.day] = newPlan;
      this.save();
    },

    changeFoodEaten(food) {
      food.selected = !food.selected;
      this.save();
    },

    changeFoodAmount(food) {
      const nextAmountMap = {
        0.25: 0.5,
        0.5: 0.75,
        0.75: 1,
        1: 1.25,
        1.25: 1.5,
        1.5: 0.25,
      };
      food.amount = nextAmountMap[food.amount] || 1;
    },

    foodDragStart() {},

    foodDragEnd() {
      this.save();
    },

    removeFood(meal, index) {
      this.planFoods[this.day][meal].splice(index, 1);
    },

    addFoodFromModal() {
      if (!this.addFoodModal.visible) {
        return;
      }
      const meal = this.addFoodModal.meal;
      const foods = this.addFoodModal.close();
      this.planFoods[this.day][meal].push(...foods);
    },
  },
});
