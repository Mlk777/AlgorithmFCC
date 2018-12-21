function addTogether() {
  let first = arguments[0];
  let testArray = [...arguments].every(element => {
    return typeof element === 'number';
  })

  if (!testArray) {
    return undefined;
  } else if (arguments.length === 1) {
    return function (recurse) {
      if (typeof arguments[0] != 'number') {
        return undefined
      }
      return parseInt(arguments[0]) + first;
    }
  } else {
    return [...arguments].reduce((acc, val) => {
      return acc + val;
    });
  }
}

console.log(addTogether(2, 3));