function fueltank(input){
    let fueltype = input[0];
    let fuelLt = Number(input[1]);

    if (fueltype === "Gas" || fueltype === "Diesel" || fueltype === "Gasoline"){
        if (fuelLt >= 25){
        console.log(`You have enough ${fueltype.toLowerCase()}.`)
    } else {
        console.log(`Fill your tank with ${fueltype.toLowerCase()}!`)
    }
}
else {
    console.log(`Invalid fuel!`)
}
}
fueltank(["Diesel", "10"])