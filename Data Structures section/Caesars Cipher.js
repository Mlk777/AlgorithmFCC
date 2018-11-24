function rot13(str) {
  // LBH QVQ VG!
  let tab = [];

  for (let i = 0; i < str.split("").length; i++) {
    tab.push(str.charCodeAt(i));
  }

  let caesar = tab.map(val => {
    if (val == 32 || val == 33 || val == 46 || val == 63) {
      return String.fromCharCode(val);
    } else if (val + 13 <= 90) {
      return String.fromCharCode(val + 13);
    } else if (val + 13 > 90) {
      return String.fromCharCode(val - 13);
    }
  });
  return caesar.join("");
}
