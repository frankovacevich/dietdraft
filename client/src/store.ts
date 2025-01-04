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
import { CalculationRule } from "./core/calculation-rule";

export const mainStore = defineStore("mainStore", {
  state: () => {
    return {
      foodSet: FoodSet.default(),
      planInfo: PlanInfo.default(),
      planData: PlanData.createEmptyPlan(PlanInfo.DEFAULT_DAYS),

      day: 0,
      editMode: false,
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
      DataFetcher.saveFoodSet(this.foodSet as FoodSet);
      DataFetcher.savePlanData(this.planData as PlanData);
      DataFetcher.savePlanInfo(this.planInfo as PlanInfo);
    },

    load() {
      this.planInfo = DataFetcher.getPlanInfo();
      this.planData = DataFetcher.getPlanData(this.planInfo.days);
      this.foodSet = DataFetcher.getFoodSet();
      if (this.foodSet.isEmpty) {
        DataFetcher.fetchDefaultFoods().then((foods) => this.foodSet.setFoods(foods));
      }
      this.planInfoInput = PlanInfoInput.fromPlanInfo(this.planInfo as PlanInfo);
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
      const totalEaten = this.planData.macrosForSelectedFoodsForDay(this.day);
      const targets = new Macros(
        this.planInfo.protein - totalEaten.protein,
        this.planInfo.fat - totalEaten.fat,
        this.planInfo.carbs - totalEaten.carbs,
      );
      const calculator = new Calculator(
        this.foodSet.getFoods(),
        this.planInfo.calculationMethod,
        targets,
        [CalculationRule.create([Meal.LUNCH], [], [this.foodSet.foods[1] as Food])],
      );
      const newPlan = calculator.calculateSingleDay();
      this.planData.updateMealPlan(this.day, newPlan);
      this.save();
    },

    generateNewPlan() {
      this.calculating = true;
      this.planInfo = this.planInfoInput.toPlanInfo();

      const targets = new Macros(this.planInfo.protein, this.planInfo.fat, this.planInfo.carbs);
      const rule = CalculationRule.create([Meal.LUNCH], [], [this.foodSet.foods[1] as Food]);
      const calculator = new Calculator(
        this.foodSet.getFoods(),
        this.planInfo.calculationMethod,
        targets,
        [rule],
      );

      const newPlan = calculator.calculatePlan(this.planInfo.days);
      this.planData.foodPlan = newPlan;
      this.day = 0;

      this.save();
      this.calculating = false;
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
      const food = this.editFoodModal.food as Food;
      this.foodSet.deleteFood(food);
      this.editFoodModal.close();
      this.save();
    },

    addNewFood() {
      const newFood = this.foodSet.addNewFood();
      this.editFoodModal.open(newFood);
    },
  },
});
