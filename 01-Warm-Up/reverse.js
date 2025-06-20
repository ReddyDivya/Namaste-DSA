var reverse = function(x) {
  let xCopy = x;         // Store the original number to check later if it's negative
  x = Math.abs(x);       // Work with the absolute value to simplify reversing logic

  let rev = 0;           // Initialize reversed number as 0

  // Reverse the number digit by digit
  while (x > 0) {
    let last = x % 10;           // Get the last digit
    rev = rev * 10 + last;       // Append the last digit to the reversed number
    x = Math.floor(x / 10);      // Remove the last digit from x
  }

  // If the reversed number exceeds 32-bit signed integer range, return 0
  if (rev > 2**31 - 1) return 0;

  // Return reversed number; if original number was negative, return its negative
  return xCopy < 0 ? -rev : rev;
};

console.log(reverse(123)); // 321
