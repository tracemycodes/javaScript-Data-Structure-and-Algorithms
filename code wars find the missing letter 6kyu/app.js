// Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function findMissingLetter(array) {
  const alpha = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let letterIndex;
  function getAns(letter, ans) {
    if (letter.toLowerCase() === letter) {
      return ans.toLowerCase();
    } else {
      return ans.toUpperCase();
    }
  }

  for (const letter of array) {
    if (alpha.indexOf(letter.toLowerCase()) >= letterIndex + 2) {
      let ans = alpha[letterIndex + 1];
      return getAns(letter, ans);
    }
    letterIndex = alpha.indexOf(letter.toLowerCase());
  }
}

console.log(findMissingLetter(['O', 'Q', 'R', 'S']));
