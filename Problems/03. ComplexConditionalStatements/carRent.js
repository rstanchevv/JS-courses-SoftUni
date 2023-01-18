function carrent(input){
    let budget = Number(input[0]);
    let season = input[1];
    let classType = "";
    let Cabrio = "Cabrio"
    let jeep = "Jeep"
    if (budget <= 100){
        classType = "Economy class"
        if (season === "Summer" && Cabrio){
            let cabrioPrice = budget * 0.35
            console.log(`${classType}`);
            console.log(`${Cabrio} - ${cabrioPrice.toFixed(2)}`)
        } else if (season === "Winter" && jeep){
            let jeepPrice = budget * 0.65;
            console.log(`${classType}`);
            console.log(`${jeep} - ${jeepPrice.toFixed(2)}`)
        }
    } else if (budget > 100 && budget <= 500){
        classType = "Compact class"
        if (season === "Summer" && Cabrio){
            let cabrioPrice = budget * 0.45
            console.log(`${classType}`);
            console.log(`${Cabrio} - ${cabrioPrice.toFixed(2)}`)
        } else if (season === "Winter" && jeep){
            let jeepPrice = budget * 0.80;
            console.log(`${classType}`);
            console.log(`${jeep} - ${jeepPrice.toFixed(2)}`)
        }
    } else if (budget > 500){
        classType = "Luxury class"
            let jeepPrice = budget * 0.90
            console.log(`${classType}`);
            console.log(`${jeep} - ${jeepPrice.toFixed(2)}`)


    }   
}
carrent(["1010", "Summer"])