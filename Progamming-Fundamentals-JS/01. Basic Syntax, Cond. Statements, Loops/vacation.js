function vacation(number, type, day){
    let price = 0;
    let sum = 0;
    if (day === "Friday"){
        switch (type){
            case "Students":
                price = 8.45;
                break;
            case "Business":
                price = 10.90;
                break;
            case "Regular":
                price = 15;
                break;
        }
    } else if (day === "Saturday"){
        switch (type){
            case "Students":
                price = 9.80;
                break;
            case "Business":
                price = 15.60;
                break;
            case "Regular":
                price = 20;
                break;
        }
    } else if (day === "Sunday"){
        switch (type){
            case "Students":
                price = 10.46;
                break;
            case "Business":
                price = 16;
                break;
            case "Regular":
                price = 22.50;
                break;
        }
    }
    sum = number * price;
    if (type === "Students" && number >= 30){
        sum = sum * 0.85;
    } else if (type === "Business" && number >= 100){
        let freePrice = 10 * price;
        sum = sum - freePrice;
    } else if (type === "Regular" && (number >= 10 && number <= 20)){
        sum = sum * 0.95;
    }
    console.log(`Total price: ${sum.toFixed(2)}`)
}
vacation(30, "Students", "Sunday")
vacation(40, "Regular", "Saturday")