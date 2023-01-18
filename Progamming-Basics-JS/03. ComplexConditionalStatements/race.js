function race(input){
    let countJuniors = Number(input[0]);
    let countSeniors = Number(input[1]);
    let raceType = input[2];

    let juniorTrail = 5.50;
    let juniorCross =  8;
    let juniorDownhill = 12.25;
    let juniorRoad  = 20;
    let seniorTrail = 7;
    let seniorCross = 9.50;
    let seniorDownhill = 13.75;
    let seniorRoad = 21.50;
    let moreThan50 = countJuniors + countSeniors >= 50;
    if (raceType === "trail"){
        let collectedsum = (countJuniors * juniorTrail + countSeniors * seniorTrail) * 0.95
        console.log (collectedsum.toFixed(2))
    } else if (raceType === "cross-country"){
        let collectedsum = (countJuniors * juniorCross + countSeniors * seniorCross) * 0.95
        switch (moreThan50){
            case true:
                let sum = collectedsum * 0.75
                console.log(`${sum.toFixed(2)}`)
                break;
                default: console.log(`${collectedsum.toFixed(2)}`)
        }
        
    } else if (raceType === "downhill"){
        let collectedsum = (countJuniors * juniorDownhill + countSeniors * seniorDownhill) * 0.95;
        console.log(`${collectedsum.toFixed(2)}`)
    } else if (raceType === "road"){
        let collectedsum = (countJuniors * juniorRoad + countSeniors * seniorRoad) * 0.95;
        console.log(`${collectedsum.toFixed(2)}`)
    }
}
race(["30", "25", "cross-country"])