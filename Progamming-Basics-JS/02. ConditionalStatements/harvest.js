function harvest(input){
    let ploshtLoze = Number(input[0]);
    let kgGrozdeza1Kv = Number(input[1]);
    let nujniLitriVino = Number(input[2]);
    let broiRabotnici = Number(input[3]);

    let grozde = ploshtLoze * kgGrozdeza1Kv;
    let rekoltaZaVino = (0.4 * grozde) / 2.5;
    
    if (rekoltaZaVino < nujniLitriVino){
        let nedostigNaVino = Math.floor(nujniLitriVino - rekoltaZaVino);
        console.log(`It will be a tough winter! More ${nedostigNaVino} liters wine needed.`)
    } else {
        let ostatyk = Math.ceil(rekoltaZaVino - nujniLitriVino);
        let litersForRabotnik = Math.ceil(ostatyk / broiRabotnici);
        console.log(`Good harvest this year! Total wine: ${rekoltaZaVino} liters.`)
        console.log(`${ostatyk} liters left -> ${litersForRabotnik} liters per person.`)
    }
    
}
harvest([650, 2, 175, 3])