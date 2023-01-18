function home(input){
    let flowerType = input[0];
    let countFlower = Number(input[1]);
    let budget = Number(input[2]);
    let flowerPrice = 0.00;

    if (flowerType === "Roses"){
        flowerPrice = 5.00
    } else if (flowerType === "Dahlias"){
        flowerPrice = 3.80;
    } else if (flowerType === "Tulips"){
        flowerPrice = 2.80
    } else if (flowerType === "Narcissus"){
        flowerPrice = 3.00
    } else if (flowerType === "Gladiolus"){
        flowerPrice = 2.50;
    }
    let totalSum = flowerPrice * countFlower;

    if (flowerType === "Roses" && countFlower > 80){
        totalSum = totalSum * 0.90;
    } else if (flowerType === "Dahlias" && countFlower > 90){
        totalSum = totalSum * 0.85;
    } else if (flowerType === "Tulips" && countFlower > 80){
        totalSum = totalSum * 0.85;
    } else if (flowerType === "Narcissus" && countFlower < 120){
        totalSum = totalSum * 1.15;
    } else if (flowerPrice === "Gladiolus" && countFlower < 80){
        totalSum = totalSum * 1.20;
    }
    if (budget > totalSum){
        let remaining = budget - totalSum;
        console.log(`Hey, you have a great garden with ${countFlower} ${flowerType} and ${remaining.toFixed(2)} leva left.`)
    } else {
        let needed = totalSum - budget;
        console.log(`Not enough money, you need ${needed.toFixed(2)} leva more.`)
    }
}
home(["Gladiolus", "64", "164"])