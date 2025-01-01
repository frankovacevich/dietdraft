import { Food } from "./food";

export class FoodInfoModal {
  visible: boolean = false;
  food: Food = Food.placeholder();

  private constructor() {}

  open(food: Food) {
    this.food = food;
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  static create(): FoodInfoModal {
    return new FoodInfoModal();
  }
}
