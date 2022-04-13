// Bit Counting

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


function countBits (n) {
   const base = (n).toString(2).split('');
   return [...base].filter(item => item == 1).length
};


console.log(countBits(1234));
