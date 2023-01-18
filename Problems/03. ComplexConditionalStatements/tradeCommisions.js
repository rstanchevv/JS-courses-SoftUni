function tradeCommisions(input){
    let city = input[0];
    let sales = Number(input[1]);

    let salesRange1 = sales > 0 && sales <= 500 
    let salesRange2 = sales > 500 && sales <= 1000
    let salesRange3 = sales > 1000 && sales <= 10000
    let salesRange4 = sales >= 10000;

    if (salesRange1){
        switch (city) {
            case "Sofia":
            console.log((sales * 0.05).toFixed(2));
            break;
            case "Varna":
                console.log((sales * 0.045).toFixed(2));
                break;
            case "Plovdiv":
                console.log((sales * 0.055).toFixed(2));
                break;
            default: console.log(`error`);
        }
    } else if (salesRange2){
        switch (city){
            case "Sofia":
                console.log((sales * 0.07).toFixed(2));
                break;
            case "Varna":
                console.log((sales * 0.075).toFixed(2));
                break;
            case "Plovdiv":
                console.log((sales * 0.08).toFixed(2));
                break;
            default:console.log(`error`)
        }
    } else if (salesRange3){
        switch (city){
            case "Sofia":
                console.log((sales * 0.08).toFixed(2));
                break;
            case "Varna":
                console.log((sales * 0.1).toFixed(2));
                break;
            case "Plovdiv":
                console.log((sales * 0.12).toFixed(2));
                break;
            default: console.log(`error`)
        }
    } else if (salesRange4){
        switch (city){
            case "Sofia":
                console.log((sales * 0.12).toFixed(2));
                break;
            case "Varna":
                console.log((sales * 0.13).toFixed(2));
                break;
            case "Plovdiv":
                console.log((sales * 0.145).toFixed(2));
                break;
            default:console.log(`error`);
        }
    } else{
        console.log(`error`)
    }
}
tradeCommisions(["Kaspichan", "-50"])