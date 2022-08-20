// Calculator
function Calculator(){
    this.multiply = function(i,j){
        return i*j;
    }
    this.add = function(i,j){
        return i+j;
    }
    this.divide = function(i,j){
        return i/j;
    }
    this.subtract = function(i,j){
        return i-j;
    }
}
const calculatorObj = new Calculator();

export default calculatorObj;