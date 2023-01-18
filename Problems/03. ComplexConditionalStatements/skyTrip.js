function skiTrip(input){
    let daysToStay = Number(input[0]);
    let room = input[1];
    let survey = input[2];

    let nigtsToStay = daysToStay - 1
    let pricePerNight = ""
    let result = ""
    switch (room){
        case "room for one person":
            pricePerNight = 18.00;
            break;
        case "apartment":
            pricePerNight = 25.00;
            break;
        case "president apartment":
            pricePerNight = 35.00;
            break;
    }

    if (daysToStay < 10){
        switch (room){
            case "room for one person":
                result = nigtsToStay * pricePerNight;
                break;
            case "apartment":
                result = (nigtsToStay * pricePerNight) * 0.70;
                break;
            case "president apartment":
                result = (nigtsToStay * pricePerNight) * 0.90
        }
    } else if (daysToStay >= 10 && daysToStay <= 15){
        switch (room){
            case "room for one person":
                result = nigtsToStay * pricePerNight;
                break;
            case "apartment":
                result = (nigtsToStay * pricePerNight) * 0.65;
                break;
            case "president apartment":
                result = (pricePerNight * pricePerNight) * 0.85
        }
    } else if (daysToStay > 15){
        switch (room){
            case "room for one person":
                result = nigtsToStay * pricePerNight;
                break;
            case "apartment":
                result = (nigtsToStay * pricePerNight) * 0.50;
                break;
            case "president apartment":
                result = (nigtsToStay * pricePerNight) * 0.80;
        }
    }
    if (survey === "positive"){
        result = result * 1.25;
    } else {
        result = result * 0.90;
    }
    console.log((result).toFixed(2))

}
skiTrip(["30", "president apartment", "negative"])