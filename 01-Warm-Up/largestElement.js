// largestElement.js

console.log("Return largest element from an array:");

let arr = [-9, -19, -3];

function findLargestElement(arr) {
    let max = -Infinity; // Initialize max with the smallest possible number

    // Loop through the array to find the largest element
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if current element is greater
        }
    }

    return max; // Return the largest element found
}

// Test case
console.log(findLargestElement(arr)); // Output: -3
