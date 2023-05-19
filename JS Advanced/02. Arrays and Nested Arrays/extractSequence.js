function extractSequence(arr) {
  let newArr = [];
  let max = Number.MIN_SAFE_INTEGER;
  for (const number of arr) {
    if (number >= max) {
      max = number;
      newArr.push(max);
    }
  }

  return newArr;
}
extractSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
