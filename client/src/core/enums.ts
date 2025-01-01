/*
 * Helper functions
 */
export function getEnumKey(e: any, v: string): string {
  return Object.keys(e)[Object.values(e).indexOf(v)];
}

export function getEnumValue(e: any, v: string) {
  return e[v];
}

/*
 * Enums
 */
export enum CalculationMethod {
  ALL = "All",
  PROTEIN = "Optimize Protein",
  FAT = "Optimize Fat",
  CARBS = "Optimize Carbs",
  CALORIES = "Optimize Calories",
}

export enum Meal {
  BREAKFAST = "Breakfast",
  LUNCH = "Lunch",
  DINNER = "Dinner",
  SNACK = "Snack",
}

/*
 * Lists
 */
export const MEALS = [Meal.BREAKFAST, Meal.LUNCH, Meal.SNACK, Meal.DINNER];

export const CALCULATION_METHODS = [
  CalculationMethod.ALL,
  CalculationMethod.CALORIES,
  CalculationMethod.PROTEIN,
  CalculationMethod.FAT,
  CalculationMethod.CARBS,
];
