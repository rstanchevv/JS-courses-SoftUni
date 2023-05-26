function listProcessor(input) {
  let arr = [];
  let obj = {
    add: string => arr.push(string),
    remove: (string) => {
      while (arr.includes(string)) {
        let indexOfString = arr.indexOf(string);
        arr.splice(indexOfString, 1);
      }
    },
    print: () => console.log(arr.join(",")),
  };
  input.forEach(x => {
    [command,value] = x.split(' ');
    obj[command](value)
  })
}
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);
