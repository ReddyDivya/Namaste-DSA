// searchElement.js

console.log("Searching for an element from an array:");

let arr = [10, 3, 5, 7, 9];

function searchElement(arr, x) {
    // Loop through the array to search for element x
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i; // Return the index if element is found
        }
    }

    return -1; // Return -1 if the element is not found
} // searchElement

// Searching for the element 9 in the array
let result = searchElement(arr, 9);
console.log(result); // Output: 4
