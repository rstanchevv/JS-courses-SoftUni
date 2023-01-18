function oscars(input){
    let actor = input[0];
    let startPoints = Number(input[1]);
    let juries = Number(input[2]);

    for (let i = 3; i < input.length; i += 2){
        let juryName = input[i];
        let juryPoints = Number(input[i + 1]);

        let result = juryName.length * juryPoints / 2;
        startPoints += result
        
        if (startPoints > 1250.5){
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${startPoints.toFixed(1)}!`)
            return;
        }
    }
        let needed = 1250.5 - startPoints;
        console.log(`Sorry, ${actor} you need ${needed.toFixed(1)} more!`)
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])



