import { PlanInfo } from "./plan-info";
import { PlanData } from "./plan-data";
import { FoodSet } from "./food-set";
import { Food } from "./food";

export class DataFetcher {
  static savePlanData(planData: PlanData) {
    localStorage.setItem("planData", planData.toJson());
  }

  static savePlanInfo(planInfo: PlanInfo) {
    localStorage.setItem("planInfo", planInfo.toJson());
  }

  static saveFoodSet(foodSet: FoodSet) {
    localStorage.setItem("foodSet", foodSet.toJson());
  }

  static getPlanData(defaultDays: number): PlanData {
    const json = localStorage.getItem("planData");
    try {
      return PlanData.fromJson(json);
    } catch {
      console.warn("Failed to parse PlanData from json", json);
      return PlanData.createEmptyPlan(defaultDays);
    }
  }

  static getPlanInfo(): PlanInfo {
    const json = localStorage.getItem("planInfo");
    try {
      return PlanInfo.fromJson(json);
    } catch {
      console.warn("Failed to parse PlanInfo from json", json);
      return PlanInfo.default();
    }
  }

  static getFoodSet(): FoodSet {
    const json = localStorage.getItem("foodSet");
    try {
      return FoodSet.fromJson(json);
    } catch {
      console.warn("Failed to parse FoodSet from json", json);
      return FoodSet.default();
    }
  }

  static async fetchDefaultFoods(): Promise<Food[]> {
    const url = "/data.json";
    const response = await fetch(url);
    const foods = await response.json();
    return foods.map(Food.fromObj);
  }
}
