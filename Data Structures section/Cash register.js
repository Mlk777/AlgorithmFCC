const currencyValue = [
  ['ONE HUNDRED', 100.0],
  ['TWENTY', 20.0],
  ['TEN', 10.0],
  ['FIVE', 5.0],
  ['ONE', 1.0],
  ['QUARTER', 0.25],
  ['DIME', 0.1],
  ['NICKEL', 0.05],
  ['PENNY', 0.01]
];

function checkCashRegister(price, cash, cid) {
  let result = { status: '', change: [] };
  let change = cash - price;
  let changeArray,
    updatedChangeArray = [];
  let concatArray = currencyValue;
  let flattenCid = [...cid].reverse();
  let acc;

  //total in drawer
  let drawerTotal = Array.from(
    cid.map(element => {
      return element[1];
    })
  )
    .reduce((acc, curr) => {
      return acc + curr;
    })
    .toFixed(2);
  // console.log(drawerTotal);

  //Concat the cid and currencyValue array
  for (let i = 0; i < currencyValue.length; ) {
    for (let j = 0; j < flattenCid.length; j++) {
      [...concatArray][i].push(...flattenCid[j]);
      i++;
    }
  }

  //We will only loop throught element < change
  changeArray = concatArray.filter(element => {
    return element[1] < change;
  });

  if (drawerTotal < change) {
    result.status = 'INSUFFICIENT_FUNDS';
    return result;
  } else if (drawerTotal == change) {
    result.status = 'CLOSED';
    result.change = cid;
    return result;
  } else {
    for (let i = 0; i < changeArray.length; ) {
      acc = 0;
      while (changeArray[i][3] > 0 && change >= changeArray[i][1]) {
        change -= changeArray[i][1];
        changeArray[i][3] -= changeArray[i][1];
        acc += changeArray[i][1];
        change = change.toFixed(2);
      }
      if (acc > 0) updatedChangeArray.push([changeArray[i][0], acc]);
      i++;
    }
  }

  if (change > 0) {
    result.status = 'INSUFFICIENT_FUNDS';
    return result;
  }

  result.change = updatedChangeArray.filter(element => {
    return element[1] != 0;
  });

  result.change = updatedChangeArray;
  result.status = 'OPEN';
  return result;
}

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 1],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0]
//   ])
// );

// console.log(
//   checkCashRegister(3.26, 100, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100]
//   ])
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0]
//   ])
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 1],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0]
//   ])
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.5],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0]
//   ])
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100]
//   ])
// );
