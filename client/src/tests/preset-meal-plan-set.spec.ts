import { PresetPlan } from "../core/preset-plan";
import { PresetPlanSet } from "../core/preset-plan-set";
import { Fixtures } from "./fixtures";

describe("core/preset-plan-set", () => {
  it("should be able to create a default PresetPlanSet", () => {
    const presetPlanSet = PresetPlanSet.default();
    expect(presetPlanSet).toBeTruthy();
    expect(presetPlanSet.plans).toEqual([]);
  });

  it("should be able to convert to and from json", () => {
    const presetPlanSet = PresetPlanSet.default();
    const presetPlan = PresetPlan.fromMealPlan(Fixtures.getMealPlan());
    presetPlan.name = "my plan";
    presetPlanSet.plans = [presetPlan];

    const json = presetPlanSet.toJson();
    expect(json).toBeTruthy();

    const newPresetPlanSet = PresetPlanSet.fromJson(json);
    expect(newPresetPlanSet).toBeTruthy();
    expect(newPresetPlanSet.plans.length).toBe(1);
    expect(newPresetPlanSet.plans[0].name).toBe("my plan");
  });
});
