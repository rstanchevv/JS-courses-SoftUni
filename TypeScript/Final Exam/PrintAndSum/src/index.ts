function printAndSum(startNumber:number, endNumber:number):void{
    let sum: number = 0;
    let numbersArr: number[] = []
    for (let i = startNumber; i <= endNumber; i++){
        numbersArr.push(i)
        sum+=i;
    }
    console.log(numbersArr.join(' '))
    console.log(`Sum: ${sum}`)
}

printAndSum(50,60)
