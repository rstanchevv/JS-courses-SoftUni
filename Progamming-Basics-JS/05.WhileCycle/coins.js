function coins(input){
    let totalSum = Number(input[0]);
    let exchangeLeft = Math.round(totalSum * 100);
    let coinsUsed = 0;
    while (exchangeLeft > 0){
    if (exchangeLeft >= 200){
        exchangeLeft -=200;
        coinsUsed++
    } else if (exchangeLeft >= 100){
        exchangeLeft -=100;
        coinsUsed++
    } else if (exchangeLeft >= 50){
        exchangeLeft -= 50;
        coinsUsed++;
    } else if (exchangeLeft >= 20){
        exchangeLeft -= 20;
        coinsUsed++;
    } else if (exchangeLeft >= 10){
        exchangeLeft -= 10;
        coinsUsed++
    } else if (exchangeLeft >=  5){
        exchangeLeft -= 5;
        coinsUsed++
    } else if (exchangeLeft >= 2){
        exchangeLeft -= 2;
        coinsUsed++
    } else if (exchangeLeft >= 1){
        exchangeLeft -= 1;
        coinsUsed++
    }
}
    console.log(coinsUsed)
}

coins(["1.23"])