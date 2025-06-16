// largestElement.js

console.log("Return largest element from an array:");

let arr = [-9, -19,-3];

function findLargestElement(arr) {
    let max = -Infinity; // Initialize max with the smallest possible number

    // Loop through the array starting from index 1
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]; // Update max if current element is greater
        }
    }

    return max; // Return the largest element
}

console.log(findLargestElement(arr)); // Output:-3
