// Binary Search implementation
var search = function (nums, target) {

    // Initialize 2 pointers for search boundaries
    let left = 0;                     // starting index
    let right = nums.length - 1;      // ending index

    // Continue searching as long as left <= right
    while (right >= left) {

        // Find the middle index
        let middle = Math.floor((left + right) / 2);

        // If the middle element matches the target, return index
        if (target === nums[middle]) {
            return middle;
        }
        // If target is greater, search in the right half
        else if (target > nums[middle]) {
            left = middle + 1;
        }
        // If target is smaller, search in the left half
        else {
            right = middle - 1;
        }
    }

    // If target not found, return -1
    return -1;
};

// Test cases
console.log(search([-1, 0, 3, 5, 9, 12], 9));   // Output: 4 (found at index 4)
console.log(search([-1, 0, 3, 5, 9, 12], 2));   // Output: -1 (not found)
console.log(search([-20, -8, -1, 0, 5, 8, 9, 12, 15], 7)); // Output: -1 (not found)
console.log(search([-20, -8, -1, 0, 5, 8, 9, 12, 15], 8)); // Output: 5 (found at index 5)
