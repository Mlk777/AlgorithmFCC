function destroyer(arr) {
  let tab = [];
  let temp = [];
  for (let i = 1; i < arguments.length; i++) {
    tab.push(arguments[i]);
  }
  
  arr.map(element => {
    if (!tab.includes(element)) {
      temp.push(element);
    }
  })

  return temp;
}

console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));