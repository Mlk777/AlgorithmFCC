function translatePigLatin(str) {
  var vowel = ["a", "e", "i", "o", "u", "y"];
  console.log(str + "way");
  //console.log(str.slice(1)+str.slice(0, 1)+"ay");
  for (i = 0; i < vowel.length; i++) {
    if (str[0] != vowel[i]) {
      return (str.slice(0) + str.slice(0, 1) + "ay");
      //break;
    }
    else {
      return str + "way";
      //break;
    }
  }
}

translatePigLatin("eight");
