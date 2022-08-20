import caesarCipher from "../scripts/cipher"

test("The Caesar Cipher", () => {
    expect(caesarCipher("food", 2)).toBe("hqqf");
    expect(caesarCipher("New York", 5)).toBe("sjb dtwp");
    expect(caesarCipher("This is awesome!", 3)).toMatch("wklv lv dzhvrph!");
})