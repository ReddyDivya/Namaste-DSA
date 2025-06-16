// searchElement.js

console.log("Searching for an element from an array:");

let arr = [10, 3, 5, 7, 9];

function searchElement(arr, x) { 
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] == x) { 
            return i;
        }   
    }

    return -1;
}//searchElement

let result = searchElement(arr, 9);//4
console.log(result);//4
