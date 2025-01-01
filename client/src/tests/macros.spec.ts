import { Macros } from "../core/macros";

describe("core/macros", () => {
  it("should be able to create a macro", () => {
    const macros = new Macros(10, 20, 30);
    expect(macros.protein).toBe(10);
    expect(macros.fat).toBe(20);
    expect(macros.carbs).toBe(30);
  });

  it("should be able to calculate calories", () => {
    const macros = new Macros(10, 20, 30);
    expect(macros.calories).toBe(10 * 4 + 20 * 9 + 30 * 4);
  });

  it("should be able to calculate percentages", () => {
    const macros = new Macros(10, 20, 30);
    expect(macros.proteinPercentage).toBe(12);
    expect(macros.fatPercentage).toBe(53);
    expect(macros.carbsPercentage).toBe(35);
    expect(macros.caloriesPercentage).toBe(100);
  });
});
