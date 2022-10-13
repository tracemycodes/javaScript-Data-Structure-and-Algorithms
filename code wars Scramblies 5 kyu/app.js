// Scramblies

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  let firstStr = [...str1];
  let secondStr = [...str2];
  for (const ite of secondStr) {
    let position = firstStr.indexOf(ite);
    if (!firstStr.includes(ite)) {
      return false;
    }
    firstStr.splice(position, 1);
  }
  return true;
}

console.log(scramble('katas', 'steak'));
