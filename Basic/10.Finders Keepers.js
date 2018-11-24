function findElement(arr, func) {
  for (let i = 0; i < arr.length;) {
    if (!func(arr[i]))
      i++
    else
      return arr[i];
  }
  return undefined
}

console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));