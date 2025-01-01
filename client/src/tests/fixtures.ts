import { Food } from "../core/food";

const FOODS = [
  {
    id: "23abd79a-31df-4c55-a67d-ea7a40ca155b",
    name: "egg",
    icon: "egg",
    category: "ingredients",
    description: "One egg",
    protein: 6.3,
    fat: 5.3,
    carbs: 0.6,
    amount: 1,
  },
  {
    id: "82838a71-1bea-4c93-8a6b-b95b9939028c",
    name: "apple",
    icon: "apple",
    category: "fruit",
    description: "One apple",
    protein: 1.0,
    fat: 0.2,
    carbs: 15.0,
    amount: 1,
  },
  {
    id: "1a11d336-9f64-4c60-8e3b-9a0e553307e4",
    name: "cheese",
    icon: "cheese",
    category: "ingredients",
    description: "One slice (21g) of gouda cheese",
    protein: 4.9,
    fat: 6.4,
    carbs: 0.0,
    amount: 2,
  },
];

export class Fixtures {
  static getFoods(): Food[] {
    return FOODS.map((f) => Food.fromObj(f));
  }
}
