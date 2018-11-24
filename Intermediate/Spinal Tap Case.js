
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var arr = [];
  str.split(' ').forEach(element => {
    //console.log(element.toLowerCase()+"-");
    arr.push(element.toLowerCase() + "-")
  });

  console.log(arr.join('').substring(0, arr.join('').length - 1));

}

spinalCase('This Is Spinal Tap');