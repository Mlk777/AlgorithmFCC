function palindrome(str) {
  let string = str.split('').reverse().join('').toLowerCase().replace(/[\W|_]/gi, '');
  let test = str.split('').join('').replace(/[\W|_]/gi, '').toLowerCase();
  return test == string ? true : false;
}



palindrome("A man, a plan, a canal. Panama");