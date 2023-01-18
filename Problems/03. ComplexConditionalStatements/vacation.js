function vacation(input){
    let budget = Number(input[0]);
    let season = input[1];
    let typeOfHouse = "";
    let locationAlaska = "Alaska";
    let locationMarocco = "Morocco"

    if (budget <= 1000){
        typeOfHouse = "Camp"
        if (season === "Summer" && locationAlaska){
            let budgetTrip = budget * 0.65
            console.log(`${locationAlaska} - ${typeOfHouse} - ${budgetTrip.toFixed(2)}`)
        } else if (season === "Winter" && locationMarocco){
            let budgetTrip = budget * 0.45
            console.log(`${locationMarocco} - ${typeOfHouse} - ${budgetTrip.toFixed(2)}`)
        }
    } else if (budget > 1000 && budget <= 3000){
        typeOfHouse = "Hut"
        if (season === "Summer" && locationAlaska){
            let budgetTrip = budget * 0.80
            console.log(`${locationAlaska} - ${typeOfHouse} - ${budgetTrip.toFixed(2)}`)
        } else if (season === "Winter" && locationMarocco){
            let budgetTrip = budget * 0.60
            console.log(`${locationMarocco} - ${typeOfHouse} - ${budgetTrip.toFixed(2)}`)
        }
    } else if (budget > 3000){
        typeOfHouse = "Hotel"
        budgetTrip = budget * 0.90
        if (season === "Summer"){
            console.log(`${locationAlaska} - ${typeOfHouse} - ${budgetTrip.toFixed(2)}`)
        } else if (season === "Winter"){
            console.log(`${locationMarocco} - ${typeOfHouse} - ${budgetTrip.toFixed(2)}`)
        }
    }
    

}
vacation(["5000", "Winter"])