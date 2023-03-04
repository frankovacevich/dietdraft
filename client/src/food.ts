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
  amount?: number;
  selected?: boolean;
}

export interface PlanInfo {
  created: number; // timestamp in ms
  proteinSetpoint: number;
  fatSetpoint: number;
  carbsSetpoint: number;
  daysSetpoint: number;
  calculationMethod: CalculationMethod;
  calculationError?: number;
}

export interface PlanTotal {
  protein: number;
  fat: number;
  carbs: number;
}

export const defaultPlanInfo = {
  proteinSetpoint: 110,
  fatSetpoint: 105,
  carbsSetpoint: 100,
  daysSetpoint: 1,
  calculationMethod: CalculationMethod.ALL,
};

export function calculateDay(foodList: Food[], planInfo: PlanInfo): Food[] {
  const allFoods = [...foodList];

  const N = 1;
  const shuffled = allFoods.sort(() => 0.5 - Math.random());

  const plan: Food[] = [];
  for (const food of shuffled.slice(0, N)) {
    plan.push({ ...food, amount: 1, selected: false });
    plan.push({ ...food, amount: 0.5, selected: false });
  }

  return plan;
}
