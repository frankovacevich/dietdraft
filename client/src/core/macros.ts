export class Macros {
  static readonly PROTEIN_FACTOR = 4;
  static readonly FAT_FACTOR = 9;
  static readonly CARBS_FACTOR = 4;

  protein: number = 0;
  fat: number = 0;
  carbs: number = 0;

  constructor(protein: number = 0, fat: number = 0, carbs: number = 0) {
    this.protein = protein;
    this.fat = fat;
    this.carbs = carbs;
  }

  private calcPercentage(value: number, factor: number): number {
    return Math.round((100 * value * factor) / this.calories);
  }

  get calories(): number {
    return (
      this.protein * Macros.PROTEIN_FACTOR +
      this.fat * Macros.FAT_FACTOR +
      this.carbs * Macros.CARBS_FACTOR
    );
  }

  get proteinPercentage(): number {
    return this.calcPercentage(this.protein, Macros.PROTEIN_FACTOR);
  }

  get fatPercentage(): number {
    return this.calcPercentage(this.fat, Macros.FAT_FACTOR);
  }

  get carbsPercentage(): number {
    return this.calcPercentage(this.carbs, Macros.CARBS_FACTOR);
  }

  get caloriesPercentage(): number {
    return 100;
  }

  add(macros: Macros): Macros {
    return new Macros(
      this.protein + macros.protein,
      this.fat + macros.fat,
      this.carbs + macros.carbs,
    );
  }
}
