'use strict';
// COUNTING SHEEP

// function countsheeps(n) {
//   if (n === 0) return 0;
//   console.log(n + ' - Another sheep jump over the fence');
//   countsheeps(n-1);
// }

// countsheeps(3);

//DOUBLING AN ARRAY

function doubleArr(arr) {
  if (arr.length === 0) return [];
  return [arr[0] * 2, ...doubleArr(arr.slice(1))];
}

console.log(doubleArr([1, 2, 3]));
