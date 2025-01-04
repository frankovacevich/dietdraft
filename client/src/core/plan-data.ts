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
    if (day >= this.foodPlan.length) {
      return new Macros();
    }
    return Macros.fromList(this.foodPlan[day].flat().map((food) => food.macrosTimesAmount));
  }

  macrosForSelectedFoodsForDay(day: number): Macros {
    const foods = this.foodPlan[day].flat().filter((food) => food.selected);
    return Macros.fromList(foods.map((food) => food.macrosTimesAmount));
  }

  updateMealPlan(day: number, mealPlan: Food[][]) {
    for (let m = 0; m < mealPlan.length; m++) {
      const eatenFoods = this.foodPlan[day][m].filter((food) => food.selected);
      mealPlan[m] = [...eatenFoods, ...mealPlan[m]];
    }
    this.foodPlan[day] = mealPlan;
  }

  get macrosAverage(): Macros {
    const macros = Macros.fromList(this.foodPlan.flat(2).map((food) => food.macrosTimesAmount));
    macros.protein = Math.round(macros.protein / this.foodPlan.length);
    macros.fat = Math.round(macros.fat / this.foodPlan.length);
    macros.carbs = Math.round(macros.carbs / this.foodPlan.length);
    return macros;
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
