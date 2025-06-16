// smallestElement.js

// smallestElement.js

console.log("Return smallest element from an array:");

let arr = [5, 10, 8, 17, 3, -1, -9];

function findSmallestElement(arr) {
    // Initialize min with the largest possible number
    let min = Infinity;

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Update min if current element is smaller
        }
    }

    return min; // Return the smallest element found
}

// Test cases
console.log(findSmallestElement(arr)); // Output: -9
console.log(findSmallestElement([-3, -10, -4, -6])); // Output: -10
