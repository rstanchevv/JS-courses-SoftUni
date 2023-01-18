function backToThePast(input){
    let receivedMoney = Number(input[0]);
    let finalYear = Number(input[1]);
    let spentMoney = 0;
    let years = 17;

    for (let i = 1800; i <= finalYear; i++){
        years++
        if (i % 2 === 0){
            spentMoney += 12000;
        } else {
            spentMoney += 12000 + (50 * years)
        }
    }
    if (receivedMoney >= spentMoney){
        let remaining = receivedMoney - spentMoney;
        console.log(`Yes! He will live a carefree life and will have ${remaining.toFixed(2)} dollars left.`)
    } else {
        let needed = spentMoney - receivedMoney;
        console.log(`He will need ${needed.toFixed(2)} dollars to survive.`)
    }
}
backToThePast(["100000.15", "1808"])