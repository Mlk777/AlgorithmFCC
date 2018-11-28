function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let missing;
  if (str.length === alphabet.length) {
    return undefined;
  }
  else {
    missing = alphabet.slice(alphabet.indexOf(str.split('')[0]), alphabet.indexOf(str.split('')[0])+str.length+1)
      .split('').filter( element => {
        return str.split('').indexOf(element) < 0;
      })
  }
  return missing.join('');
}

console.log(fearNotLetter("abce"));