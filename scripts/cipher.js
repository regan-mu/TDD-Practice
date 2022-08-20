const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function caesarCipher(text, shift) {
    let encryptedText = "";
    for (let i=0; i < text.length; i++) {
        let char = text[i].toUpperCase();
        let charIndex = alphabets.indexOf(char);
        if (charIndex >= 0) {
            let newIndex = charIndex + shift;
            if (newIndex > 25) {
                newIndex -= 26;
            }
            encryptedText += alphabets[newIndex].toLowerCase();
        } else {
            encryptedText += text[i];
        }
    }
    return encryptedText;
}

export default caesarCipher;