# Linear Search (JavaScript)

## 📌 Introduction
Linear Search is the simplest searching algorithm.  
It goes through each element in the array one by one until the target is found or the array ends.  
It works on both sorted and unsorted arrays.

---

## 🔎 Procedure
1. Start from the first element of the array.  
2. Compare each element with the target.  
3. If a match is found, return its index.  
4. If the target is not found, return `-1`.

---

## 📝 Pseudocode


---

## 💻 Code (JavaScript)

```javascript
var linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([4, 9, 1, 0, 2], 3)); // -1
console.log(linearSearch([4, 9, 1, 0, 2], 9)); // 1
console.log(linearSearch([4, 9, 1, 0, 2], 1)); // 2

```

## Output
```
-1
1
2
```

## Time & Space Complexities

### Time Complexity

```
Best Case: O(1)
Worst Case: O(n)
Average Case: O(n)
```

### Space Complexity: O(1)
