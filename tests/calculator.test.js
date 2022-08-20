import calculatorObj from "../scripts/calculator";

test("Calculator", () => {
    expect(calculatorObj.multiply(3,4)).toBe(12);
    expect(calculatorObj.add(3,4)).toBe(7);
    expect(calculatorObj.divide(6,3)).toBe(2);
    expect(calculatorObj.subtract(6,4)).toBe(2)
});