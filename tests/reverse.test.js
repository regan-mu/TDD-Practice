import reverseString from "../scripts/reverseString";
test("Reverse a string", () => {
    expect(reverseString("chakula")).toMatch("alukahc");
});