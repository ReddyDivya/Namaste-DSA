// Initial unsorted array
let arr = [4, 5, 1, 3, 9];

function insertionSort(arr) {
  let n = arr.length; // Get the length of the array

  // Loop through the array starting from index 1
  for (let i = 1; i < n; i++) {
    let curr = arr[i];     // The current element to be placed in correct position
    let prev = i - 1;      // Index of the previous element

    // Shift elements of arr[0..i-1] that are greater than curr
    // Move them one position ahead to make space for curr
    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }

    // Place the current element in its correct position
    arr[prev + 1] = curr;
  }

  return arr; // Return the sorted array
}

// Call the function and store the result
let result = ;

// Print the sorted array
console.log(insertionSort(arr));//[1, 3, 4, 5, 9]
