import { PresetPlan } from "./preset-plan";

export class PresetPlanSet {
  plans: PresetPlan[] = [];

  static fromJson(json: any): PresetPlanSet {
    if (!json || typeof json !== "string") {
      throw new Error("Invalid JSON");
    }
    const planSet = new PresetPlanSet();
    console.log(json);
    planSet.plans = JSON.parse(json).plans.map((f: any) => PresetPlan.fromObj(f));
    return planSet;
  }

  toJson(): string {
    return JSON.stringify({ plans: this.plans });
  }

  static default(): PresetPlanSet {
    return new PresetPlanSet();
  }
}
