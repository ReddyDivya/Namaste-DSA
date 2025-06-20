// isPalindrome.js

// Function to check if a given number 'n' is a palindrome
var isPalindrome = function (n) {
  // Negative numbers can't be palindromes (e.g., -121 != 121)
  if (n < 0) return false;

  let rev = 0;   // Initialize a variable to store the reversed number
  let x = n;     // Store the original number for comparison at the end

  // Reverse the number digit by digit
  while (n > 0) {
    let rem = n % 10;        // Get the last digit of the number
    rev = rev * 10 + rem;    // Append the digit to the reversed number
    n = Math.floor(n / 10);  // Remove the last digit from the number
  }

  // Compare the reversed number with the original
  return rev === x;
};

// Test cases to check different scenarios
console.log(isPalindrome(121));    // true → 121 reversed is 121
console.log(isPalindrome(-121));   // false → negative numbers are not
