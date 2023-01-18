function sumOfNumbers(input){
    let givenNumber = Number(input[0]);
    let index = 1;
    let nextNumber = Number(input[index]);
    let sum = nextNumber
    index++
    while (sum < givenNumber){
        nextNumber = Number(input[index]);
        sum += nextNumber
        index++
    }
    console.log(sum)
}
sumOfNumbers(["20", "1", "2", "3", "4", "5", "6"])