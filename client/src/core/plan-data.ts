import { Meal, MEALS } from "./enums";
import { Food } from "./food";
import { Macros } from "./macros";

export class PlanData {
  plans!: Food[][][]; // [day][meal][food]

  private constructor() {
    this.plans = [];
  }

  getFoods(day: number, meal: number): Food[] {
    const foodsForDay = day >= this.plans.length ? [] : this.plans[day];
    return meal >= foodsForDay.length ? [] : foodsForDay[meal];
  }

  addFoods(day: number, meal: number, foods: Food[]) {
    this.plans[day][meal].push(...foods);
  }

  removeFood(day: number, meal: number, index: number) {
    this.plans[day][meal].splice(index, 1);
  }

  macrosForDay(day: number): Macros {
    return Macros.fromList(this.plans[day].flat().map((food) => food.macrosTimesAmount));
  }

  eatenFoodsForDay(day: number): Food[] {
    return this.plans[day].flat().filter((food) => food.selected);
  }

  macrosForEatenFoodsForDay(day: number): Macros {
    return Macros.fromList(this.eatenFoodsForDay(day).map((food) => food.macrosTimesAmount));
  }

  eatenMealsForDay(day: number): Meal[] {
    const meals: Meal[] = [];
    for (let m = 0; m < MEALS.length; m++) {
      if (this.plans[day][m].some((food) => food.selected)) {
        meals.push(MEALS[m]);
      }
    }
    return meals;
  }

  updateMealPlan(day: number, plan: Food[][]) {
    for (let m = 0; m < plan.length; m++) {
      const eatenFoods = this.plans[day][m].filter((food) => food.selected);
      plan[m] = [...eatenFoods, ...plan[m]];
    }
    this.plans[day] = plan;
  }

  get macrosAverage(): Macros {
    const macros = Macros.fromList(this.plans.flat(2).map((food) => food.macrosTimesAmount));
    macros.protein = Math.round(macros.protein / this.plans.length);
    macros.fat = Math.round(macros.fat / this.plans.length);
    macros.carbs = Math.round(macros.carbs / this.plans.length);
    return macros;
  }

  get shoppingList(): Food[] {
    const foodMap = new Map<string, Food>();

    this.plans.flat(2).forEach((food) => {
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
    for (const plan of this.plans[day]) {
      newPlan.push(plan.filter((food) => food.selected));
    }
    this.plans[day] = newPlan;
  }

  static createEmptyPlan(days: number): PlanData {
    const planData = new PlanData();
    for (let i = 0; i < days; i++) {
      const dayPlan = [];
      for (let m = 0; m < MEALS.length; m++) {
        dayPlan.push([]);
      }
      planData.plans.push(dayPlan);
    }
    return planData;
  }

  toJson(): string {
    return JSON.stringify({ plans: this.plans });
  }

  static fromJson(json: any): PlanData {
    if (!json || typeof json !== "string") {
      throw new Error("Invalid JSON");
    }

    const planData = new PlanData();
    planData.plans = JSON.parse(json).plans.map((a: Food[][]) =>
      a.map((b: Food[]) => b.map((c: Food) => Food.fromObj(c))),
    );
    return planData;
  }
}
