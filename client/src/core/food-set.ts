import { Food } from "./food";

export class FoodSet {
  foods: Food[] = [];

  setFoods(foods: Food[]) {
    const selectedFoodIds = new Set(this.getSelectedFoods().map((food) => food.id));
    foods.forEach((food) => (food.selected = selectedFoodIds.has(food.id)));
    this.foods = foods;
  }

  getFoods(): Food[] {
    return this.foods;
  }

  getSelectedFoods(): Food[] {
    return this.foods.filter((food) => food.selected);
  }

  getCategories(): string[] {
    return Array.from(new Set(this.foods.map((food) => food.category)));
  }

  getFoodsForCategory(category: string): Food[] {
    return this.foods.filter((food) => food.category === category);
  }

  toJson() {
    return JSON.stringify({ foods: this.foods });
  }

  static fromJson(json: any): FoodSet {
    if (!json || typeof json !== "string") {
      throw new Error("Invalid JSON");
    }
    const foodSet = new FoodSet();
    foodSet.foods = JSON.parse(json).foods.map((f: any) => Food.fromObj(f));
    return foodSet;
  }

  static default(): FoodSet {
    return new FoodSet();
  }
}
