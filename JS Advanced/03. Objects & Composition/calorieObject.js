function calorieObject(arr) {
    let obj = {};
  for (let i = 0; i < arr.length; i += 2){
    let product = arr[i];
    let amount = arr[i + 1];
    obj[product] = Number(amount);
  }
  console.log(obj)
}
calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
