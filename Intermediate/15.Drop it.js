function dropElements(arr, func) {
  let tab = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      tab.push(...arr.slice(arr.indexOf(arr[i])));
      break;
    }
  }
  return tab;
}

console.log(dropElements([0, 1, 0, 1], function (n) {
  return n === 1;
}));