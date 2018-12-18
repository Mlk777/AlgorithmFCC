function steamrollArray(arr) {
  let trueArray = (Array.from([...arr]));
  function flatdeep(trueArray) {
    return trueArray.reduce( (acc, val) => Array.isArray(val) ? acc.concat(flatdeep(val)) : acc.concat(val), []);
  }
  
  return flatdeep(trueArray);
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));