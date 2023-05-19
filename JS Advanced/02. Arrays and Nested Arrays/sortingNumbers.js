function sortingNumbers(arr) {
  let newArr = [];
  let sortedArr = arr.sort((a, b) => a - b);
  while (sortedArr.length > 0) {
    newArr.push(sortedArr.shift());
    newArr.push(sortedArr.pop());
  }
  return newArr;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
