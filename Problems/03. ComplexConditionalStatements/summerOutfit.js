function summerOutfit(input){
    let temp = Number(input[0]);
    let day = input[1];
    let range = ""
    let outfit = "";
    let shoes = "";
    if (temp >= 10 && temp <= 18){
        switch (day){
            case "Morning":
                outfit = "Sweatshirt"
                shoes = "Sneakers"
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
                break;
            case "Afternoon":
            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
                break;
        }
    } else if (temp > 18 && temp <= 24){
        switch (day){
            case "Morning":
                outfit = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
                break;
            case "Afternoon":
                outfit = "T-Shirt"
                shoes = "Sandals"
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
                break;
            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
                break;
        }
    } else if (temp >= 25 && temp <= 42){
        switch (day){
            case "Morning":
                outfit = "T-Shirt"
                shoes = "Sandals"
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
                break;
            case "Afternoon":
                outfit = "Swim Suit"
                shoes = "Barefoot"
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
                break;
            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins"
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
                break;
        }
    }
} 
summerOutfit(["28", "Evening"])


    // if (temp >= 10 && temp <= 18 && day === "Morning"){
    //     outfit = "Sweatshirt";
    //     shoes = "Sneakers"
    //     console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
    // } else if (temp >= 10 && temp <= 18 && day === "Afternoon"){
    //     outfit = "Shirt"
    //     shoes = "Moccasins"
    //     console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
    // } else if (temp > 18 && temp <= 24 && day === "Morning"){
    //     outfit = "Shirt"
    //     shoes ="Moccasins"
    //     console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
    // } else if (temp > 18 && temp <= 24 && day === "Afternoon"){
    //     outfit = "T-Shirt"
    //     shoes = "Sandals"
    //     console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
    // } else if (temp > 18 && temp <= 24 && day === "Evening"){
    //     outfit = "Shirt"
    //     shoes = "Moccasins"
    //     console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
    // } else if (temp > 25 && day === "Morning"){
    //     outfit = "T-Shirt"
    //     shoes = "Sandals"
    //     console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
    // } else if (temp > 25 && day === "Afternoon"){
    //     outfit = "Swim Suit"
    //     shoes = "Barefoot"
    //     console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
    // } else if (temp > 25 && day === "Evening"){
    //     outfit = "Shirt"
    //     shoes = "Moccasins"
    //     console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
    // } else if (temp >= 10 && temp <= 18 && day === "Evening"){
    //     outfit = "Shirt"
    //     shoes = "Moccasins"
    //     console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
    // }