// Reverse every other word in the string

// Reverse every other word in a given string, then return the string.
// Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word.
// Punctuation marks should be treated as if they are a part of the word in this kata.

/*
------------SOLUTION-----------
*/

function reverse(str) {
  let StrArr = str.split(" ");

  return StrArr.filter((item) => item !== "").map((item, index) => {
    if (index % 2 === 0) {
        return item;
    } else {
        return item.split('').reverse().join("");
    }
  });
}

console.log(reverse("Reverse this  string, please!"));
