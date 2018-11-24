function getIndexToIns(arr, num) {
  return arr.concat(num).sort( (a,b) => {
   return a - b;
  }).indexOf(num);
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 30));