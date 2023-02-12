function counterStrike(arr){
    let initialEnergy =  Number(arr[0]);
    let combatCounter = 0;
    let index = 1;
    let distance = arr[index];
    index++
    while (distance != "End of battle"){
        if (initialEnergy - distance < 0){
            console.log(`Not enough energy! Game ends with ${combatCounter} won battles and ${initialEnergy} energy`)
            return;
        }
        combatCounter++
        initialEnergy -= Number(distance);
        if (combatCounter % 3 === 0){
            initialEnergy += combatCounter;
        }
        distance = arr[index];
        index++
    }
    console.log(`Won battles: ${combatCounter}. Energy left: ${initialEnergy}`);
}
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])



