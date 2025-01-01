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

  increaseAmount() {
    const amounts = [0.25, 0.5, 0.75, 1, 1.25, 1.5];
    const idx = amounts.indexOf(this.amount);
    this.amount = idx !== -1 ? amounts[(idx + 1) % amounts.length] : 1;
  }

  toggleSelected() {
    this.selected = !this.selected;
  }

  static fromObj(obj: any): Food {
    if (!obj) {
      throw new Error("Invalid Object");
    }
    const food = new Food();
    food.id = obj.id;
    food.name = obj.name;
    food.icon = obj.icon;
    food.description = obj.description;
    food.category = obj.category;
    food.protein = obj.protein;
    food.fat = obj.fat;
    food.carbs = obj.carbs;
    food.selected = obj.selected || false;
    food.amount = obj.amount || 0;
    food.meals = obj.meals || [];
    return food;
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
