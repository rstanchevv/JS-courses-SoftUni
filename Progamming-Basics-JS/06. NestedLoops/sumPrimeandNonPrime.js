function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++
    let sumPrime = 0;
    let sumNonPrime = 0;

    while (command !== "stop") {
        let currentNum = Number(command);
        if (currentNum < 0){
            console.log(`Number is negative.`);
            command = input[index];
            index++
            continue;
        }
        let isPrime = true;
        for (let currentDivisor = 2; currentDivisor < currentNum; currentDivisor++) {
            if (currentNum % currentDivisor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime){
            sumPrime += currentNum;
        } else{
            sumNonPrime += currentNum;
        }
        command = input[index];
        index++
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`)
}
    sumPrimeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"])
    
