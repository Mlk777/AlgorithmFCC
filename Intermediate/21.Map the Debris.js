function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  arr.forEach(element => {
    element.orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + element.avgAlt, 3) / GM)
    );
    delete element.avgAlt;
  });
  return arr;
}

//Alternative solution (bad but work)
/*
function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  let tab = [];
  arr.forEach(element => {
    element.avgAlt = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + element.avgAlt, 3) / GM));
    tab.push({ name: element.name, orbitalPeriod: element.avgAlt });
  });
  return tab;
}
*/

console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 }
  ])
);
