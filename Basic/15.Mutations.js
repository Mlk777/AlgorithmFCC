function mutation(arr) {
  for (let i = 0; i < arr[1].length;) {
    if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) != -1)
      i++;
    else 
      return false
    console.log(arr[1][i]);
  }
  return true;
}

console.log(mutation(["Mary", "Army"]));