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
    const calories =
      this.protein * Macros.PROTEIN_FACTOR +
      this.fat * Macros.FAT_FACTOR +
      this.carbs * Macros.CARBS_FACTOR;
    return Math.round(calories);
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

  static fromList(list: Macros[]): Macros {
    const macros = new Macros();
    list.forEach((m) => {
      macros.protein += m.protein;
      macros.fat += m.fat;
      macros.carbs += m.carbs;
    });
    return macros;
  }
}
