import { MEALS } from "./enums";
import { Food } from "./food";

export class AddFoodModal {
  meal: number = 0;
  visible: boolean = false;
  foods: Food[] = [];
  searchText: string = "";

  private constructor() {}

  private focusOnSearchInput() {
    const el = document.getElementById("searchInput");
    if (!el) {
      console.warn("Element 'searchInput' not found");
    } else {
      el.focus();
    }
  }

  private scrollContainerToTop() {
    const el = document.getElementById("searchInput")?.parentNode?.parentNode as HTMLElement;
    if (!el) {
      console.warn("Container element not found");
    } else {
      el.scrollTop = 0;
    }
  }

  private getSelectedFoodsAndSetAmount(): Food[] {
    const foods = this.foods.filter((food) => food.selected);
    foods.forEach((food) => {
      food.selected = false;
      food.amount = 1;
    });
    return foods;
  }

  get mealName(): string {
    return MEALS[this.meal];
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

  getFoodsForCategory(category: string): Food[] {
    const foods = this.getSearchedFoods();
    return foods.filter((food) => food.category === category);
  }

  open(meal: number, foods: Food[]) {
    this.meal = meal;
    this.visible = true;
    this.foods = foods.map((food) => food.copy());
    this.foods.forEach((food) => (food.selected = false));
    this.focusOnSearchInput();
    this.scrollContainerToTop();
  }

  close(): Food[] {
    this.visible = false;
    this.searchText = "";
    return this.getSelectedFoodsAndSetAmount();
  }

  clearSearch() {
    this.searchText = "";
    this.focusOnSearchInput();
  }

  static create(): AddFoodModal {
    return new AddFoodModal();
  }
}
