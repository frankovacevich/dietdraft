import { PlanInfo } from "./plan-info";
import { CalculationMethod, MEALS } from "./enums";
import { Food } from "./food";
import { Macros } from "./macros";

export class Calculator {
  private readonly POPULATION_SIZE = 100;
  private readonly SURVIVAL_RATE = 0.3;
  private readonly MAX_ITERATIONS = 10;

  foods!: Food[];
  calculationMethod!: CalculationMethod;
  target!: Macros;

  private foodsPerMeal: Map<number, Food[]> | null = null;

  private calculateError(plan: Food[][]): number {
    const macros = new Macros();
    for (const mealPlan of plan) {
      for (const food of mealPlan) {
        macros.protein += food.protein * food.amount;
        macros.fat += food.fat * food.amount;
        macros.carbs += food.carbs * food.amount;
      }
    }

    return 0;
  }

  private getFoodsPerMeal(): Map<number, Food[]> {
    if (this.foodsPerMeal !== null) {
      return this.foodsPerMeal;
    }

    const foodsPerMeal = new Map<number, Food[]>();
    for (const meal of MEALS) {
      foodsPerMeal.set(
        meal,
        this.foods.filter((food) => food.meal === meal),
      );
    }
    this._foodsPerMeal = foodsPerMeal;
    return foodsPerMeal;
  }

  private createRandomMeal(meal: number): Food[] {
    const foodCounts = [1, 2, 3, 4, 5];
    const foodCount = 1 + Math.floor(Math.random() * foodCounts.length);
    const foods = getRandomSubsample(this.foodsPerMeal[mealIdx], foodCount);

    return foods.map((food) => food.copy());
  }

  private createRandomPopulation(): Food[][][] {
    /* Generates a list with multiple meal plans for a day */
    const plans = [];
    for (let i = 0; i < this.POPULATION_SIZE; i++) {
      const plan = [];
      for (let m = 0; m < MEALS.length; m++) {
        plan.push(this.createRandomMeal(m));
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
      newPlan[mealIdx] = this.createRandomMeal(mealIdx);
      newPlans.push(newPlan);
    }

    return newPlans;
  }

  constructor(foods: Food[], calculationMethod: CalculationMethod, target: Macros) {
    this.foods = foods.map((food) => food.copy());
    this.calculationMethod = calculationMethod;

    target.protein = Math.max(0, target.protein);
    target.fat = Math.max(0, target.fat);
    target.carbs = Math.max(0, target.carbs);
    this.target = target;
  }

  static fromPlanInfo(foods: Food[], planInfo: PlanInfo) {
    return new Calculator(foods, planInfo.calculationMethod, planInfo.macros);
  }

  calculateDay() {
    let plans = this.createRandomPopulation();
    for (let i = 0; i < this.MAX_ITERATIONS; i++) {
      plans = this.extinctionAndEvolution(plans);
    }
    plans = this.sortPlans(plans);
    return plans[0];
  }

  calculateDays(days) {
    const plans = [];
    for (let i = 0; i < days; i++) {
      plans.push(this.calculateDay());
    }
    return plans;
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
