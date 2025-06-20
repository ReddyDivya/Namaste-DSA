// isPalindrome.js

var isPalindrome = function (n) {
  // Negative numbers can't be palindromes (e.g., -121 != 121-)
  if (n < 0) return false;

  let rev = 0;       // Initialize a variable to store the reversed number
  let x = n;     // Store the original number for comparison later

  // Reverse the number by extracting digits one by one
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem; // Add last digit of x to rev
    n = Math.floor(n / 10);    // Remove the last digit from x
  }

  // If the reversed number equals the original → it's a palindrome
  return rev === x;
};

// Test cases
console.log(isPalindrome(121));    // true → 121 reversed is 121
console.log(isPalindrome(-121));   // false → negative numbers are not palindromes
console.log(isPalindrome(0));      // true → 0 reversed is 0
console.log(isPalindrome(10));     // false → 10 reversed is 01 ≠ 10
