// function demo(food, hay, cover, weight) {
    function demo(input) {
        // exam input comes as array
        let [food, hay, cover, weight] = input;
    
        let foodGr = food * 1000;
        let hayGr = hay * 1000;
        let coverGr = cover * 1000;
        let weightGr = weight * 1000;
        let days = 1;
    
        while (days <= 30) {
            foodGr -= 300;
            if (days % 2 === 0) {
                hayGr -= (foodGr * 5) / 100;
            }
            if (days % 3 === 0) {
                coverGr -= weightGr * 0.3333;
            }
            // days++ used at the end of the cycle
            days++;
        }
        let foodKg = foodGr / 1000;
        let hayKg = hayGr / 1000;
        let coverKg = coverGr / 1000;
    
        // foodKg, hayKg, coverKg in validations
        if (foodKg >= 0 && hayKg >= 0 && coverKg >= 0) {
            console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`)
            // || must be used for other case
        } else if (foodKg < 0 || hayKg < 0 || coverKg < 0) {
            console.log('Merry must go to the pet store!') // '!' must be used in message
        }
    
    }
    demo()