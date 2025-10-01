# Binary Search (JavaScript)

### [704. Binary Search](https://leetcode.com/problems/binary-search/description/)


## 📌 Introduction
Binary Search is an efficient algorithm for finding a target element in a **sorted array**.  
It works by repeatedly dividing the search interval in half:  
- Compare the middle element with the target.  
- If it matches, return the index.  
- If the target is smaller, search in the left half.  
- If the target is larger, search in the right half.

---

## 🔎 Procedure
1. Initialize two pointers: `left = 0` and `right = array.length - 1`.  
2. While `left <= right`:  
   - Calculate `middle = Math.floor((left + right) / 2)`.  
   - If `arr[middle] == target`, return `middle`.  
   - If `arr[middle] < target`, move `left = middle + 1`.  
   - If `arr[middle] > target`, move `right = middle - 1`.  
3. If the target is not found, return `-1`.

---

## 📝 Pseudocode


---

## 💻 Code (JavaScript)
```javascript
var binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] === target) {
            return middle;
        } else if (arr[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

// Test cases
console.log(binarySearch([0, 1, 2, 4, 9], 3)); // -1
console.log(binarySearch([0, 1, 2, 4, 9], 9)); // 4
console.log(binarySearch([0, 1, 2, 4, 9], 1)); // 1
```

## Output

```
-1
4
1
```

## Time and Space Complexity

### Time Complexity

```
Best Case: O(1) → Target found at middle
Worst Case: O(log n) → Repeatedly divide array
Average Case: O(log n)
```

### Space Complexity: O(1) → Iterative method, constant extra space
