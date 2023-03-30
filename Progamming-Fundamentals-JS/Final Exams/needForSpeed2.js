function needForSpeed2(arr){
    let numberOfCars = Number(arr.shift());
    let obj = {};
    for (let i = 0; i < numberOfCars; i++){
        let [car,mileage,fuel] = arr[0].split("|");
        obj[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel),
        }
        arr.shift();
    }
    let commands = arr.slice();
    let command = commands.shift();
    while (command !== "Stop"){
        let [currentCommand, car, value1, value2 ] = command.split(" : ");
        switch (currentCommand){
            case "Drive":
                if (obj[car].fuel >= Number(value2)){
                    obj[car].mileage += Number(value1);
                    obj[car].fuel -= Number(value2);
                    console.log(`${car} driven for ${value1} kilometers. ${value2} liters of fuel consumed.`)
                } else {
                    console.log(`Not enough fuel to make that ride`)
                }
                if (obj[car].mileage >= 100000){
                    delete obj[car];
                    console.log(`Time to sell the ${car}!`)
                }
                break;
            case "Refuel":
                if (obj[car].fuel + Number(value1) > 75){
                    value1 = 75 - obj[car].fuel;
                }
                obj[car].fuel += Number(value1);
                console.log(`${car} refueled with ${value1} liters`)
                break;
            case "Revert":
                obj[car].mileage -= Number(value1);
                if (obj[car].mileage < 10000){
                    obj[car].mileage = 10000;
                } else {
                console.log(`${car} mileage decreased by ${value1} kilometers`)
                }
                break;
        }
        command = commands.shift();
    }
    let keys = Object.keys(obj);
    for (const car of keys) {
        console.log(`${car} -> Mileage: ${obj[car].mileage} kms, Fuel in the tank: ${obj[car].fuel} lt.`)
    }
}
needForSpeed2([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]  
  )