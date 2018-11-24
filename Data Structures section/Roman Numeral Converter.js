function convertToRoman(num) {
  var numerals = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];

  var cumul = "";

  for (i = 0; i < numerals.length; i++) {
    while (num >= numerals[i][0]) {
      cumul += numerals[i][1];
      num -= numerals[i][0];
    }
  }
  return cumul;
}
