// countNegatives.js

console.log("Return number of negative elements from an array:");

let arr = [-10, 3, -5, 7, -9];

function countNegativeNums(arr) {
    let count = 0; // Initialize count to store the number of negative elements

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++; // Increment count if the element is negative
        }
    }

    return count; // Return the total count of negative numbers
} // countNegativeNums

console.log(countNegativeNums(arr)); // Output: 3
