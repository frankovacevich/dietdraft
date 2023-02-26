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
  eaten?: boolean;
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

export function calculateDay(foodList: Food[], planInfo: PlanInfo): Food[] {
  const allFoods = [...foodList];

  const N = Math.floor(allFoods.length * 0.8);
  const shuffled = allFoods.sort(() => 0.5 - Math.random());

  const plan: Food[] = [];
  for (const food of shuffled.slice(0, N)) {
    plan.push({ ...food, amount: 1, eaten: false });
  }

  return plan;
}
