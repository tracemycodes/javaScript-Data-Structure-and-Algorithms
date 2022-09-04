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
  let ansStr = '';
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
    ansStr = sumAns + ansStr;
  }
  return remainder > 0 ? remainder + ansStr : ansStr;
}

console.log(add('888', '222'));

// other developers solutions on codewars

// function add(a, b) {
//   var res = '',
//     c = 0;
//   a = a.split('');
//   b = b.split('');
//   while (a.length || b.length || c) {
//     c += ~~a.pop() + ~~b.pop();
//     res = (c % 10) + res;
//     c = c > 9;
//   }
//   return res;
// }

// const add = (a, b, r = 0) =>
//   ((res) =>
//     a == b && b == '' && r == 0
//       ? ''
//       : add(a.slice(0, -1), b.slice(0, -1), (r = ~~(res / 10))) + (res % 10))(
//     +a.slice(-1) + +b.slice(-1) + +r
//   ).replace(/^0+/g, '');

// lessons learnt

// The “double tilde” (~~) operator is a double NOT Bitwise operator. Use it as a substitute for Math.floor(), since it’s faster.

// Math.floor rounds up our number to the lowest fixed value

const getFixedNumber = (digit) => {
  return Math.floor(digit);
};

// The “double tilde” (~~) operator is a double NOT Bitwise operator, takes out the decimal away from the number

const getWholeNumber = (num) => {
  return ~~num;
};

console.log(getWholeNumber(44.5657)); // returns 44
console.log(getFixedNumber(44.5657)); // returns 44
