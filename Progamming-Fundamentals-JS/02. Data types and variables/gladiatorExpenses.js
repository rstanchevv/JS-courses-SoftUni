function gladiatorExpenses(lostFigts, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let expenses = 0;
    let helmetBreaksCounter = 0;
    let swordBreaksCounter = 0;
    let armorBreaksCounter = 0;
    let shieldBreaksCounter = 0;
    for (let i = 1; i <= lostFigts; i++){
        if (i % 2 === 0){
            helmetBreaksCounter++;
        }
        if (i % 3 === 0){
            swordBreaksCounter++;
        }
        if (i % 2 ===0 && i % 3 === 0 ){
            shieldBreaksCounter++
            if (shieldBreaksCounter % 2 === 0){
                armorBreaksCounter++
            }
        }
    }
    expenses = helmetPrice * helmetBreaksCounter + swordPrice * swordBreaksCounter + armorBreaksCounter * armorPrice + shieldBreaksCounter * shieldPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    
    )