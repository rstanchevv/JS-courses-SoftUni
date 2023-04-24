function aggregateElements(arr){
    console.log(arr.reduce((sum, a) => sum += a, 0))
    let sum = 0;
    let output = "";
    for (const el of arr) {
        let number = 1 / el;
        sum += number;
        output += el.toString();
    }
    console.log(sum);
    console.log(output)
}
aggregateElements([1,2,3]);