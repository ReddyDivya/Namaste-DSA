// Function to perform Linear Search
var linearSearch = (arr, target) => {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if current element matches the target
        if (arr[i] === target) {
            return i; // Return the index if found
        }
    }

    // If target is not found, return -1
    return -1;
}

// Test cases
console.log(linearSearch([4, 9, 1, 0, 2], 3)); // Output: -1 (3 not in array)
console.log(linearSearch([4, 9, 1, 0, 2], 9)); // Output: 1  (9 found at index 1)
console.log(linearSearch([4, 9, 1, 0, 2], 1)); // Output: 2  (1 found at index 2)
