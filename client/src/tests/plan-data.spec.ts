import { PlanData } from "../core/plan-data";
import { Fixtures } from "./fixtures";

const DAYS_COUNT = 2;

describe("core/plan-data", () => {
  it("should be able to create an empty PlanData", () => {
    const planData = PlanData.createEmptyPlan(DAYS_COUNT);
    expect(planData).toBeTruthy();
  });

  it("should be able to convert to and from json", () => {
    const planData = PlanData.createEmptyPlan(DAYS_COUNT);
    planData.addFoods(0, 0, Fixtures.getFoods());

    const json = planData.toJson();
    expect(json).toBeTruthy();

    const newPlanData = PlanData.fromJson(json);
    expect(newPlanData).toBeTruthy();
    expect(newPlanData.getFoods(0, 0).length).toBe(3);
    expect(newPlanData.getFoods(0, 0)[0].name).toBe("egg");
    expect(newPlanData.getFoods(0, 0)[1].name).toBe("apple");
    expect(newPlanData.getFoods(0, 0)[2].name).toBe("cheese");
  });

  it("should be able to add and remove foods", () => {
    const planData = PlanData.createEmptyPlan(DAYS_COUNT);

    planData.addFoods(0, 0, Fixtures.getFoods());
    expect(planData.getFoods(0, 0).length).toBe(3);
    expect(planData.getFoods(0, 0)[0].name).toBe("egg");
    expect(planData.getFoods(0, 0)[1].name).toBe("apple");
    expect(planData.getFoods(0, 0)[2].name).toBe("cheese");

    planData.removeFood(0, 0, 0);
    expect(planData.getFoods(0, 0).length).toBe(2);
    expect(planData.getFoods(0, 0)[0].name).toBe("apple");
    expect(planData.getFoods(0, 0)[1].name).toBe("cheese");
  });

  it("should be able to calculate macros", () => {
    const planData = PlanData.createEmptyPlan(DAYS_COUNT);
    planData.addFoods(0, 0, Fixtures.getFoods());

    expect(planData.macrosForDay(0).protein).toBe(17.1);
    expect(planData.macrosForDay(0).fat).toBe(18.3);
    expect(planData.macrosForDay(0).carbs).toBe(15.6);
    expect(planData.macrosForDay(0).calories).toBe(296);

    expect(planData.macrosAverage.protein).toBe(9);
    expect(planData.macrosAverage.fat).toBe(9);
    expect(planData.macrosAverage.carbs).toBe(8);
    expect(planData.macrosAverage.calories).toBe(149);
  });

  it("should be able to generate a shopping list", () => {
    const planData = PlanData.createEmptyPlan(DAYS_COUNT);
    planData.addFoods(0, 0, Fixtures.getFoods());
    planData.addFoods(1, 0, Fixtures.getFoods());
    expect(planData.shoppingList.length).toBe(3);
  });

  it("should be able to clear a day's plan", () => {
    const planData = PlanData.createEmptyPlan(DAYS_COUNT);
    planData.addFoods(0, 0, Fixtures.getFoods());
    expect(planData.getFoods(0, 0).length).toBe(3);

    planData.clearDay(0);
    expect(planData.getFoods(0, 0).length).toBe(0);
  });
});
