import { PlanData } from "./plan-data";

describe("core/plan-data", () => {
  it("should be able to create a default PlanData", () => {
    const planData = PlanData.default();
    expect(planData).toBeTruthy();
    expect(planData.foodPlan).toEqual([]);
  });

  it("should be able to create an empty PlanData", () => {
    const planData = PlanData.emptyPlan(2, 2);
    expect(planData).toBeTruthy();
    expect(planData.foodPlan).toEqual([
      [[], [], [], []],
      [[], [], [], []],
    ]);
  });
});
