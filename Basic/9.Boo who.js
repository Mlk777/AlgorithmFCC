function booWho(bool) {
  /*Old version
  return bool === true || bool === false ? true : false;*/

  return typeof bool === 'boolean';
}

console.log(booWho(1));