function fueltank2(input){
    let fuelType = input[0];
    let fuelLt = Number(input[1]);
    let discount = input[2];

    let gasolineSum = 2.22 * fuelLt;
    let dieselSum = 2.33 * fuelLt;
    let gasSum = 0.93 * fuelLt;
    let gasolineSumAfterDiscount = 2.04 * fuelLt
    let dieselSumAferDisctoun = 2.21 * fuelLt
    let gasSumAferDiscount = 0.85 * fuelLt

    if (fuelType === "Gas"){
        if (discount === "Yes" && fuelLt >= 20 && fuelLt <= 25){
        let gastotalSum = gasSumAferDiscount * 0.92
        console.log(`${gastotalSum.toFixed(2)} lv.`)
    } else if (discount === "Yes" && fuelLt > 25){
        let gastotalSum = gasSumAferDiscount * 0.90
        console.log(`${gastotalSum.toFixed(2)} lv.`)
    } else if (discount === "No" && fuelLt >= 20 && fuelLt <= 25){
        let gastotalSum = gasSum * 0.92
        console.log(`${gastotalSum.toFixed(2)} lv.`)
    } else if (discount === "No" && fuelLt > 25){
        let gastotalSum = gasSum * 0.90
        console.log(`${gastotalSum.toFixed(2)} lv.`)
    } else if (discount === "No" && fuelLt < 20){
        console.log(`${gasSum.toFixed(2)} lv.`)
    } else if (discount === "Yes" && fuelLt < 20){
        console.log(`${gasSumAferDiscount.toFixed(2)} lv.`)
    }
} else if (fuelType === "Diesel"){
    if (discount === "Yes" && fuelLt >= 20 && fuelLt <= 25){
        let dieselTotalSum = dieselSumAferDisctoun * 0.92
        console.log(`${dieselTotalSum.toFixed(2)} lv.`)
    } else if (discount === "Yes" && fuelLt > 25){
        let dieselTotalSum = dieselSumAferDisctoun * 0.90
        console.log(`${dieselTotalSum.toFixed(2)} lv.`)
    } else if (discount === "No" && fuelLt >= 20 && fuelLt <= 25){
        let dieselTotalSum = dieselSum * 0.92
        console.log(`${dieselTotalSum.toFixed(2)} lv.`)
    } else if (discount === "No" && fuelLt > 25){
        let dieselTotalSum = dieselSum * 0.90
        console.log(`${dieselTotalSum.toFixed(2)} lv.`)
    } else if (discount === "No" && fuelLt < 20){
        console.log(`${dieselSum.toFixed(2)} lv.`)
    } else if (discount === "Yes" && fuelLt < 20){
        console.log(`${dieselSumAferDisctoun.toFixed(2)} lv.`)
    }
} else if (fuelType === "Gasoline"){
    if (discount === "Yes" && fuelLt >= 20 && fuelLt <= 25){
        let gasolineTotalSum = gasolineSumAfterDiscount * 0.92
        console.log(`${gasolineTotalSum.toFixed(2)} lv.`)
    } else if (discount === "Yes" && fuelLt > 25){
        let gasolineTotalSum = gasolineSumAfterDiscount * 0.90
        console.log(`${gasolineTotalSum.toFixed(2)} lv.`)
    } else if (discount === "No" && fuelLt >= 20 && fuelLt <= 25){
        let gasolineTotalSum = gasolineSum * 0.92
        console.log(`${gasolineTotalSum.toFixed(2)} lv.`)
    } else if (discount === "No" && fuelLt > 25){
        let gasolineTotalSum = gasolineSum * 0.90
        console.log(`${gasolineTotalSum.toFixed(2)} lv.`)
    } else if (discount === "No" && fuelLt < 20){
        console.log(`${gasolineSum.toFixed(2)} lv.`)
    } else if (discount === "Yes" && fuelLt < 20){
        console.log(`${gasolineSumAfterDiscount.toFixed(2)} lv.`)
    }
}
}
fueltank2(["Gasoline", "25", "No"])