import capitalize from "../scripts/capitalize";

test('Capitalize first letter', () => {
    expect(capitalize("animal")).toBe("Animal");
    expect(capitalize("ANIMAL")).toBe("Animal");
    expect(capitalize("aNIMAL")).toBe("Animal");
    expect(capitalize(6)).toMatch("Must be a string");
});