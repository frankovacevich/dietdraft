import { PlanInfo } from "./plan-info";
import { CalculationMethod } from "./enums";
import { Macros } from "./macros";

export class PlanInfoInput {
  protein!: number;
  fat!: number;
  carbs!: number;
  days!: number;
  calculationMethod!: CalculationMethod;

  get macros(): Macros {
    return new Macros(this.protein, this.fat, this.carbs);
  }

  static default() {
    return PlanInfoInput.fromPlanInfo(PlanInfo.default());
  }

  static fromPlanInfo(planInfo: PlanInfo): PlanInfoInput {
    const planInfoInput = new PlanInfoInput();
    planInfoInput.protein = planInfo.protein;
    planInfoInput.fat = planInfo.fat;
    planInfoInput.carbs = planInfo.carbs;
    planInfoInput.days = planInfo.days;
    planInfoInput.calculationMethod = planInfo.calculationMethod;
    return planInfoInput;
  }

  toPlanInfo(): PlanInfo {
    const planInfo = new PlanInfo();
    planInfo.protein = this.protein;
    planInfo.fat = this.fat;
    planInfo.carbs = this.carbs;
    planInfo.days = this.days;
    planInfo.calculationMethod = this.calculationMethod;
    return planInfo;
  }
}
