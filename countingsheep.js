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

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

// console.log(factorial(5));

// Fibonacci
// input: 7
// output: 13
// 1 1 2 3 5 8 13
// function fib(num) {
//   if (num <= 1) {
//     return num;
//   }

//   return fib(num-1) + fib(num-2);
// }
// console.log(fib(10));

// much faster using memo
// function fib(num, memo) {
//   memo = memo || {};
//   if (memo[num]) return memo[num];
//   if (num <= 1) {
//     return num;
//   }
//   return memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
// }

//Anagrams

// function anagram(str) {
//   if (str.length < 2) return str;

//   let results = [];
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (str.indexOf(char) !== i) continue;

//     let remainingStr = str.slice(0, i) + str.slice(i + 1, str.length);

//     for (let subResults of anagram(remainingStr))
//       results.push(char + subResults);
//   }
//   return results;
// }

// console.log(anagram('super'));

// Animal Hierarchy
// const animalHierarchy = [
//   { id: 'Animals', parent: null },
//   { id: 'Mammals', parent: 'Animals' },
//   { id: 'Dogs', parent: 'Mammals' },
//   { id: 'Cats', parent: 'Mammals' },
//   { id: 'Golden Retriever', parent: 'Dogs' },
//   { id: 'Husky', parent: 'Dogs' },
//   { id: 'Bengal', parent: 'Cats' }
// ]

// // ==============================
// function traverse(animalHierarchy, parent) {
//   let node = {};
//   animalHierarchy.filter(item => item.parent === parent)
//     .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
//   return node;
// }
// console.log(traverse(animalHierarchy, null));

// const orgChart = [
//   { name: 'Zuckerberg', parent: null },
//   { name: 'Schroepfer', parent: 'Zuckerberg' },
//   { name: 'Schrage', parent: 'Zuckerberg' },
//   { name: 'Sandberg', parent: 'Zuckerberg' },
//   { name: 'Bosworth', parent: 'Schroepfer' },
//   { name: 'Zhao', parent: 'Schroepfer' },
//   { name: 'Steve', parent: 'Bosworth' },
//   { name: 'Kyle', parent: 'Bosworth' },
//   { name: 'Andra', parent: 'Bosworth' },
//   { name: 'Richie', parent: 'Zhao' },
//   { name: 'Sofia', parent: 'Zhao' },
//   { name: 'Jen', parent: 'Zhao' },
//   { name: 'VanDyck', parent: 'Schrage' },
//   { name: 'Swain', parent: 'Schrage' },
//   { name: 'Sabrina', parent: 'VanDyck' },
//   { name: 'Michelle', parent: 'VanDyck' },
//   { name: 'Josh', parent: 'VanDyck' },
//   { name: 'Blanch', parent: 'Swain' },
//   { name: 'Tom', parent: 'Swain' },
//   { name: 'Joe', parent: 'Swain' },
//   { name: 'Goler', parent: 'Sandberg' },
//   { name: 'Hernandez', parent: 'Sandberg' },
//   { name: 'Moissinac', parent: 'Sandberg' },
//   { name: 'Kelley', parent: 'Sandberg' },
//   { name: 'Eddie', parent: 'Goler' },
//   { name: 'Julie', parent: 'Goler' },
//   { name: 'Annie', parent: 'Goler' },
//   { name: 'Rowi', parent: 'Hernandez' },
//   { name: 'Inga', parent: 'Hernandez' },
//   { name: 'Morgan', parent: 'Hernandez' },
//   { name: 'Amy', parent: 'Moissinac' },
//   { name: 'Chuck', parent: 'Moissinac' },
//   { name: 'Vinni', parent: 'Moissinac' },
//   { name: 'Eric', parent: 'Kelley' },
//   { name: 'Ana', parent: 'Kelley' },
//   { name: 'Wes', parent: 'Kelley' }
// ];

// function traverse(orgChart, parent) {
//   let node = {};
//   orgChart
//     .filter(item => item.parent === parent)
//     .forEach(item => (node[item.name] = traverse(orgChart, item.name)));
//   return node;
// }
// let doc = traverse(orgChart, null);

// function traverseA(doc, depth = 0) {
//   let indent = ' '.repeat(depth * 4);
//   Object.keys(doc).forEach(key => {
//     console.log(indent + key);
//     traverseA(doc[key], depth + 1);
//   });
// }

// traverseA(doc);




// Iterative version
// Solve all the questions above iteratively.

// Counting Sheep
// function countingSheep(num) {
//   for (let i = num; i > 0; i--) {
//     console.log(i + ' - Another sheep jump over the fence');
//   }
// }

// countingSheep(3);

//Array Doubling

// function doubleArr(arr) {
//   console.log(arr.map(item => item * 2));
// }

// doubleArr([1, 2, 3]);

// Reverse String
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverseString('hello'));

//Triangular Number

// function triangulerNum(n) {
//   return (n * (n + 1)) / 2;
// }

// console.log(triangulerNum(9));

//String Splitter

// function splitter(str, sep) {
//   return str.split(sep);
// }

// console.log(splitter('The quick brown fox jumped over the lazy dog', ' '));

// Binary Representation
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

// function dec2bin(dec) {
//   return (dec >>> 0).toString(2); // unsigned right shift bitwise operator
// }
// console.log(dec2bin(25));

// factorial
// function factorial(n) {
//   let result = 1;
//   for (let i=1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(5));



//Fibonacci
// function fib(n) {
//   let arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 2] + arr[i - 1]);
//   }
//   return arr[n];
// }

// console.log(fib(9));


// Anagram
function swap(chars, i, j) {
  var tmp = chars[i];
  chars[i] = chars[j];
  chars[j] = tmp;
}

function getAnagrams(input) {
  let counter = [],
    anagrams = [],
    chars = input.split(''),
    length = chars.length,
    i;

  for (i = 0; i < length; i++) {
    counter[i] = 0;
  }

  anagrams.push(input);
  i = 0;
  while (i < length) {
    if (counter[i] < i) {
      swap(chars, i % 2 === 1 ? counter[i] : 0, i);
      counter[i]++;
      i = 0;
      anagrams.push(chars.join(''));
    } else {
      counter[i] = 0;
      i++;
    }
  }

  return anagrams;
}

console.log(getAnagrams('east'));


// Animal Hierarchy
// const animalHierarchy = [
//   { id: 'Animals', parent: null },
//   { id: 'Mammals', parent: 'Animals' },
//   { id: 'Dogs', parent: 'Mammals' },
//   { id: 'Cats', parent: 'Mammals' },
//   { id: 'Golden Retriever', parent: 'Dogs' },
//   { id: 'Husky', parent: 'Dogs' },
//   { id: 'Bengal', parent: 'Cats' }
// ];

// function traverse(animalHierarchy, parent) {
//   let node = {};
//   animalHierarchy.filter(item => item.parent === parent)
//     .forEach()
// }