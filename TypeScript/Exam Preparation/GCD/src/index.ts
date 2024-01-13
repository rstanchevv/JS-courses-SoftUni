function GCD(num1: number, num2: number):void{
    let greatestCommonDivisor: number = 0;
    for (let i = 0; i <= num1; i++){
        if (num1 % i == 0 && num2 % i == 0){
            greatestCommonDivisor = i;
        }
    }

    console.log(greatestCommonDivisor)
}

GCD(15, 5)