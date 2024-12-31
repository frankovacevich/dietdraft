import { PlanData } from "./plan-data";

describe("core/plan-data", () => {
  it("should be able to create a PlanData", () => {
    const planData = PlanData.default();
    expect(planData).toBeTruthy();
    expect(planData.foodPlan).toEqual([]);
  });
});
