function bitcoinMining(input){
    let length = input.length;;
    let index = 0;
    let alreadyPurchased = false;
    let firstPurchasedBitcoin = 0;
    let boughtBitcoinsCounter = 0;
    let boughtBitcoins = 0;
    let sumOftheDay = 0;
    let totalSum = 0;
    let daysCounter =0;
    let MiningInGrams = Number(input[index]);
    index++
    while (daysCounter !== length){
        daysCounter++;
        sumOftheDay = MiningInGrams * 67.51;
        if (daysCounter % 3 === 0){
            sumOftheDay = sumOftheDay * 0.70;
        }
        totalSum += sumOftheDay;
        if (totalSum >= 11949.16){
            boughtBitcoins = Math.floor(totalSum / 11949.16);
            boughtBitcoinsCounter += boughtBitcoins;
            if(boughtBitcoins >= 1 && alreadyPurchased === false){
                alreadyPurchased = true;
                firstPurchasedBitcoin = daysCounter;
            }
            totalSum = totalSum - (boughtBitcoins * 11949.16)
        }
        MiningInGrams = Number(input[index]);
        index++
    }
    console.log(`Bought bitcoins: ${boughtBitcoinsCounter}`);
    if(firstPurchasedBitcoin > 0){
    console.log(`Day of the first purchased bitcoin: ${firstPurchasedBitcoin}`);
    }
    console.log(`Left money: ${totalSum.toFixed(2)} lv.`)
}
bitcoinMining([100, 200, 300])