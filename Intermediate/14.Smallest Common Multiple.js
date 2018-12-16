//Viable solution but doesn't work in FCC
function smallestCommons(arr) {
  let common = 1;
  let tab = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    tab.push(i);
  }

  do {
    common++;
  } while (
    !tab.every(element => {
      return common % element == 0;
    })
  );
  return common;
}

console.log(smallestCommons([23, 18]));
