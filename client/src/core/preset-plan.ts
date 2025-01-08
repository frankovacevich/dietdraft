import { Food } from "./food";
import { Macros } from "./macros";

export class PresetPlan {
  plan: Food[][] = [];
  name: string = "";
  icon: string = "";

  get macros(): Macros {
    return Macros.fromList(this.plan.flat().map((food) => food.macrosTimesAmount));
  }

  static fromObj(obj: any): PresetPlan {
    if (!obj) {
      throw new Error("Invalid Object");
    }
    const presetPlan = new PresetPlan();
    presetPlan.name = obj.name;
    presetPlan.icon = obj.icon;
    presetPlan.plan = obj.plan.map((a: Food[]) => a.map((b: Food) => Food.fromObj(b)));
    return presetPlan;
  }

  static fromMealPlan(mealPlan: Food[][]): PresetPlan {
    const presetPlan = new PresetPlan();
    presetPlan.plan = mealPlan.map((a: Food[]) => a.map((b: Food) => b.copy()));
    return presetPlan;
  }
}
