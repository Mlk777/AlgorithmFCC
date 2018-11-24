function factorialize(num) {
  let cumul = 1;
  for (let i = 1; i <= num; i++) {
    cumul*=i;
  }
  return cumul;
}

console.log(factorialize(0));