# 🔍 Binary Search Implementation

Binary Search is an efficient algorithm to find the position of a target element in a **sorted array**.  
It works by repeatedly dividing the search interval in half until the element is found or the search space is empty.

---

## 📌 Algorithm Steps
1. Start with two pointers: `left` at the beginning and `right` at the end of the array.
2. Find the `middle` index.
3. Compare the middle element with the target:
   - If equal → return the index.
   - If target is greater than middle element → move `left` pointer to `middle + 1`.
   - If target is smaller than middle element → move `right` pointer to `middle - 1`.
4. Repeat until the element is found or pointers cross.
5. If not found, return `-1`.

---

## 📂 Code

```
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (right >= left) {
        let middle = Math.floor((left + right) / 2);

        if (target === nums[middle]) {
            return middle;
        } else if (target > nums[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
};

```
