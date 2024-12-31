import { Macros } from "./macros";
import { Meal } from "./enums";

export class Food {
  id!: string;
  name!: string;
  icon!: string;
  description!: string;
  category!: string;

  selected: boolean = false;
  amount: number = 0;
  meals: Meal[] = [];

  protein!: number;
  fat!: number;
  carbs!: number;

  get calories(): number {
    return this.macros.calories;
  }

  get macros(): Macros {
    return new Macros(this.protein, this.fat, this.carbs);
  }

  static fromJson(json: any): Food {
    if (!json) {
      throw new Error("Invalid JSON");
    }
    const food = new Food();
    food.id = json.id;
    food.name = json.name;
    food.icon = json.icon;
    food.description = json.description;
    food.category = json.category;
    food.protein = json.protein;
    food.fat = json.fat;
    food.carbs = json.carbs;
    food.selected = json.selected || false;
    food.amount = json.amount || 0;
    food.meals = json.meals || [];
    return food;
  }

  toJson(): string {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      icon: this.icon,
      description: this.description,
      category: this.category,
      protein: this.protein,
      fat: this.fat,
      carbs: this.carbs,
      selected: this.selected,
      amount: this.amount,
      meals: this.meals,
    });
  }

  copy(): Food {
    const food = new Food();
    food.id = this.id;
    food.name = this.name;
    food.icon = this.icon;
    food.description = this.description;
    food.category = this.category;
    food.protein = this.protein;
    food.fat = this.fat;
    food.carbs = this.carbs;
    food.selected = this.selected;
    food.amount = this.amount;
    food.meals = this.meals;
    return food;
  }
}
