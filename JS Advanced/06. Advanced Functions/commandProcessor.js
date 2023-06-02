function solution() {
  let internalString = '';

  let obj = {
    append(str) { internalString += str},
    removeStart(n) {internalString = internalString.substring(n)},
    removeEnd(n) {internalString = internalString.substring(0, internalString.length - n)},
    print() {console.log(internalString);}
  }
  return obj
}

let firstZeroTest = solution();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
