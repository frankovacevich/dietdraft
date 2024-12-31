/*
 * Helper classes and enums
 */

export const CalculationMethods = {
  all: "ALL",
  protein: "PROTEIN",
  fat: "FAT",
  carbs: "CARBS",
  calories: "CALORIES",
};

/*
 * Calculator class
 */

export class Calculator {
  POPULATION_SIZE = 100;
  SURVIVAL_RATE = 0.3;
  MAX_ITERATIONS = 10;

  constructor(
    allFoods,
    calculationMethod,
    targetProtein,
    targetFat,
    targetCarbs
  ) {
    this.allFoods = allFoods.map((food) => ({ ...food }));
    this.calculationMethod = calculationMethod;
    this.targetProtein = Math.max(targetProtein, 0);
    this.targetFat = Math.max(targetFat, 0);
    this.targetCarbs = Math.max(targetCarbs, 0);
  }

  static fromPlanInfo(allFoods, planInfo) {
    return new Calculator(
      allFoods,
      planInfo.calculationMethod,
      planInfo.protein,
      planInfo.fat,
      planInfo.carbs
    );
  }

  get targetCalories() {
    return this.targetProtein * 4 + this.targetCarbs * 4 + this.targetFat * 9;
  }

  get meals() {
    return ["b", "s", "l", "d"];
  }

  get foodsPerMeal() {
    if (this._foodsPerMeal) {
      return this._foodsPerMeal;
    }

    const foodsPerMeal = [];
    for (const meal of this.meals) {
      foodsPerMeal.push(this.allFoods.filter((food) => food[meal]));
    }
    this._foodsPerMeal = foodsPerMeal;
    return foodsPerMeal;
  }

  setTargets(protein, fat, carbs) {
    this.targetProtein = protein;
    this.targetFat = fat;
    this.targetCarbs = carbs;
  }

  calculateError(plan) {
    const total = { protein: 0, fat: 0, carbs: 0, calories: 0 };
    for (const meal of plan) {
      for (const food of meal) {
        total.protein += food.protein * (food.amount || 0);
        total.fat += food.fat * (food.amount || 0);
        total.carbs += food.carbs * (food.amount || 0);
      }
    }
    total.calories = total.protein * 4 + total.fat * 9 + total.carbs * 4;

    if (this.calculationMethod === CalculationMethods.all) {
      const e1 = total.protein - this.targetProtein;
      const e2 = total.fat - this.targetFat;
      const e3 = total.carbs - this.targetCarbs;
      return e1 ** 2 + e2 ** 2 + e3 ** 2;
    } else if (this.calculationMethod === CalculationMethods.protein) {
      const e1 = total.protein - this.targetProtein;
      const e2 = total.calories - this.targetCalories;
      return e1 ** 2 + e2 ** 2;
    } else if (this.calculationMethod === CalculationMethods.fat) {
      const e1 = total.fat - this.targetFat;
      const e2 = total.calories - this.targetCalories;
      return e1 ** 2 + e2 ** 2;
    } else if (this.calculationMethod === CalculationMethods.carbs) {
      const e1 = total.carbs - this.targetCarbs;
      const e2 = total.calories - this.targetCalories;
      return e1 ** 2 + e2 ** 2;
    } else if (this.calculationMethod === CalculationMethods.calories) {
      return (total.calories - this.targetCalories) ** 2;
    }
  }

  sortPlans(plans) {
    return plans.sort(
      (a, b) => this.calculateError(a) - this.calculateError(b)
    );
  }

  createRandomMeal(mealIdx) {
    const foodCounts = [1, 2, 3, 4, 5];
    const foodCount = 1 + Math.floor(Math.random() * foodCounts.length);
    const foods = getRandomSubsample(this.foodsPerMeal[mealIdx], foodCount);
    return foods.map((food) => ({ ...food, amount: 1 }));
  }

  createRandomPopulation() {
    const plans = [];
    for (let i = 0; i < this.POPULATION_SIZE; i++) {
      const plan = [];
      for (let m = 0; m < this.meals.length; m++) {
        plan.push(this.createRandomMeal(m));
      }
      plans.push(plan);
    }
    return plans;
  }

  extinctionAndEvolution(plans) {
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
      const mealIdx = Math.floor(Math.random() * this.meals.length);
      const newPlan = plans[planIdx].map((m) => [...m]);
      newPlan[mealIdx] = this.createRandomMeal(mealIdx);
      newPlans.push(newPlan);
    }

    return newPlans;
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

/*
 * Helper function
 */

export function getRandomSubsample(list, sampleSize) {
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
