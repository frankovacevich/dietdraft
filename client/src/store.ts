import { defineStore } from "pinia";
import { FoodSet } from "./core/food-set";
import { PlanData } from "./core/plan-data";
import { PlanInfo } from "./core/plan-info";
import { AddFoodModal } from "./core/add-food-modal";
import { FoodInfoModal } from "./core/food-info-modal";
import { PlanInfoInput } from "./core/plan-info-input";
import { Meal, MEALS } from "./core/enums";
import { Macros } from "./core/macros";
import { DataFetcher } from "./core/data-fetcher";
import { Food } from "./core/food";
import { Calculator } from "./core/calculator";
import { EditFoodModal } from "./core/edit-food-modal";

export const mainStore = defineStore("mainStore", {
  state: () => {
    return {
      foodSet: FoodSet.default(),
      planInfo: PlanInfo.default(),
      planData: PlanData.createEmptyPlan(PlanInfo.DEFAULT_DAYS),

      day: 0,
      editMode: true,
      selectedQuantity: 0, // 0: calories, 1: protein 2: fat, 3: carbs

      addFoodModal: AddFoodModal.create(),
      foodInfoModal: FoodInfoModal.create(),
      editFoodModal: EditFoodModal.create(),

      planInfoInput: PlanInfoInput.default(),
      calculating: false,
    };
  },

  getters: {
    mealNames(): string[] {
      return MEALS.map((m) => m.valueOf());
    },

    selectedDayName(): string {
      const dayMs = 24 * 60 * 60 * 1000;
      const date = new Date(this.planInfo.created.getTime() + this.day * dayMs);
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return daysOfWeek[date.getDay()];
    },

    selectedDayMacros(): Macros {
      return this.planData.macrosForDay(this.day);
    },
  },

  actions: {
    save() {
      DataFetcher.saveFoodSet(this.foodSet);
      DataFetcher.savePlanData(this.planData);
      DataFetcher.savePlanInfo(this.planInfo);
    },

    load() {
      this.planInfo = DataFetcher.getPlanInfo();
      this.planData = DataFetcher.getPlanData(this.planInfo.days);
      this.foodSet = DataFetcher.getFoodSet();
      if (this.foodSet.isEmpty) {
        DataFetcher.fetchDefaultFoods().then((foods) => this.foodSet.setFoods(foods));
      }
      this.planInfoInput = PlanInfoInput.fromPlanInfo(this.planInfo);
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

    clearSelectedDay() {
      this.planData.clearDay(this.day);
      this.save();
    },

    recalculateToday() {
      const calculator = Calculator.create();
      calculator.setCalculationMethod(this.planInfo.calculationMethod);

      // Don't recalculate the meals that have been eaten
      for (const meal of this.planData.eatenMealsForDay(this.day)) {
        calculator.skipMeal(meal);
      }

      // Adjust the target to account for the foods that have been eaten
      const totalEaten = this.planData.macrosForEatenFoodsForDay(this.day);
      const targets = new Macros(
        this.planInfo.protein - totalEaten.protein,
        this.planInfo.fat - totalEaten.fat,
        this.planInfo.carbs - totalEaten.carbs,
      );
      calculator.setTarget(targets);

      // Use shopping list to calculate the plan if there are enough foods
      const shoppingList = this.planData.shoppingList;
      if (shoppingList.length > this.foodSet.length * calculator.initialSubsample) {
        calculator.setFoods(shoppingList);
        calculator.initialSubsample = 1;
      } else {
        calculator.setFoods(this.foodSet.getFoods());
      }

      // Create and save
      const newPlan = calculator.calculateSingleDay();
      this.planData.updateMealPlan(this.day, newPlan);
      this.save();
    },

    generateNewPlan() {
      this.calculating = true;
      this.planInfo = this.planInfoInput.toPlanInfo();

      const calculator = Calculator.fromPlanInfo(this.foodSet.getFoods(), this.planInfo);
      const newPlan = calculator.calculatePlan(this.planInfo.days);
      this.planData.foodPlan = newPlan;
      this.day = 0;

      this.save();
      this.calculating = false;
    },

    clearPlan() {
      this.planData = PlanData.createEmptyPlan(this.planInfo.days);
      this.save();
    },

    changeFoodSelected(food: Food) {
      food.toggleSelected();
      this.save();
    },

    changeFoodAmount(food: Food) {
      food.increaseAmount();
      this.save();
    },

    removeFood(meal: number, index: number) {
      this.planData.removeFood(this.day, meal, index);
      this.save();
    },

    foodDragStart() {},

    foodDragEnd() {},

    addFoodFromModal() {
      if (!this.addFoodModal.visible) {
        return;
      }
      const meal = this.addFoodModal.meal;
      const foods = this.addFoodModal.close();
      this.planData.addFoods(this.day, meal, foods);
      this.save();
    },

    saveAndCloseEditFoodModal() {
      this.editFoodModal.saveAndClose();
      this.save();
    },

    deleteFoodFromEditFoodModal() {
      this.foodSet.deleteFood(this.editFoodModal.food);
      this.editFoodModal.close();
      this.save();
    },

    addNewFood() {
      const newFood = this.foodSet.addNewFood();
      this.editFoodModal.open(newFood);
    },
  },
});
