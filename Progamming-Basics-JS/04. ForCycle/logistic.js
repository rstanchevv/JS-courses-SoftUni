function logistic(input){
    let countCargo = Number(input[0]);
    let cargo = 0;
    let bus = 0;
    let truck = 0;
    let train = 0;
    let sumCargo = 0;
    for (let i = 1; i <= countCargo; i++){
    cargo = Number(input[i])
    sumCargo += cargo
    if (cargo < 4){
        bus += cargo
    } else if (cargo < 12){
        truck += cargo
    } else if (cargo >= 12){
        train += cargo
    }
}
    let busPrice = bus * 200;
    let truckPrice = truck * 175;
    let trainPrice = train * 120;
    let averagePerTon = (busPrice + truckPrice + trainPrice) / sumCargo;
    let busPercent = (bus / sumCargo) * 100;
    let truckPercent = (truck / sumCargo) * 100;
    let trainPercent = (train / sumCargo) * 100;

    console.log(`${averagePerTon.toFixed(2)}`);
    console.log(`${busPercent.toFixed(2)}%`)
    console.log(`${truckPercent.toFixed(2)}%`)
    console.log(`${trainPercent.toFixed(2)}%`)
}
logistic(["5","2","10", "20", "1","7"])