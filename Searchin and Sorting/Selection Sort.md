# 📝 Selection Sort

Selection Sort is a simple comparison-based sorting algorithm. It works by repeatedly selecting the smallest element from the unsorted part of the array and swapping it with the element at the beginning of the unsorted part.

## Algorithm Steps

- Start from the first element, assume it is the minimum.
- Compare it with all other elements to find the actual minimum.
- Swap the found minimum with the first element.
- Move to the next index and repeat the process until the array is sorted.

## Code

```
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

```

## Time Complexity

- Best Case: O(n²) → still checks all elements even if sorted
- Average Case: O(n²)
- Worst Case: O(n²)

## Space Complexity

- O(1) → In-place sorting, requires no extra storage
