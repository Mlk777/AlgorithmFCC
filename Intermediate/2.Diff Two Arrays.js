function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.forEach(element => {
    if (!arr2.includes(element)) {
      newArr.push(element);
    }
  });
  arr2.forEach(element => {
    if (!arr1.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));