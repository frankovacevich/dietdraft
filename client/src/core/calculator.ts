import { PlanInfo } from "./plan-info";
import { CalculationMethod, Meal, MEALS } from "./enums";
import { Food } from "./food";
import { Macros } from "./macros";

export class Calculator {
  private readonly POPULATION_SIZE = 100;
  private readonly SURVIVAL_RATE = 0.3;
  private readonly MAX_ITERATIONS = 10;

  private cachedFoodsPerMeal = new Map<Meal, Food[]>();

  foods!: Food[];
  calculationMethod!: CalculationMethod;
  target!: Macros;

  constructor(foods: Food[], calculationMethod: CalculationMethod, target: Macros) {
    this.foods = foods.map((food) => food.copy());
    this.calculationMethod = calculationMethod;

    target.protein = Math.max(0, target.protein);
    target.fat = Math.max(0, target.fat);
    target.carbs = Math.max(0, target.carbs);
    this.target = target;
  }

  private calculateError(plan: Food[][]): number {
    const macros = new Macros();
    for (const mealPlan of plan) {
      for (const food of mealPlan) {
        macros.protein += food.protein * food.amount;
        macros.fat += food.fat * food.amount;
        macros.carbs += food.carbs * food.amount;
      }
    }

    const errorCalculator = ErrorCalculatorFactory.forCalculationMethod(this.calculationMethod);
    return errorCalculator.calculate(macros, this.target);
  }

  private foodsForMeal(meal: Meal): Food[] {
    const cachedValue = this.cachedFoodsPerMeal.get(meal);
    if (cachedValue !== undefined) {
      return cachedValue;
    }
    MEALS.forEach((m) => this.cachedFoodsPerMeal.set(m, []));
    for (const food of this.foods) {
      food.meals.forEach((m) => this.cachedFoodsPerMeal.get(m)?.push(food));
    }
    return this.cachedFoodsPerMeal.get(meal)!;
  }

  private createRandomMeal(meal: Meal): Food[] {
    const foodCounts = [1, 2, 3, 4, 5];
    const foodCount = 1 + Math.floor(Math.random() * foodCounts.length);
    const foods = getRandomSubsample(this.foodsForMeal(meal), foodCount);
    return foods.map((food) => food.copy());
  }

  private createRandomPopulation(): Food[][][] {
    /* Generates a list with multiple meal plans for a day */
    const plans = [];
    for (let i = 0; i < this.POPULATION_SIZE; i++) {
      const plan = [];
      for (const meal of MEALS) {
        plan.push(this.createRandomMeal(meal));
      }
      plans.push(plan);
    }
    return plans;
  }

  private sortPlans(plans: Food[][][]) {
    return plans.sort((a, b) => this.calculateError(a) - this.calculateError(b));
  }

  private extinctionAndEvolution(plans: Food[][][]): Food[][][] {
    /* Use an evolutionary algorithm to generate more plans */
    plans = this.sortPlans(plans);

    // Extinction: remove the ones with high error
    const survivalRate = 0.1;
    const survivorsCount = Math.ceil(survivalRate * plans.length);
    plans = plans.slice(0, survivorsCount);

    // Evolution: randomly mutate some meals
    const newPlans = [];
    newPlans.push(...plans);
    while (newPlans.length < this.POPULATION_SIZE) {
      const planIdx = Math.floor(Math.random() * plans.length);
      const mealIdx = Math.floor(Math.random() * MEALS.length);
      const newPlan = plans[planIdx].map((m) => [...m]);
      newPlan[mealIdx] = this.createRandomMeal(MEALS[mealIdx]);
      newPlans.push(newPlan);
    }

    return newPlans;
  }

  calculateSingleDay(): Food[][] {
    let plans = this.createRandomPopulation();
    for (let i = 0; i < this.MAX_ITERATIONS; i++) {
      plans = this.extinctionAndEvolution(plans);
    }
    plans = this.sortPlans(plans);
    return plans[0];
  }

  calculatePlan(days: number): Food[][][] {
    const foodPlan = [];
    for (let i = 0; i < days; i++) {
      foodPlan.push(this.calculateSingleDay());
    }
    return foodPlan;
  }

  static fromPlanInfo(foods: Food[], planInfo: PlanInfo) {
    return new Calculator(foods, planInfo.calculationMethod, planInfo.macros);
  }
}

/*
 * Helper classes and functions
 */

interface ErrorCalculator {
  calculate(values: Macros, target: Macros): number;
}

class AllErrorCalculator implements ErrorCalculator {
  calculate(values: Macros, target: Macros): number {
    const e1 = values.protein - target.protein;
    const e2 = values.fat - target.fat;
    const e3 = values.carbs - target.carbs;
    return e1 ** 2 + e2 ** 2 + e3 ** 2;
  }
}

class ProteinErrorCalculator implements ErrorCalculator {
  calculate(values: Macros, target: Macros): number {
    const e1 = values.protein - target.protein;
    const e2 = values.calories - target.calories;
    return e1 ** 2 + e2 ** 2;
  }
}

class FatErrorCalculator implements ErrorCalculator {
  calculate(values: Macros, target: Macros): number {
    const e1 = values.fat - target.fat;
    const e2 = values.calories - target.calories;
    return e1 ** 2 + e2 ** 2;
  }
}

class CarbsPercentageErrorCalculator implements ErrorCalculator {
  calculate(values: Macros, target: Macros): number {
    const e1 = values.carbs - target.carbs;
    const e2 = values.calories - target.calories;
    return e1 ** 2 + e2 ** 2;
  }
}

class CaloriesPercentageErrorCalculator implements ErrorCalculator {
  calculate(values: Macros, target: Macros): number {
    return (values.calories - target.calories) ** 2;
  }
}

class ErrorCalculatorFactory {
  static forCalculationMethod(calculationMethod: CalculationMethod): ErrorCalculator {
    switch (calculationMethod) {
      case CalculationMethod.ALL:
        return new AllErrorCalculator();
      case CalculationMethod.CALORIES:
        return new CaloriesPercentageErrorCalculator();
      case CalculationMethod.PROTEIN:
        return new ProteinErrorCalculator();
      case CalculationMethod.CARBS:
        return new CarbsPercentageErrorCalculator();
      case CalculationMethod.FAT:
        return new FatErrorCalculator();
      default:
        throw new Error("Invalid calculation method");
    }
  }
}

function getRandomSubsample(list: any[], sampleSize: number): any[] {
  /* Shuffles the list and returns the first sampleSize elements */

  if (sampleSize <= 0) {
    return [];
  }
  if (sampleSize > list.length) {
    sampleSize = list.length;
  }

  const shuffledList = [...list];
  for (let i = shuffledList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
  }

  return shuffledList.slice(0, sampleSize);
}
