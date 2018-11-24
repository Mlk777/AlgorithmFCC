function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line


  var collectionTab = Object.values(collection);
  for (i = 0; i < collectionTab.length; i++) {
    tabEntries = Object.entries(collectionTab[i]);
    for (j = 0; j < tabEntries.length; j++) {
      //console.log(tabEntries[j]);
      if (Object.entries(source)[0].toString() == tabEntries[j].toString()) {
        arr.push(tabEntries.toString());
      }
      //console.log(Object.entries(source)[0].toString() == tabEntries[j].toString());
    }
    //console.log(Object.entries(test[i])[0]);
    //console.log(Object.keys(test[i]));
    //console.log(Object.values(test[i]));
    //console.log(Object.getOwnPropertyNames(test[i]));
    //console.log(test[i].hasOwnProperty(source));
  }
  console.log(arr);

  // Only change code above this line
  return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });