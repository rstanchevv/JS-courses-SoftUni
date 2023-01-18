// Цената зависи от сезона:
// •	Цената за наем на кораба през пролетта е  3000 лв.
// •	Цената за наем на кораба през лятото и есента е  4200 лв.
// •	Цената за наем на кораба през зимата е  2600 лв.
// В зависимост от броя си групата ползва отстъпка:
// •	Ако групата е до 6 човека включително  –  отстъпка от 10%.
// •	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
// •	Ако групата е от 12 нагоре  –  отстъпка от 25%. 

function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let countFishermen = Number(input[2]);
    let evenOrOdd = countFishermen % 2 === 0;

    let shipRent = ""
    switch (season){
        case "Spring":
            shipRent = 3000;
            break;
        case "Summer":
        case "Autumn":
            shipRent = 4200;
            break;
        case "Winter":
            shipRent = 2600;
            break;
    }

    if (countFishermen <= 6){
        shipRent = shipRent * 0.9;
        if (evenOrOdd && season != "Autumn"){
            shipRent = shipRent * 0.95
        }
    } else if (countFishermen >= 7 && countFishermen <= 11){
        shipRent = shipRent * 0.85;
        if (evenOrOdd && season != "Autumn"){
            shipRent = shipRent * 0.95
        }
    } else{
        shipRent = shipRent * 0.75;
        if (evenOrOdd && season != "Autumn"){
            shipRent = shipRent * 0.95
        }
    }
    if (budget >= shipRent){
        let remaining = budget - shipRent;
        console.log(`Yes! You have ${remaining.toFixed(2)} leva left.`)
    } else {
        let needed = shipRent - budget;
        console.log(`Not enough money! You need ${needed.toFixed(2)} leva.`)
    }
}
fishingBoat(["3600", "Autumn", "6"])