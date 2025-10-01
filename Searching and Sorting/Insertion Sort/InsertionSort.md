# 📝 Insertion Sort (NDSA)

Insertion Sort is a simple and intuitive sorting algorithm that builds the final sorted array one element at a time.
It works by taking each element from the input and inserting it into its correct position in the already sorted part of the array.
Starting from the second element, it compares the current element with the previous ones, shifting larger elements one position ahead to make space for the current element.
This process continues until all elements are sorted.
Insertion Sort is efficient for small or nearly sorrted datasets and operates in-place without requiring extra memory.

---

## ⚙️ Algorithm Steps
- Start from the second element (index 1) since the first element is trivially “sorted”.
- Store the current element (curr) and compare it with all previous elements.
- Shift the previous elements one position forward if they are greater than the current element.
- Insert the current element (curr) at its correct sorted position.
- Repeat until the whole array is sorted.

---

## 💻 Pseudo Code (JavaScript)

```
function insertionSort(A)
  n = A.length

  for i = 1 to n-1
    curr = A[i]          // current element
    prev = i - 1

    while prev >= 0 and A[prev] > curr
      A[prev + 1] = A[prev]   // shift right
      prev = prev - 1
    end while

    A[prev + 1] = curr   // place curr
  end for

  return A
end function
```

## Time Complexity:
- Best Case Already Sorted.
- Average Case: O(n2)
- Worst Case: O(n2)Every element has to be compared and shifted back to the start.

### Space Complexity: O(1) No extra array is used; sorting is done in-place.



