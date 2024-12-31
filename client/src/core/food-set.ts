import { Food } from "@/store";


export class FoodSet {
  foods: Food[] = [];

  getSelectedFoods(): Food[] {
    return this.foods.filter((food) => food.selected);
  }

  // TODO setFoods

  getCategories(): string[] {
    return Array.from(new Set(this.foods.map((food) => food.category)));
  }

  getFoodsForCategory(category: string): Food[] {
    return this.foods.filter((food) => food.category === category)
  }

  toJson() {
    return JSON.stringify({foods: this.foods});
  }

  static fromJson(json: any): FoodSet {
    if (!json) {
      return FoodSet.default();
    }
    const foodSet = new FoodSet();
    const data = JSON.parse(json);
    // TODO foodSet.foods = data.foods.map((food: any) => Food.fromJson(food));
    return foodSet;
  }

  static default(): FoodSet {
    return new FoodSet();
  }
}