function vacation(input){
    let index = 0;
    let sumNeededForTrip = Number(input[index]);
    index++
    let currentMoney = Number(input[index]);
    index++
    let spendOrSave = input[index];
    index++
    let amount = Number(input[index]);
    index++;
    let spendCounter = 0;
    let numberOfDays = 0;
    while (currentMoney < sumNeededForTrip){
        numberOfDays++
        if (currentMoney < 0){
            currentMoney = 0;
        }
        if (spendOrSave === "spend"){
            currentMoney -= amount;
            spendCounter++
        }
        if (spendOrSave === "save"){
            currentMoney += amount;
            spendCounter = 0;
        }
        if (spendCounter === 5){
            console.log(`You can't save the money.`)
            console.log(numberOfDays)
            return;
        }
        spendOrSave = input[index];
        index++
        amount = Number(input[index]);
        index++
    }
    console.log(`You saved the money for ${numberOfDays} days.`)
}

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])


