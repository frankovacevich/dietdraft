export function getEnumKey(e: any, v: string): string {
  return Object.keys(e)[Object.values(e).indexOf(v)];
}

export function getEnumValue(e: any, v: string) {
  return e[v];
}

export enum CalculationMethod {
  ALL = "All",
  PROTEIN = "Optimize Protein",
  FAT = "Optimize Fat",
  CARBS = "Optimize Carbs",
  CALORIES = "Optimize Calories",
}

export type CalculationMethodKey = keyof typeof CalculationMethod;

export enum Meal {
  BREAKFAST = "Breakfast",
  LUNCH = "Lunch",
  DINNER = "Dinner",
  SNACK = "Snack",
}

export const MEALS = [Meal.BREAKFAST, Meal.LUNCH, Meal.DINNER, Meal.SNACK];
