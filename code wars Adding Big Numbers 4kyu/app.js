// Adding Big Numbers

// Instructions
// Output

// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example

// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

// Notes

//     The input numbers are big.
//     The input is a string of only digits
//     The numbers are positives

// Mathematics
// Big Integers
// Algorithms

function add(a, b) {
  return parseInt(Number(a) + Number(b))
    .toFixed()
    .toString(); // Fix me!
}

console.log(add('63829983432984289347293874', '90938498237058927340892374089'));
