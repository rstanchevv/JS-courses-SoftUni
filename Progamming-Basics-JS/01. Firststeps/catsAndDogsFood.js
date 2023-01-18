function catsAndDogsfood(input){
    let catsfood = Number(4);
    let dogsfood = Number(2.50);
    let catsfoodpackets = (Number(input[1]));
    let dogsfoodpackets = (Number(input[0]));
    let sum = (catsfood * catsfoodpackets) + (dogsfood * dogsfoodpackets)
    console.log(`${sum} lv.`);
}
catsAndDogsfood(["5", "4"]);