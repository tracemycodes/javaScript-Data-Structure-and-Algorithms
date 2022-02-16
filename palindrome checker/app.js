// Palindrome Checker

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.


// /\w+/

// console.log("object");

let figurs = [1, 3, 5, 6] ;
let figuers = [1, 3, 9, 6] ;

for (let i = 0; i < figurs.length; i++) {
  const element = figurs[i];
  if (figurs.indexOf(element) == figuers.indexOf(element)) {
    console.log(true, element);
  } else {
    console.log(false, element);
  }
  
}

// console.log(figurs.includes);

// const replaced = str.replace(/[^a-z0-9]/gi, '');

function palindrome(str) {
  // return true;
  // console.log(str);
  const newStr = str.replace(/[^a-z0-9]/gi, '').split('')
  const reverseStr = newStr.reverse()
  // console.log(newStr.reverse());
  // console.log(reverseStr.includes(newStr))
}

palindrome("eye");