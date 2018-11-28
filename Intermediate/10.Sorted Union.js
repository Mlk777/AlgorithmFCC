function uniteUnique(arr) {
  let tab = Array.from(arguments);
  let unique = [];
  unique.push(...arguments[0]);

  for (let i = 1; i < tab.length; i++) {
    for (let j = 0; j < tab[i].length;) {
      if (unique.includes(tab[i][j]))
        j++;
      else
        unique.push(tab[i][j]);
    }
  }
  return unique;
}

console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));