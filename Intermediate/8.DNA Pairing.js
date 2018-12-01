function pairElement(str) {
  let tab = [];
  str.split('').map(element => {
    switch (element) {
      case "A":
        tab.push(["A", "T"]);
        break;
      case "T":
        tab.push(["T", "A"]);
        break;
      case "C":
        tab.push(["C", "G"]);
        break;
      case "G":
        tab.push(["G", "C"]);
        break;
    }
  });
  return tab;
}

console.log(pairElement("ATCGA"));