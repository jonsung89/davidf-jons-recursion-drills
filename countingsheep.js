'use strict';

function countsheeps(n) {
  if (n === 0) return 0;
  console.log(n + ' - Another sheep jump over the fence');
  countsheeps(n-1);
}

countsheeps(3);