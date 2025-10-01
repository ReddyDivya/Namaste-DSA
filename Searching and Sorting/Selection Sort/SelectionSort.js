// Function to perform Selection Sort
function selectionSort(arr) {
    let n = arr.length; // Get the length of the array

    // Outer loop: iterate through each element (except the last)
    for (let i = 0; i < n - 1; i++) {
        let min = i; // Assume the current index holds the minimum value

        // Inner loop: check the rest of the array to find the smallest element
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j; // Update min if a smaller element is found
            }
        }

        // Swap if the current index is not the smallest
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    return arr; // Return the sorted array
}

// Example usage
console.log(selectionSort([5, 3, 1, 9, 8, 2])); // Output: [1, 2, 3, 5, 8, 9]
