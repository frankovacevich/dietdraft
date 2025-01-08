import { PresetPlan } from "./preset-plan";

export class PresetPlansModal {
  visible: boolean = false;
  plans: PresetPlan[] = [];

  private constructor() {}

  open(plans: PresetPlan[]) {
    this.plans = plans;
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  static create(): PresetPlansModal {
    return new PresetPlansModal();
  }
}
