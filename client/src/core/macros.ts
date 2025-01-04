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

  get calories(): number {
    const calories =
      this.protein * Macros.PROTEIN_FACTOR +
      this.fat * Macros.FAT_FACTOR +
      this.carbs * Macros.CARBS_FACTOR;
    return Math.round(calories);
  }

  private static calcPercentage(value: number, factor: number, total: number): number {
    return Math.round((100 * value * factor) / total);
  }

  get proteinPercentage(): number {
    return Macros.calcPercentage(this.protein, Macros.PROTEIN_FACTOR, this.calories);
  }

  get fatPercentage(): number {
    return Macros.calcPercentage(this.fat, Macros.FAT_FACTOR, this.calories);
  }

  get carbsPercentage(): number {
    return Macros.calcPercentage(this.carbs, Macros.CARBS_FACTOR, this.calories);
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
