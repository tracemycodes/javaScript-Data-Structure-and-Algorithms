// Large Factorials

// In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer n and returns the value of n!.

// You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000" as a string.

// For more on factorials, see http://en.wikipedia.org/wiki/Factorial

// NOTES:

//     The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

//     I have removed the use of require in the javascript language.

function factorial(n) {
  let ans = 1;
  let totalSum;

  function add(a, b, j) {
    // console.log(a, b, j);
    let firstStr = b.toString().split('');
    let secStr = b.toString();
    let lastCharCount = secStr.length - 1;
    let ansStr = '';
    let remainder = 0;
    console.log('start');

    for (let i = j; i >= 0; i--) {
      console.log(i);
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
    totalSum = remainder > 0 ? remainder + ansStr : ansStr;
  }

  for (i = 2; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      add(ans, ans, j);
    }
    // ans = totalSum;
  }
}

// console.log(factorial(34));
// factorial(6);

// describe('Tests', () => {
//   it('test', () => {
//     Test.assertEquals(factorial(1), '1', '1!');
//     Test.assertEquals(factorial(5), '120', '5!');
//     Test.assertEquals(factorial(9), '362880', '9!');
//     Test.assertEquals(factorial(15), '1307674368000', '15!');
//   });
// });

function factorial(n) {
  let ans = '1';
  let totalSum = '0';
  let stringAns = 0;

  function add(j) {
    stringAns = Number(totalSum) + Number(ans);

    let firstStr = totalSum.split('');
    let secStr = ans;
    let lastCharCount = secStr.length - 1;
    console.log(stringAns);
  }

  for (i = 2; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      add(j);
    }
    ans = totalSum;
    totalSum = '0';
    // console.log(ans, 'count');
  }
}

factorial(6);
