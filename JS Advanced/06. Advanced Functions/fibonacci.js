function getFibonator(){
    let count = [0, 1]
    return function fib(){
        let indexOfLastNumber = count.length - 1;
        let sum = 0 ;
        for (let i = indexOfLastNumber; i >= indexOfLastNumber - 1; i--){
            sum += count[i];
        }
        count.push(sum);
        return count[count.length - 2]
    }
}
let fib = getFibonator();
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())