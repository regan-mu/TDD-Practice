// Capitalize.
function capitalize(str){
    if (isUpperCase(str[0]) === true){
        return str[0] + str.slice(1).toLowerCase()
    } 
    else if (isUpperCase(str[0]) === false) {
        let firstLetter = str[0].toUpperCase();
        let otherLetters = str.slice(1).toLowerCase();
        return firstLetter+otherLetters;
    } 
    else {
        return isUpperCase(str[0]);
    }
};


function isUpperCase(string){
    if (typeof(string) === "string") {
        if (string.toUpperCase() === string){
            return true;
        }
        else if (string.toLowerCase() === string){
            return false;
        }
    }
    else return "Must be a string";
}

export default capitalize;