function accountBalance(input){
    let deposit = input[0];
    let index = 1;
    let balance = 0;
    while (deposit !== "NoMoreMoney"){
        let amount = Number(deposit);
        if (amount < 0){
            console.log(`Invalid operation!`)
            break;
        }
        balance += amount
        console.log(`Increase: ${amount.toFixed(2)}`)
        deposit = input[index];
        index++
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}
accountBalance(["5.51",

"69.42",

"100",

"NoMoreMoney"])