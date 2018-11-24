function largestOfFour(arr) {
  //Old version
  /* let tab = [];
  arr.map( biggest => {
    tab.push(Math.max(...biggest));
  });
  return tab;*/
  return arr.map(biggest => {
     return Math.max(...biggest);
  })
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));