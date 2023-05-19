function listOfNames(arr) {
  let sortedArr = arr.sort((a, b) => a.localeCompare(b));
  let number = 1;
  for (let i = 0; i < sortedArr.length; i++) {
    sortedArr[i] = `${number}.${sortedArr[i]}`;
    number++;
  }
  return sortedArr.join("\n");
}
console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));
