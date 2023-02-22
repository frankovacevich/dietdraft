export interface Food {
  name: string;
  icon: string;
  description?: string;
  protein: number;
  fat: number;
  carbs: number;
  amount?: number;
}

export enum CalculationMethod {
  ALL = "all",
  PROTEIN = "protein",
  FAT = "fat",
  CARBS = "carbs",
}

export interface Plan {
  created?: number; // timestamp in ms
  proteinRequired?: number;
  fatRequired?: number;
  carbsRequired?: number;
  daysRequired?: number;
  calculationMethod?: CalculationMethod;
  calculationError?: number;
  foods?: Food[][]; // list of food for each day
}
