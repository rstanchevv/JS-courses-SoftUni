function addAndRemoveElements(arr) {
  let newArr = [];
  let initialNumber = 1;
  for (const command of arr) {
    switch (command) {
      case "add":
        newArr.push(initialNumber);
        initialNumber += 1;
        break;
      case "remove":
        newArr.pop();
        initialNumber += 1;
    }
  }
  if (newArr.length !== 0) {
    return newArr.join("\n");
  } else {
    return `Empty`;
  }
}
console.log(addAndRemoveElements(["remove", "remove", "remove"]));
