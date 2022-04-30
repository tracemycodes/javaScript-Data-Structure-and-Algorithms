// Recover a secret string from random triplets

// There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in the secret string.

// You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.


let secret1 = "whatisup"
let triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]


var recoverSecret = function(triplets) {
  let tripletsArr = [...triplets]
  let newArr = [];
  tripletsArr.forEach(item => {

    for (let i = item.length - 1; i >= 0; i--) {

      let current = item[i],
          prev = item[i + 1],
          next = item[i - 1];
          
          
      if (!newArr.includes(current) && prev === undefined) {
        newArr.unshift(current)
      }
      if (newArr.indexOf(current) < 0) {
        newArr = [...newArr.slice(0, newArr.indexOf(prev)), current, ...newArr.slice(newArr.indexOf(prev), newArr.length)]
      }
      
      if ( newArr.indexOf(current) < newArr.indexOf(next)) {
        newArr.splice(newArr.indexOf(current), 1)
        newArr = [...newArr.slice(0, newArr.indexOf(prev)), current, ...newArr.slice(newArr.indexOf(prev), newArr.length) ]
      }     
  
    }
  })
  return newArr.join('')
}

recoverSecret(triplets1);