import { Food } from "@/core/food";
import { Macros } from "./macros";
import { faTrashRestoreAlt } from "@fortawesome/free-solid-svg-icons";

export class PlanData {
  foodPlan!: Food[][][]; // [day][meal][food]

  getFoods(day: number, meal: number): Food[] {
    const foodsForDay = day >= this.foodPlan.length ? [] : this.foodPlan[day];
    return meal >= foodsForDay.length ? [] : foodsForDay[meal];
  }

  addFoods(day: number, meal: number, foods: Food[]) {
    this.foodPlan[day][meal].push(...foods);
  }

  removeFood(day: number, meal: number, index: number) {
    this.foodPlan[day][meal].splice(index, 1);
  }

  macrosForDay(day: number): Macros {
    const macros = new Macros();
    if (day >= this.foodPlan.length) {
      return macros;
    }

    this.foodPlan[day].flat().forEach((food) => {
      macros.protein += food.protein * (food.amount || 0);
      macros.fat += food.fat * (food.amount || 0);
      macros.carbs += food.carbs * (food.amount || 0);
    });

    return macros;
  }

  get macrosAverage(): Macros {
    const macros = new Macros();
    this.foodPlan.flat(2).forEach((food) => {
      macros.protein += food.protein * (food.amount || 0);
      macros.fat += food.fat * (food.amount || 0);
      macros.carbs += food.carbs * (food.amount || 0);
    });

    macros.protein = macros.protein / this.foodPlan.length;
    macros.fat = macros.fat / this.foodPlan.length;
    macros.carbs = macros.carbs / this.foodPlan.length;
    return macros;
  }

  get shoppingList(): Food[] {
    const foodMap = new Map<string, Food>();

    this.foodPlan.flat(2).forEach((food) => {
      const existingFood = foodMap.get(food.id);
      if (!existingFood) {
        foodMap.set(food.id, food.copy());
      } else {
        existingFood.amount += food.amount;
      }
    });

    return Array.from(foodMap.values()).sort((a, b) => b.amount - a.amount);
  }

  static emptyPlan(days: number, meals: number): PlanData {
    const planData = new PlanData();
    for (let i = 0; i < days; i++) {
      const dayPlan = [];
      for (let m = 0; m < meals; m++) {
        dayPlan.push([]);
      }
      planData.foodPlan.push(dayPlan);
    }
    return planData;
  }

  toJson(): string {
    return JSON.stringify({ foodPlan: this.foodPlan });
  }

  static fromJson(json: any): PlanData | null {
    if (!json) {
      return null;
    }
    const planData = new PlanData();
    planData.foodPlan = JSON.parse(json);
    return planData;
  }

  static default() {
    return [];
  }
}
