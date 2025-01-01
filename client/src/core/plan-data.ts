import { MEALS } from "./enums";
import { Food } from "./food";
import { Macros } from "./macros";

export class PlanData {
  foodPlan!: Food[][][]; // [day][meal][food]

  private constructor() {
    this.foodPlan = [];
  }

  getFoods(day: number, meal: number): Food[] {
    const foodsForDay = day >= this.foodPlan.length ? [] : this.foodPlan[day];
    return meal >= foodsForDay.length ? [] : foodsForDay[meal];
  }

  addFoods(day: number, meal: number, foods: Food[]) {
    this.foodPlan[day][meal].push(...foods);
  }

  removeFood(day: number, meal: number, index: number) {
    this.foodPlan[day][meal].splice(index, 1);
  }

  macrosForDay(day: number): Macros {
    const macros = new Macros();
    if (day >= this.foodPlan.length) {
      return macros;
    }

    this.foodPlan[day].flat().forEach((food) => {
      macros.protein += food.protein * food.amount;
      macros.fat += food.fat * food.amount;
      macros.carbs += food.carbs * food.amount;
    });

    return macros;
  }

  macrosForSelectedFoodsForDay(day: number): Macros {
    const macros = new Macros();
    this.foodPlan[day]
      .flat()
      .filter((food) => food.selected)
      .forEach((food) => {
        macros.protein += food.protein * food.amount;
        macros.fat += food.fat * food.amount;
        macros.carbs += food.carbs * food.amount;
      });
    return macros;
  }

  updateMealPlan(day: number, mealPlan: Food[][]) {
    for (let m = 0; m < mealPlan.length; m++) {
      const eatenFoods = this.foodPlan[m][day].filter((food) => food.selected);
      mealPlan[m] = [...eatenFoods, ...mealPlan[m]];
    }
    this.foodPlan[day] = mealPlan;
  }

  get macrosAverage(): Macros {
    const macros = new Macros();
    this.foodPlan.flat(2).forEach((food) => {
      macros.protein += food.protein * food.amount;
      macros.fat += food.fat * food.amount;
      macros.carbs += food.carbs * food.amount;
    });

    macros.protein = macros.protein / this.foodPlan.length;
    macros.fat = macros.fat / this.foodPlan.length;
    macros.carbs = macros.carbs / this.foodPlan.length;
    return macros;
  }

  // TODO Remove
  quantitiesForDay(day: number) {
    const macros = this.macrosForDay(day);
    return {
      protein: macros.protein,
      fat: macros.fat,
      carbs: macros.carbs,
      calories: macros.calories,
    };
  }

  // TODO Remove
  get quantitiesAverage() {
    const macros = this.macrosAverage;
    return {
      protein: macros.protein,
      fat: macros.fat,
      carbs: macros.carbs,
      calories: macros.calories,
    };
  }

  // TODO Remove
  get quantitiesAveragePercentages() {
    const macros = this.macrosAverage;
    return {
      protein: macros.proteinPercentage,
      fat: macros.fatPercentage,
      carbs: macros.carbsPercentage,
      calories: macros.caloriesPercentage,
    };
  }

  get shoppingList(): Food[] {
    const foodMap = new Map<string, Food>();

    this.foodPlan.flat(2).forEach((food) => {
      const existingFood = foodMap.get(food.id);
      if (!existingFood) {
        foodMap.set(food.id, food.copy());
      } else {
        existingFood.amount += food.amount;
      }
    });

    return Array.from(foodMap.values()).sort((a, b) => b.amount - a.amount);
  }

  clearDay(day: number) {
    const newPlan = [];
    for (const mealPlan of this.foodPlan[day]) {
      newPlan.push(mealPlan.filter((food) => food.selected));
    }
    this.foodPlan[day] = newPlan;
  }

  static createEmptyPlan(days: number): PlanData {
    const planData = new PlanData();
    for (let i = 0; i < days; i++) {
      const dayPlan = [];
      for (let m = 0; m < MEALS.length; m++) {
        dayPlan.push([]);
      }
      planData.foodPlan.push(dayPlan);
    }
    return planData;
  }

  toJson(): string {
    return JSON.stringify({ foodPlan: this.foodPlan });
  }

  static fromJson(json: any): PlanData {
    if (!json || typeof json !== "string") {
      throw new Error("Invalid JSON");
    }

    const planData = new PlanData();
    planData.foodPlan = JSON.parse(json).foodPlan.map((a: Food[][]) =>
      a.map((b: Food[]) => b.map((c: Food) => Food.fromObj(c))),
    );
    return planData;
  }
}
