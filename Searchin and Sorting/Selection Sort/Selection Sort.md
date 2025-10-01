# 📝 Selection Sort

Selection Sort is a simple comparison-based sorting algorithm. It works by repeatedly selecting the smallest element from the unsorted part of the array and swapping it with the element at the beginning of the unsorted part.

## Algorithm Steps

- Start from the first element, assume it is the minimum.
- Compare it with all other elements to find the actual minimum.
- Swap the found minimum with the first element.
- Move to the next index and repeat the process until the array is sorted.

## Pseudo Code

```
// Function to perform Selection Sort
function selectionSort(A) {
    n = A.length

    for (i = 0; i < n - 1; i++) {
        minIndex = i

        // Find the index of the minimum element
        for (j = i + 1; j < n; j++) {
            if (A[j] < A[minIndex]) {
                minIndex = j
            }
        }

        // Swap if minIndex has changed
        if (minIndex !== i) {
            swap A[i] and A[minIndex]
        }
    }

    return A
}
```

## Time Complexity

- Best Case: O(n²) → still checks all elements even if sorted
- Average Case: O(n²)
- Worst Case: O(n²)

## Space Complexity

- O(1) → In-place sorting, requires no extra storage
