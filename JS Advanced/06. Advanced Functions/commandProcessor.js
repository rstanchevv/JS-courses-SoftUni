function solution() {
  let obj = {
    string: "",
    append,
    removeEnd,
    removeStart,
    print,
  };
  function append(string) {
    return (this.string = `${this.string}${string}`);
  }
  function removeEnd(number) {
    return (this.string = `${this.string.substring(
      0,
      this.string.length - number
    )}`);
  }
  function print() {
    return console.log(this.string);
  }
  function removeStart(number) {
    let subStringForRemoval = this.string.substring(0, number);
    return (this.string = this.string.replace(subStringForRemoval, ""));
  }
  return obj;
}

let firstZeroTest = solution();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
