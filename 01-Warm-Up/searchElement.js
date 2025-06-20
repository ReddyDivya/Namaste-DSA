// searchElement.js

// Display the purpose of the program
console.log("Searching for an element from an array:");

// Example input array
let arr = [10, 3, 5, 7, 9];

// Function to search for an element 'x' in the array
function searchElement(arr, x) {
    // Loop through each element of the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element matches 'x', return its index
        if (arr[i] == x) {
            return i;  // Element found → return index
        }
    }
    // If element not found, return -1
    return -1;
} // searchElement

// Call the function with the array and the element to search (9)
let result = searchElement(arr, 9); // 9 is at index 4
console.log(result); // Output: 4
