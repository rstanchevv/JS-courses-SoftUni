function GCD(num1, num2){
    let gcd = 0;
    for (let i = 10000000; i > 0 ; i--){
        if (num1 % i === 0 && num2 % i === 0){
            gcd = i;
            break;
        }
    }
    gcd !== 0 ? console.log(gcd) : console.log(`No common divisor`)
}
GCD(231321, 31231)