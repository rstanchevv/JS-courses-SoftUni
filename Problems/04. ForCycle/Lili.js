function Lili(input){
    let LiliYears = Number(input[0]);
    let WashMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let totalMoney = 0;
    let evenBirthdayMoney = 10;
    

    for (let i = 1; i <= LiliYears; i++){

        if (i % 2 === 0){
            totalMoney = totalMoney + (evenBirthdayMoney - 1)
            evenBirthdayMoney = evenBirthdayMoney + 10;
        } else {
            totalMoney = totalMoney + toyPrice
        }
    }
    if (totalMoney >= WashMachinePrice){
        let remaining = totalMoney - WashMachinePrice
        console.log(`Yes! ${remaining.toFixed(2)}`)
    } else {
        let needed = WashMachinePrice - totalMoney
        console.log(`No! ${needed.toFixed(2)}`)
    }

}
Lili(["10", "170.00", "6"])