function truncateString(str, num) {
  /*if (num > str.length | str.length == num) {
    return str;
  }
  else {
    return str.slice(0, num)+"...";
  }*/
  return (num > str.length | str.length == num) ? str : str.slice(0, num)+"...";
}

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));