import { Macros } from "./macros";
import { Meal } from "./enums";

export class Food {
  id!: string;
  name!: string;
  icon!: string;
  description!: string;
  category!: string;
  protein!: number;
  fat!: number;
  carbs!: number;
  meals: Meal[] = [];

  selected: boolean = false;
  amount: number = 1;

  get macros(): Macros {
    return new Macros(this.protein, this.fat, this.carbs);
  }

  get macrosTimesAmount(): Macros {
    return new Macros(this.protein * this.amount, this.fat * this.amount, this.carbs * this.amount);
  }

  get calories(): number {
    return this.macros.calories;
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
    food.amount = obj.amount || 1;
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
    food.meals = this.meals;
    food.amount = this.amount;
    food.selected = this.selected;
    return food;
  }

  cleanCopy(): Food {
    const food = this.copy();
    food.selected = false;
    food.amount = 1;
    return food;
  }

  static placeholder(): Food {
    const food = new Food();
    food.id = "";
    food.name = "";
    food.icon = "cheese";
    food.description = "";
    food.category = "";
    food.protein = 100;
    food.fat = 100;
    food.carbs = 100;
    food.meals = [];
    return food;
  }
}
