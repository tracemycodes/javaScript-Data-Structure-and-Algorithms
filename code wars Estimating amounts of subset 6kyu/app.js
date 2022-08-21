// Given a set of elements (integers or string characters) that may occur more than once, we need to know the amount of subsets that none of their values have repetitions. Let's see with an example:

// set numbers = {1, 2, 3, 4}

// The subsets are:

// {{1}, {2}, {3}, {4}, {1,2}, {1,3}, {1,4}, {2,3}, {2,4},{3,4}, {1,2,3}, {1,2,4}, {1,3,4}, {2,3,4}, {1,2,3,4}} (15 subsets, as you can see the empty set, {}, is not counted)

// Let's see an example with repetitions of an element:

// set letters= {a, b, c, d, d}

// The subsets for this case will be:

// {{a}, {b}, {c}, {d}, {a,b}, {a,c}, {a,d}, {b,c}, {b,d},{c,d}, {a,b,c}, {a,b,d}, {a,c,d}, {b,c,d}, {a,b,c,d}} (15 subsets, only the ones that have no repeated elements inside)

// The function est_subsets() (javascript: ``estSubsets()```) will calculate the number of these subsets. It will receive the array as an argument and according to its features will output the amount of different subsets without repetitions of its elements.

// est_subsets([1, 2, 3, 4]) == 15
// est_subsets(['a', 'b', 'c', 'd', 'd']) == 15

// Features of the random tests:

// Low Performance Tests: 40
// Length of the arrays between 6 and 15

// High Performance Tests: 80
// Length of the arrays between 15 and 100 (Python and Ruby) and between 15 and 50 in javascript and Lua

function estSubsets(arr) {
  // i removed duplicating elements with the new Set method
  let newArr = Array.from(new Set(arr));
  let count = 1;
  let sumAns = 0;
  let permutationArr = [];

  // first loop is to get all permutations of my factorial
  for (let i = 1; i <= newArr.length; i++) {
    count = count * i;
    permutationArr.push(count);
  }

  // second loop finds the combination occurrence across each index
  for (let i = 1; i <= newArr.length; i++) {
    let difAns = newArr.length - i;
    if (difAns > 0) {
      let multiAns = permutationArr[i - 1] * permutationArr[difAns - 1];
      sumAns += permutationArr[permutationArr.length - 1] / multiAns;
    } else {
      sumAns++;
    }
  }
  return sumAns;
}

console.log(
  estSubsets([
    'a',
    'z',
    'z',
    'z',
    'b',
    'j',
    'f',
    'k',
    'b',
    'd',
    'j',
    'j',
    'n',
    'm',
    'm',
  ])
);

// answers from other developers

// function estSubsets(arr) {
//     var set_ = new Set(arr);

//     return Math.pow(2, set_.size) - 1;
// }

// function estSubsets(arr) {
//   arr = Array.from(new Set(arr));
//   var ans = [];
//   var l = arr.length;
//   for(var i=1; i<=l; i++){
//     ans.push( fac(l) / (fac(i) * fac(l - i)))
//   }
//   return Math.round(ans.reduce((a,b) => a+b,0))
// }

// function fac(n){
//   var ans = 1;
//   for(var i=1; i<=n; i++){
//     ans *= i
//   }
//   return ans
// }
