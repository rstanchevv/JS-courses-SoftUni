function argumentInfo() {
  let obj = {};
  for (const arg of arguments) {
    let typeOf = typeof arg;
    if (!obj.hasOwnProperty(typeOf)) {
      obj[typeOf] = 0;
    }
      obj[typeOf] += 1;
    console.log(`${typeOf}: ${arg}`);
  }
  let sortedObj = Object.entries(obj).sort(([key,value], [key2,value2]) => value2 - value)
  for (const [key, value] of sortedObj) {
    console.log(`${key} = ${value}`)
  }
}
argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
