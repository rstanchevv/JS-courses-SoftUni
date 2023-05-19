function magicMatrices(arr) {
  let isMagic = true;
  let totalRowSum = arr[0].reduce((a, b) => a + b, 0);
  for (let i = 0; i < arr.length; i++) {
    let rowSum = arr[i].reduce((a, b) => a + b, 0);
    let columnSum = 0;
    for (let j = 0; j < arr.length; j++) {
      columnSum += arr[j][i];
    }
    if (rowSum !== totalRowSum || columnSum !== totalRowSum) {
      return (isMagic = false);
    }
  }
  return isMagic;
}
console.log(
  magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
  ])
);
