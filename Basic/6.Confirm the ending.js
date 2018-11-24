function confirmEnding(str, target) {
  return str.slice(-target.length) == target ? true : false; 
}

console.log(confirmEnding("Open sesame", "same"));