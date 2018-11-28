function sumFibs(num) {
  let base = [1, 1];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const odd = function (el) {
    return el % 2 != 0 && el <= num;
  }

  while (base.slice(-1) <= num) {
    let temp = base.slice(-2).reduce(reducer);
    base.push(temp);
  }

  return base.filter(odd).reduce(reducer);
}

console.log(sumFibs(75025));