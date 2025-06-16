// countNegatives.js

console.log("Return number of negative elements from an array:");

let arr = [-10, 3, -5, 7, -9];

function countNegativeNums(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }

    return count;
}//countNegativeNums

console.log(countNegativeNums(arr));//2
