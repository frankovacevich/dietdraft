import { MEALS } from "./enums";
import { Food } from "./food";

export class AddFoodModal {
  visible: boolean = false;
  meal: number = 0;
  foods: Food[] = [];
  searchText: string = "";

  get mealName(): string {
    return MEALS[this.meal];
  }

  get searchInput(): HTMLElement {
    const el = document.getElementById("searchInput");
    if (!el) {
      throw new Error("Search input not found");
    }
    return el;
  }

  get container(): HTMLElement {
    const el = this.searchInput?.parentNode?.parentNode as HTMLElement;
    if (!el) {
      throw new Error("Container not found");
    }
    return el;
  }

  getSearchedFoods(): Food[] {
    if (this.searchText === "") {
      return this.foods;
    }
    return this.foods.filter((food) =>
      food.name.toLowerCase().includes(this.searchText.toLowerCase()),
    );
  }

  getCategories(): string[] {
    const foods = this.getSearchedFoods();
    return Array.from(new Set(foods.map((food) => food.category)));
  }

  getSelectedFoods(): Food[] {
    const foods = this.foods.filter((food) => food.selected);
    foods.forEach((food) => {
      food.selected = false;
      food.amount = 1;
    });
    return foods;
  }

  getFoodsForCategory(category: string): Food[] {
    const foods = this.getSearchedFoods();
    return foods.filter((food) => food.category === category);
  }

  open(meal: number, foods: Food[]) {
    this.meal = meal;
    this.visible = true;
    this.foods = foods.map((food) => food.copy());
    this.foods.forEach((food) => (food.selected = false));
    this.searchInput.focus();
    this.container.scrollTop = 0;
  }

  close(): Food[] {
    this.visible = false;
    this.searchText = "";
    return this.getSelectedFoods();
  }

  clearSearch() {
    this.searchText = "";
    this.searchInput.focus();
  }
}
