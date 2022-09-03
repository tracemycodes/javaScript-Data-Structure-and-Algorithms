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
  let firstStr = a.length >= b.length ? a.split('') : b.split('');
  let secStr = a.length < b.length ? a : b;
  let lastCharCount = secStr.length - 1;
  let ansArr = '';
  let remainder = 0;

  for (let i = firstStr.length - 1; i >= 0; i--) {
    let inverseCount = firstStr.length - 1 - i;
    const sumOne = Number(firstStr[i]);
    const sumTwo = Number(secStr.charAt(lastCharCount - inverseCount));
    let sumAns = sumOne + sumTwo + remainder;

    if (sumAns > 9) {
      remainder = 1;
      sumAns = sumAns.toString().charAt(1);
    } else {
      remainder = 0;
      sumAns = sumAns.toString();
    }
    ansArr = sumAns + ansArr;
  }
  return ansArr;
}

console.log(add('63829983432984289347293874', '90938498237058927340892374089'));
