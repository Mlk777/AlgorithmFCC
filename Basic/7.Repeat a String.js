function repeatStringNumTimes(str, num) {
  let tab = [];
  if (num < 0) {
    return "";
  }
  else {
    for (let i = 1; i <= num; i++) {
      tab.push(str);
    }
    return tab.join('');
  }
}

console.log(repeatStringNumTimes("*", 8));