import { CalculationMethod } from "../core/enums";
import { PlanInfo } from "../core/plan-info";

describe("core/plan-info", () => {
  it("should be able to create a default PlanInfo", () => {
    const planInfo = PlanInfo.default();
    expect(planInfo).toBeTruthy();
  });

  it("should be able to convert to and from json", () => {
    const planInfo = PlanInfo.default();
    const json = planInfo.toJson();
    expect(json).toBeTruthy();

    const newPlanInfo = PlanInfo.fromJson(json);
    expect(newPlanInfo).toBeTruthy();
    expect(newPlanInfo.protein).toBe(planInfo.protein);
    expect(newPlanInfo.fat).toBe(planInfo.fat);
    expect(newPlanInfo.carbs).toBe(planInfo.carbs);
    expect(newPlanInfo.calculationMethod).toBe(CalculationMethod.ALL);
  });

  it("should be able to get the current day", () => {
    const planInfo = PlanInfo.default();
    const dayMs = 24 * 60 * 60 * 1000;
    const createDate = (daysAgo: number) => new Date(new Date().getTime() - daysAgo * dayMs);

    planInfo.days = 2;

    planInfo.created = createDate(0);
    expect(planInfo.currentDay).toBe(0);

    planInfo.created = createDate(1);
    expect(planInfo.currentDay).toBe(1);

    planInfo.created = createDate(2);
    expect(planInfo.currentDay).toBe(1);
  });
});
