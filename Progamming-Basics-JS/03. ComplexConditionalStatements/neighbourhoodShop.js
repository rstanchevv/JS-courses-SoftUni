function neighbourhood(input){
    let productName = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    if (city === "Sofia"){
        switch (productName){
            case "coffee":
                console.log(`0.50` * quantity);
                break;
            case "water":
                console.log(`0.80` * quantity);
                break;
            case "beer":
                console.log(`1.20` * quantity);
                break;
            case "sweets":
                console.log(`1.45` * quantity);
                break;
            case "peanuts":
                console.log(`1.60` * quantity);
                break;
        }
    } else if (city === "Varna"){
        switch (productName){
            case "coffee":
                console.log(`0.45` * quantity);
                break;
            case "water":
                console.log(`0.70` * quantity);
                break;
            case "beer":
                console.log(`1.10` * quantity);
                break;
            case "sweets":
                console.log(`1.35` * quantity);
                break;
            case "peanuts":
                console.log(`1.55` * quantity);
                break;
        }
    } else if (city === "Plovdiv"){
        switch (productName){
            case "coffee":
                console.log(`0.40`* quantity);
                break;
            case "water":
                console.log(`0.70` * quantity);
                break;
            case "beer":
                console.log(`1.15` * quantity);
                break;
            case "sweets":
                console.log(`1.30` * quantity);
                break;
            case "peanuts":
                console.log(`1.50` * quantity);
                break;
        }
    }

}
neighbourhood(["peanuts", "Sofia", 2.5])