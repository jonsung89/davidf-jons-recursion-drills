'use strict';
// COUNTING SHEEP

// function countSheeps(n) {
//   if (n === 0) return 0;
//   console.log(n + ' - Another sheep jump over the fence');
//   countSheeps(n-1);
// }

// countSheeps(3);

//DOUBLING AN ARRAY
// function doubleArr(arr) {
//   if (arr.length === 0) return [];
//   return [arr[0] * 2, ...doubleArr(arr.slice(1))];
// }

// console.log(doubleArr([1, 2, 3]));

// Reverse String
// function reverseString(str) {
//   if (str.length === 0) return '';
//   const newChar = str.slice(-1);

//   return newChar + reverseString(str.slice(0,-1));
// }

// console.log(reverseString('hello'));

//nth Triangular Number
// function triangulerNum(n) {
//   if (n === 0) return 0;

//   return n + triangulerNum(n - 1);
// }

// console.log(triangulerNum(7));

// String Splitter
// input: "The quick brown fox jumped over the lazy dog"
// output: ["The", "quick", "brown", ...]
// function stringSplitter(str, sep) {
//   let index = str.indexOf(sep);

//   if (index === -1) {
//     return str;
//   }

//   return [str.slice(0, index)].concat(stringSplitter(str.slice(index + 1), sep));
// }

// console.log(stringSplitter('The quick brown fox jumped over the lazy dog', ' '));

// function stringSplitter(str, sep) {
//   if(str.length === 0) return [];

//   if (str[0] !== sep) {
//     return [str[0], ...stringSplitter(str.slice(1), sep)];
//   }
//   return stringSplitter(str.slice(1), sep);
// }

// Binary Representation
// input: 25
// output: 11001
// 1. break down 25 into pieces
// 2. take the number and divide it by 2
// 3. find a way to represent 0 and 1
// 4. take the mod by 2 to get 0 and 1

// function binaryRep(num) {
//   if (num === 0) {
//     return '';
//   }
//   const binary = Math.floor(num % 2); // 1s and 0s
//   // 25 % 2 = 1
//   // binaryRep(12)
//   return binaryRep(Math.floor(num / 2)) + binary;
// }

// console.log(binaryRep(25));

//Factorial

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(3));
