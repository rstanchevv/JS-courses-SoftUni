function spiceMustFlow(startingYield){
    let remainingYield = startingYield;
    let remaining = 0;
    let totalRemaining = 0;
    let days = 0;
    while (remainingYield >= 100){
        days++
        remaining = remainingYield - 26;
        totalRemaining += remaining;
        remainingYield -=10
    }
    totalRemaining -= 26;
    if (totalRemaining < 0){
        totalRemaining = 0;
    }
    console.log(days);
    console.log(totalRemaining)
}
spiceMustFlow(450)