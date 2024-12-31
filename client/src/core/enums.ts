export enum CalculationMethod {
  ALL = "All",
  PROTEIN = "Protein",
  FAT = "Fat",
  CARBS = "Carbs",
  CALORIES = "Calories",
}

export type CalculationMethodKey = keyof typeof CalculationMethod;

export enum Meal {
  BREAKFAST = "Breakfast",
  LUNCH = "Lunch",
  DINNER = "Dinner",
  SNACK = "Snack",
}

export const MEALS = [Meal.BREAKFAST, Meal.LUNCH, Meal.DINNER, Meal.SNACK];
