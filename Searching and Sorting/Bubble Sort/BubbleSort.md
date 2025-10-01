# Bubble Sort in JavaScript

This project demonstrates the **Bubble Sort algorithm** implemented in JavaScript.  
Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.  

---

## 📂 Code

```javascript
let arr = [4, 5, 1, 3, 9];

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }

        if (!isSwapped) break;
    }

    return arr;
}

let result = bubbleSort(arr);
console.log("Sorted array", result);

```

## Explanation

- The outer loop runs through all elements.
- The inner loop compares adjacent elements.
- If an element is greater than the next, they are swapped.
- The algorithm keeps running until no swaps are needed (optimized using isSwapped).

## ⚡ Complexity

- **Time Complexity**  
  - Best Case (Already Sorted): O(n)  
  - Average Case: O(n²)  
  - Worst Case: O(n²)  

- **Space Complexity:** O(1)

Because Bubble Sort only needs a constant amount of extra memory (like a temporary variable for swapping).
The algorithm sorts the array in-place, so it doesn’t use additional data structures proportional to the input size.
