

function worldrecordswimming(input){
    let recordInSecconds = Number(input[0]);
    let distanceinMeters = Number(input[1]);
    let distanceforSecond = Number(input[2]);

    let IvanchoRawPerformance = distanceinMeters * distanceforSecond;
    let waterResistance = (Math.floor(distanceinMeters / 15) * 12.5);
    let IvanchoFinalPerformance = (IvanchoRawPerformance + waterResistance).toFixed(2);

    if  (IvanchoFinalPerformance >= recordInSecconds){
        let failed = (IvanchoFinalPerformance - recordInSecconds).toFixed(2);
        console.log(`No, he failed! He was ${failed} seconds slower.`);
    } else 
        console.log(`Yes, he succeeded! The new world record is ${IvanchoFinalPerformance} seconds.`)
    }

worldrecordswimming([10464, 1500, 20])