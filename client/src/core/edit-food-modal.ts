import { getEnumKey, Meal } from "./enums";
import { Food } from "./food";
import { Macros } from "./macros";

export class EditFoodModal {
  food: Food = Food.placeholder();
  visible: boolean = false;

  nameInput: string = "";
  iconInput: string = "";
  categoryInput: string = "";
  descriptionInput: string = "";
  proteinInput: number = 0;
  fatInput: number = 0;
  carbsInput: number = 0;
  mealsInput: Meal[] = [];

  get calories(): number {
    return new Macros(this.proteinInput, this.fatInput, this.carbsInput).calories;
  }

  get iconSrc(): string {
    return `/food/${this.iconInput}.png`;
  }

  private constructor() {}

  open(food: Food) {
    this.food = food;
    this.nameInput = food.name;
    this.iconInput = food.icon;
    this.categoryInput = food.category;
    this.descriptionInput = food.description;
    this.proteinInput = food.protein;
    this.fatInput = food.fat;
    this.carbsInput = food.carbs;
    this.mealsInput = food.meals;

    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  saveAndClose() {
    this.food.name = this.nameInput;
    this.food.icon = this.iconInput;
    this.food.category = this.categoryInput;
    this.food.description = this.descriptionInput;
    this.food.protein = this.proteinInput;
    this.food.fat = this.fatInput;
    this.food.carbs = this.carbsInput;
    this.food.meals = this.mealsInput;

    this.visible = false;
  }

  static create(): EditFoodModal {
    return new EditFoodModal();
  }
}
