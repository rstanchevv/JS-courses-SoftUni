function rectangle(width, height, color) {
  let rectangleObj = {
    width,
    height,
    color: translateToUpperFirstLetter(color),
    calcArea() {
      return Number(rectangleObj.width * rectangleObj.height);
    },
  };
  return rectangleObj;
  function translateToUpperFirstLetter(string) {
    let firstLetter = string[0].toUpperCase();
    string = string.replace(string[0], firstLetter);
    return string;
  }
}
let rect = rectangle(4, 5, "red");

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());
