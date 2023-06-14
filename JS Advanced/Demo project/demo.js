function add(n){
  return (b) => {
    return (c) => {
      return n + b + c
    }
  }
}
console.log(add(1)(2)(3))