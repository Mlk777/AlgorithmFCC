function sumPrimes(num) {
  let tab = [];

  for (let i = 2; i <= num; i++) {
    let bool = false;
    for (var j = 2; j <= i; j++) {
      if (i % j === 0 && j !== i)
        bool = true;
    }
    if (bool === false)
      tab.push(i);
  }

  return tab.reduce((acc, curr) => {
    return acc + curr;
  });
}
console.log(sumPrimes(977));