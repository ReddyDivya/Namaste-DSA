// countNegatives.js

// Print the purpose of this program
console.log("Return number of negative elements from an array:");

// Example input array containing both positive and negative numbers
let arr = [-10, 3, -5, 7, -9];

// Function to count the number of negative elements in the array
function countNegativeNums(arr) {
    let count = 0;  // Initialize a counter to store the number of negative elements

    // Loop through each element of the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;  // Increment count if the element is negative
        }
    }

    return count;  // Return the final count of negative numbers
} // countNegativeNums

// Call the function with the array and print the result
console.log(countNegativeNums(arr)); // Output: 3 → [-10, -5, -9]
