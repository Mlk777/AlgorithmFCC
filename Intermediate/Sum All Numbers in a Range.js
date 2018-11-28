function sumAll(arr) {
  let tab = [];

  if (arr[0] < arr[1]) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      tab.push(i);
    }
  } else {
    for (let i = arr[0]; i >= arr[1]; i--) {
      tab.push(i);
    }
  }

  return tab.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
}

console.log(sumAll([10, 5]));