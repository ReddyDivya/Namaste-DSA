// largestElement.js

// Display the purpose of the program
console.log("Return largest element from an array:");

// Example input array (can contain positive or negative numbers)
let arr = [-9, -19, -3];

// Function to find the largest element in the given array
function findLargestElement(arr) {
    let max = -Infinity; // Initialize max with the smallest possible number to handle negative arrays

    // Loop through each element of the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element is greater than max, update max
        if (max < arr[i]) {
            max = arr[i];
        }
    }

    return max; // Return the largest element found in the array
}

// Call the function and print the result
console.log(findLargestElement(arr)); // Output: -3 → largest number in [-9, -19, -3]
