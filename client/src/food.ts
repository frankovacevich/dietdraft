export enum CalculationMethod {
  ALL = "all",
  PROTEIN = "protein",
  FAT = "fat",
  CARBS = "carbs",
}

export interface Food {
  id: string;
  name: string;
  icon: string;
  description?: string;
  protein: number;
  fat: number;
  carbs: number;
  price?: number;
}

export interface PlanItem {
  foodId: string;
  amount?: number;
  eaten?: boolean;
}

export interface PlanInfo {
  created?: number; // timestamp in ms
  proteinSetpoint?: number;
  fatSetpoint?: number;
  carbsSetpoint?: number;
  daysSetpoint?: number;
  calculationMethod?: CalculationMethod;
  calculationError?: number;
}

export interface PlanTotal {
  protein: number;
  fat: number;
  carbs: number;
}
