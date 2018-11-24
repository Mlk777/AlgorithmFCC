function findLongestWordLength(str) {
  let tab = [];
  str.split(' ').forEach(element => {
    tab.push(element.length);
  });
  return Math.max(...tab);
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));