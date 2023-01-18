function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let campOrHotel = ""
    let destination = ""
    let sleepPrice = 0;

    
    
    if (budget <= 100){
        destination = "Bulgaria"
        switch (season){
            case "summer":
                campOrHotel = "Camp"
                sleepPrice = (budget * 0.30).toFixed(2);
                break;
            case "winter":
                campOrHotel = "Hotel"
                sleepPrice = (budget * 0.70).toFixed(2);
                break;                
        }
        console.log(`Somewhere in ${destination}`)
        console.log(`${campOrHotel} - ${sleepPrice}`)
    } else if (budget <= 1000){
        destination = "Balkans"
        switch (season){
            case "summer":
                campOrHotel = "Camp"
                sleepPrice = (budget * 0.40).toFixed(2);
                break;
            case "winter":
                campOrHotel = "Hotel"
                sleepPrice = (budget * 0.80).toFixed(2);
                break;
        }
        console.log(`Somewhere in ${destination}`)
        console.log(`${campOrHotel} - ${sleepPrice}`)
    } else if (budget > 1000){
        destination = "Europe"
        campOrHotel = "Hotel"
        sleepPrice = (budget * 0.90).toFixed(2);
        console.log(`Somewhere in ${destination}`)
        console.log(`${campOrHotel} - ${sleepPrice}`)
    }
}
journey(["1500", "summer"])