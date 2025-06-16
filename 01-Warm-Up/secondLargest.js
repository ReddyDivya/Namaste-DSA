// secondLargest.js
console.log("Return second largest element from an array:");

let arr = [14, 9, 10, 2, 8, -7, 1, 10];

function secondLargest(arr) {
    // Check if the array has at least 2 elements
    if (arr.length < 2) {
        return "Array should have at least 2 elements";
    }

    let firstLargest = -Infinity;  // Initialize firstLargest with the smallest possible number
    let secondLargest = -Infinity; // Initialize secondLargest with the smallest possible number

    // Loop through the array to find first and second largest
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            // If current element is greater than firstLargest,
            // update secondLargest to be the previous firstLargest
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            // If current element is distinct and greater than secondLargest, update secondLargest
            secondLargest = arr[i];
        }
    }

    // If secondLargest is still -Infinity, it means no second largest was found (e.g., all elements are equal)
    return secondLargest === -Infinity
        ? "No second largest element found"
        : secondLargest;
}

// Call the function and print the result
console.log(secondLargest(arr)); // Output: 10
console.log(secondLargest([])); // Output: Array should have at least 2 elements
console.log(secondLargest([12, 12, 12, 12])); // Output: No second largest element found
console.log(secondLargest([11])); // Output: Array should have at least 2 elements
console.log(secondLargest([-11, -2, -4, -7])); // Output: -4
console.log(secondLargest([5, 9])); // Output: 5

console.log(secondLargest([-11, 12, -2, -17])); // Output: -2
console.log(secondLargest([-1000, -2000, -3000])); // Output: -2000
console.log(secondLargest([7, 7, 5])); // Output: 5
console.log(secondLargest([-2, -2, -5])); // Output: -5
console.log(secondLargest([9, 8, 7, 6, 5])); // Output: 8
console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4
console.log(secondLargest([10, 10, 9, 9])); // Output: 9
