import { Food } from "./food";

export class FoodInfoModal {
  visible: boolean = false;
  food!: Food;

  open(food: Food) {
    this.food = food;
    this.visible = true;
  }

  close() {
    this.visible = false;
  }
}
