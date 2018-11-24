function chunkArrayInGroups(arr, size) {
  let tab = [];
  for (let i = 0; i < arr.length; i+=size) {
   tab.push(arr.slice(i, i+size));
  }
  return tab;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));