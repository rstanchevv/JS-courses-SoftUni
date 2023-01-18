function transportPrice(input){
    let dayOrNight = input[1];
    let distance = Number(input[0]);

    let taxiDayPrice = 0.70 + (distance * 0.79);
    let taxiNightPrice = 0.70 + (distance * 0.90);
    let autobus = 0.09 * distance;
    let train = 0.06 * distance;


    if (distance < 20 && dayOrNight === "day"){
        console.log(taxiDayPrice.toFixed(2))
    } else if (distance < 20 && dayOrNight === "night"){
        console.log(taxiNightPrice.toFixed(2))
    } else if (distance < 100){
        console.log(autobus.toFixed(2))
    } else{
        console.log(train.toFixed(2))
    }
}
transportPrice(["7", "night"])