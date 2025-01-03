import { Food } from "./food";

export class FoodSet {
  foods: Food[] = [];

  get isEmpty(): boolean {
    return this.foods.length === 0;
  }

  setFoods(foods: Food[]) {
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

  deleteFood(food: Food) {
    this.foods = this.foods.filter((f) => f.id !== food.id);
  }

  addNewFood(): Food {
    const newFoodId = Date.now().toString(36);
    const newFood = Food.placeholder();
    newFood.id = newFoodId;
    this.foods.push(newFood);
    return newFood;
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
