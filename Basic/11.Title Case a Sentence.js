function titleCase(str) {
  return str.toLowerCase().split(' ').map( element => {
    return element = element.slice(0, 1).toUpperCase() + element.slice(1);
  }).join(' ');
}

console.log(titleCase("I'm a little tea pot"));