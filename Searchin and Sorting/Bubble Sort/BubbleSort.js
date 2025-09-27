// Initial array to be sorted
let arr = [4, 5, 1, 3, 9];

// Function to perform bubble sort
function bubbleSort(arr) {
    // Get the length of the array
    let n = arr.length;

    // Outer loop: runs for each element in the array
    for (let i = 0; i < n - 1; i++) {
        // Flag to check if any swapping happened in this pass
        let isSwapped = false;

        // Inner loop: compares adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            // If the current element is greater than the next, swap them
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];    // Store current element in temp
                arr[j] = arr[j + 1];  // Replace current with next
                arr[j + 1] = temp;    // Put temp in next position
                isSwapped = true;     // Mark that a swap has happened
            }
        }

        // If no swapping happened in the inner loop, array is already sorted
        if (!isSwapped) {
            break; // Exit the loop early for optimization
        }
    }

    // Return the sorted array
    return arr;
}

// Call the bubbleSort function and store result
console.log(bubbleSort(arr));
console.log(bubbleSort([1, 2, 3, 5, 9, 12, 14]));//[1, 2, 3, 5, 9, 12, 14]
