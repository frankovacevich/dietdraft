import { FoodSet } from "../core/food-set";
import { Fixtures } from "./fixtures";

describe("core/food-set", () => {
  it("should be able to create a default FoodSet", () => {
    const foodSet = FoodSet.default();
    expect(foodSet).toBeTruthy();
    expect(foodSet.foods).toEqual([]);
  });

  it("should be able to convert to and from json", () => {
    const foodSet = FoodSet.default();
    foodSet.setFoods(Fixtures.getFoods());

    const json = foodSet.toJson();
    expect(json).toBeTruthy();

    const newFoodSet = FoodSet.fromJson(json);
    expect(newFoodSet).toBeTruthy();
    expect(newFoodSet.foods.length).toBe(3);
    expect(newFoodSet.foods[0].name).toBe("egg");
    expect(newFoodSet.foods[1].name).toBe("apple");
    expect(newFoodSet.foods[2].name).toBe("cheese");
  });

  it("should be able to set foods and get properties", () => {
    const foodSet = FoodSet.default();

    foodSet.setFoods(Fixtures.getFoods());
    expect(foodSet.foods.length).toBe(3);
    expect(foodSet.foods[0].name).toBe("egg");
    expect(foodSet.foods[1].name).toBe("apple");
    expect(foodSet.foods[2].name).toBe("cheese");

    expect(foodSet.getCategories()).toStrictEqual(["ingredients", "fruit"]);
    expect(foodSet.getFoodsForCategory("ingredients").length).toBe(2);

    expect(foodSet.getSelectedFoods().length).toBe(0);
    foodSet.foods[0].selected = true;
    expect(foodSet.getSelectedFoods().length).toBe(1);
  });
});
