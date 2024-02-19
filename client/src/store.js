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
    const date = new Date(this.created);
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const differenceInDays = Math.floor((todayStart - dateStart) / oneDay);
    return Math.min(differenceInDays, this.days - 1);
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
    if (!json) {
      return new PlanInfo();
    }
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

export class FoodSet {
  foods = [];

  getSelectedFoods() {
    return this.foods.filter((food) => food.selected).map((food) => ({ ...food, selected: false }));
  }

  setFoods(foods) {
    const selectedFoodIds = new Set(this.getSelectedFoods().map((food) => food.id));
    foods.forEach((food) => (food.selected = selectedFoodIds.has(food.id)));
    this.foods = foods;
  }

  getSearchedFoods() {
    return this.foods;
  }

  getCategories() {
    return new Set(this.getSearchedFoods().map((food) => food.category));
  }

  getFoodsForCategory(category) {
    const foods = this.getSearchedFoods();
    return foods.filter((food) => food.category === category);
  }

  toJson() {
    return JSON.stringify({ foods: this.foods });
  }

  static fromJson(json) {
    if (!json) {
      return new FoodSet();
    }
    const obj = JSON.parse(json);
    const foodSet = new FoodSet();
    foodSet.foods = obj.foods;
    return foodSet;
  }
}

export class PlanData {
  foods = []; // [day][meal][food]

  getFoods(day, meal) {
    const foodsForDay = day >= this.foods.length ? [] : this.foods[day];
    return meal >= foodsForDay.length ? [] : foodsForDay[meal];
  }

  quantitesForDay(day) {
    if (day >= this.foods.length) {
      return { protein: 0, fat: 0, carbs: 0, calories: 0 };
    }

    const total = { protein: 0, fat: 0, carbs: 0, calories: 0 };
    this.foods[day].flat().forEach((food) => {
      total.protein += food.protein * (food.amount || 0);
      total.fat += food.fat * (food.amount || 0);
      total.carbs += food.carbs * (food.amount || 0);
    });
    total.calories = 4 * total.protein + 9 * total.fat + 4 * total.carbs;
    return total;
  }

  get quantitiesAverage() {
    const total = { protein: 0, fat: 0, carbs: 0, calories: 0 };
    this.foods.flat(2).forEach((food) => {
      total.protein += food.protein * (food.amount || 0);
      total.fat += food.fat * (food.amount || 0);
      total.carbs += food.carbs * (food.amount || 0);
    });
    total.calories = total.protein * 4 + total.fat * 9 + total.carbs * 4;

    total.calories = total.calories / this.foods.length;
    total.protein = total.protein / this.foods.length;
    total.fat = total.fat / this.foods.length;
    total.carbs = total.carbs / this.foods.length;

    return total;
  }

  get quantitiesAveragePercentages() {
    const avg = { ...this.quantitiesAverage };
    avg.protein = Math.round((100 * avg.protein * 4) / avg.calories);
    avg.fat = Math.round((100 * avg.fat * 9) / avg.calories);
    avg.carbs = Math.round((100 * avg.carbs * 4) / avg.calories);
    avg.calories = 100;
    return avg;
  }

  get shoppingList() {
    const foodMap = new Map();
    this.foods.flat(2).forEach((food) => {
      if (foodMap.has(food.name)) {
        const newAmount = food.amount + foodMap.get(food.name).amount;
        foodMap.set(food.name, { ...food, amount: newAmount });
      } else {
        foodMap.set(food.name, { ...food });
      }
    });
    return Array.from(foodMap.values()).sort((a, b) => b.amount - a.amount);
  }

  static emptyPlan(daysCount, mealsCount) {
    const planData = new PlanData();
    for (let i = 0; i < daysCount; i++) {
      for (let m = 0; m < mealsCount; m++) {
        planData.foods.push([]);
      }
    }
    return planData;
  }

  static fromJson(json) {
    if (!json) {
      return null;
    }
    const planData = new PlanData();
    planData.foods = JSON.parse(json);
    return planData;
  }

  toJson() {
    return JSON.stringify(this.foods);
  }
}

export class AddFoodModal {
  visible = false;
  meal = 0;
  foods = [];
  searchText = "";

  get mealName() {
    return Meals[this.meal];
  }

  get searchInput() {
    return document.getElementById("searchInput");
  }

  get container() {
    return this.searchInput.parentNode.parentNode;
  }

  getSearchedFoods() {
    if (this.searchText === "") {
      return this.foods;
    }
    return this.foods.filter((food) =>
      food.name.toLowerCase().includes(this.searchText.toLowerCase()),
    );
  }

  getCategories() {
    const foods = this.getSearchedFoods();
    return new Set(foods.map((food) => food.category));
  }

  getSelectedFoods() {
    const foods = this.foods.filter((food) => food.selected);
    foods.forEach((food) => {
      food.selected = false;
      food.amount = 1;
    });
    return foods;
  }

  getFoodsForCategory(category) {
    const foods = this.getSearchedFoods();
    return foods.filter((food) => food.category === category);
  }

  open(meal, foods) {
    this.meal = meal;
    this.visible = true;
    this.foods = foods.map((food) => ({ ...food, selected: false }));
    this.searchInput.focus();
    this.container.scrollTop = 0;
  }

