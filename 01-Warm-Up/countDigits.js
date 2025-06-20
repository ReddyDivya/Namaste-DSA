// countDigits.js

// Function to count the number of digits in a number
function countDigits(n) {
    let count = 0;

    // Convert negative numbers to positive to ignore the sign
    n = Math.abs(n);

    // Special case: if number is 0, return 1 because it has 1 digit
    if (n == 0)
        return 1;

    // Loop to divide the number by 10 until it becomes 0
    while (n > 0) {
        n = Math.floor(n / 10); // Remove the last digit
        count++;                // Increment digit count
    }

    return count; // Return the total number of digits
}

// Test cases
console.log(countDigits(-298));     // Output: 3  → Digits: 2, 9, 8
console.log(countDigits(524938));   // Output: 6  → Digits: 5, 2, 4, 9, 3, 8
console.log(countDigits(1232138));  // Output: 7  → Digits: 1, 2, 3, 2, 1, 3, 8
