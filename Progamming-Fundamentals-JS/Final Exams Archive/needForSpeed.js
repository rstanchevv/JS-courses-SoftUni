function needForSpeed(arr){
    let numberOfCars = arr.shift();
    let obj = {}
    for (let i = 0; i < numberOfCars; i++){
        let [carModel, mileage, fuel] = arr[i].split("|");
        obj[carModel] = {
            mileage: Number(mileage),
            fuel: Number(fuel),
        }
    }
    let commands = arr.slice(numberOfCars);
    let command = commands.shift();
    while (command !== "Stop"){
        let commandSplit = command.split(" : ");
        switch (commandSplit[0]){
            case "Drive":
                let [carModel, distance, fuel] = commandSplit.slice(1)
                if (obj[carModel].fuel < Number(fuel)){
                    console.log(`Not enough fuel to make that ride`)
                } else {
                    obj[carModel].fuel -= Number(fuel);
                    obj[carModel].mileage += Number(distance);
                    console.log(`${carModel} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                }
                if (obj[carModel].mileage >= 100000){
                    delete obj[carModel];
                    console.log(`Time to sell the ${carModel}!`);
                }
                break;
            case "Refuel":
                let [refuelCar, refuelFuel] = commandSplit.slice(1)
                let currentFuel = Number(obj[refuelCar].fuel);
                if (currentFuel + Number(refuelFuel) > 75){
                    obj[refuelCar].fuel = 75;
                    let refueled = 75 - currentFuel;
                    console.log(`${refuelCar} refueled with ${refueled} liters`);
                    break;
                } else {
                    obj[refuelCar].fuel += Number(refuelFuel);
                    console.log(`${refuelCar} refueled with ${refuelFuel} liters`)
                }
                break;
            case "Revert":
                let [revertCar, kilometers] = commandSplit.slice(1)
                if (obj[revertCar].mileage - Number(kilometers) < 10000){
                    obj[revertCar].mileage = 10000;
                } else {
                    obj[revertCar].mileage -= Number(kilometers);
                    console.log(`${revertCar} mileage decreased by ${kilometers} kilometers`);
                }
                break;
        }
        command = commands.shift();
    }
    for (const car of Object.keys(obj)) {
        console.log(`${car} -> Mileage: ${obj[car].mileage} kms, Fuel in the tank: ${obj[car].fuel} lt.`)
    }
}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  
  )