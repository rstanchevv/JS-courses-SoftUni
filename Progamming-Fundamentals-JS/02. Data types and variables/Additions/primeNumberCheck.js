function primeNumberCheck(num){
    let isPrime = true;
    if (num === 1){
        return;
    }
    for (let i = 2; i < num;i++){
    if (num % i === 0){
        isPrime = false;
    }
    }
    console.log(isPrime)    
}
primeNumberCheck(7)