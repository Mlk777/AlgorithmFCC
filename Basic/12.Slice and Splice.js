function frankenSplice(arr1, arr2, n) {
  let tab = [...arr2]
  tab.splice(n, 0, ...arr1);
  return tab;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));