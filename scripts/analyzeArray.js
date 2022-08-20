function analyzeArray(array) {
    let avg = Math.round(getSum(array)/array.length);
    let obj =  {
        average: avg,
        min: getMin(array),
        max: getMax(array),
        length: array.length
    }
    return obj;
}

function getSum(arr){
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum+=arr[i];
    }
    return sum
}

function getMin(arr){
    let min = arr[0]
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min
}

function getMax(arr){
    let max= arr[0]
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max
}

export default analyzeArray;