  close() {
    this.visible = false;
    this.searchText = "";
    return this.getSelectedFoods();
  }

  clearSearch() {
    this.searchText = "";
    this.searchInput.focus();
  }
}

export class FoodInfoModal {
  visible = false;
  food = {
    name: "",
    icon: "egg",
    description: "",
    protein: 0,
    fat: 0,
    carbs: 0,
  };

  open(food) {
    this.food = food;
    this.visible = true;
  }

  close() {
    this.visible = false;
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
      foodSet: new FoodSet(),
      planData: new PlanData(),
      planInfo: new PlanInfo(),
      day: 0,
      editMode: false,
      selectedQuantity: 0, // 0: calories, 1: protein 2: fat, 3: carbs
      //
      addFoodModal: new AddFoodModal(),
      foodInfoModal: new FoodInfoModal(),
      //
      planInfoInput: new PlanInfoInput(new PlanInfo()),
      calculating: false,
    };
  },

  getters: {
    meals() {
      return Meals;
    },

    weekDay() {
      const oneDay = 24 * 60 * 60 * 1000;
      const date = new Date(this.planInfo.created + this.day * oneDay);
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return daysOfWeek[date.getDay()];
    },

    todaysQuantities() {
      return this.planData.quantitesForDay(this.day);
    },
  },

  actions: {
    save() {
      localStorage.setItem("planData", this.planData.toJson());
      localStorage.setItem("planInfo", this.planInfo.toJson());
      localStorage.setItem("foodSet", this.foodSet.toJson());
    },

    load() {
      // Get plan info
      const planInfoJson = localStorage.getItem("planInfo");
      this.planInfo = PlanInfo.fromJson(planInfoJson);
      this.planInfoInput = new PlanInfoInput(this.planInfo);
      this.day = this.planInfo.currentDay;

      // Get plan data
      const planDataJson = localStorage.getItem("planData");
      const planData = PlanData.fromJson(planDataJson);
      this.planData = planData || PlanData.emptyPlan(this.planInfo.days, this.meals.length);

      // Get all foods
      const foodSet = localStorage.getItem("foodSet");
      this.foodSet = FoodSet.fromJson(foodSet);
      const url = "https://raw.githubusercontent.com/frankovacevich/dietdraft/master";
      fetch(url + "/client/public/data.json")
        .then((response) => response.json())
        .then((foods) => this.foodSet.setFoods(foods));
    },

    goToPreviousDay() {
      this.day = Math.max(0, this.day - 1);
    },

    goToNextDay() {
      this.day = Math.min(this.planInfo.days - 1, this.day + 1);
    },

    toggleEditMode() {
      this.editMode = !this.editMode;
    },

    recalculateToday() {
      // Calculate targets based on what's already been eaten
      const totalEaten = { protein: 0, fat: 0, carbs: 0 };
      this.planData.foods[this.day].flat().forEach((food) => {
        if (food.selected) {
          totalEaten.protein += food.protein * (food.amount || 0);
          totalEaten.fat += food.fat * (food.amount || 0);
          totalEaten.carbs += food.carbs * (food.amount || 0);
        }
      });

      const calculator = new Calculator(
        this.foodSet.getSelectedFoods(),
        this.planInfo.calculationMethod,
        this.planInfo.protein - totalEaten.protein,
        this.planInfo.fat - totalEaten.fat,
        this.planInfo.carbs - totalEaten.carbs,
      );

      const newPlan = calculator.calculateDay();
      for (let m = 0; m < newPlan.length; m++) {
        const eatenFoods = this.planData.getFoods(this.day, m).filter((food) => food.selected);
        newPlan[m] = [...eatenFoods, ...newPlan[m]];
      }

      this.planData.foods[this.day] = newPlan;
      this.save();
    },

    generateNewPlan() {
      this.calculating = true;
      this.planInfo.protein = this.planInfoInput.protein;
      this.planInfo.fat = this.planInfoInput.fat;
      this.planInfo.carbs = this.planInfoInput.carbs;
      this.planInfo.days = this.planInfoInput.days;
      this.planInfo.calculationMethod = this.planInfoInput.calculationMethod;

      const calculator = new Calculator(
        this.foodSet.getSelectedFoods(),
        this.planInfo.calculationMethod,
        this.planInfo.protein,
        this.planInfo.fat,
        this.planInfo.carbs,
      );

      this.planData.foods = calculator.calculateDays(this.planInfo.days);
      this.planInfo.created = new Date().getTime();
      this.day = 0;

      this.save();
      this.calculating = false;
    },

    clearToday() {
      const newPlan = [];
      for (const meal of this.planData.foods[this.day]) {
        newPlan.push(meal.filter((food) => food.selected));
      }
      this.planData.foods[this.day] = newPlan;
      this.save();
    },

    changeFoodSelected(food) {
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
      this.planData.foods[this.day][meal].splice(index, 1);
      this.save();
    },

    addFoodFromModal() {
      if (!this.addFoodModal.visible) {
        return;
      }
      const meal = this.addFoodModal.meal;
      const foods = this.addFoodModal.close();
      this.planData.foods[this.day][meal].push(...foods);
    },
  },
});
