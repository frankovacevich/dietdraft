import { Meal, MEALS } from "./enums";
import { Food } from "./food";

export class CalculationRule {
  meals: Set<Meal> = new Set<Meal>();
  weekDays: Set<number> = new Set<number>();
  foods: Food[] = [];

  private constructor(meals: Meal[], weekDays: number[], foods: Food[]) {
    if (meals.length === 0) {
      meals = [...MEALS];
    }
    if (weekDays.length === 0) {
      weekDays = [0, 1, 2, 3, 4, 5, 6];
    }

    this.meals = new Set(meals);
    this.weekDays = new Set(weekDays);
    this.foods = foods;
  }

  getMeal(meal: Meal, weekDay: number): Food[] | null {
    if (this.meals.has(meal) && this.weekDays.has(weekDay)) {
      return this.foods;
    }
    return null;
  }

  static create(meals: Meal[], weekDays: number[], foods: Food[]): CalculationRule {
    return new CalculationRule(meals, weekDays, foods);
  }
}
