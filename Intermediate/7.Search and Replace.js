function myReplace(str, before, after) {
  const checkUppercase = /([A-Z{1}])/g;
  if (checkUppercase.test(before)) {
    after = after.slice(0, 1).toUpperCase()+after.slice(1);
    return str.replace(before, after);
  }
  else
    return str.replace(before, after);
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));