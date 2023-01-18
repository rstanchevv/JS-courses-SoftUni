// •	Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
// •	Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
// •	Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
// •	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
// •	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%

// цвете	Роза	Далия	Лале	Нарцис	Гладиола
// Цена на брой в лева	5	3.80	2.80	3	2.50


function newHouse(input){
    let flowerType = input[0];
    let countFlower = Number(input[1]);
    let budget = Number(input[2]);

    let roseprice = 5.00;
    let daliaPrice = 3.80;
    let lalePrice = 2.80;
    let narcisPrice = 3.00;
    let gladiolaPrice = 2.50;
    let sumAfterDiscount = 0.00;

    if (flowerType === "Roses"){
        sumAfterDiscount = countFlower * roseprice;
        if (countFlower > 80){
            sumAfterDiscount = (countFlower * roseprice) * 0.90;
        }
    } else if (flowerType === "Dahlias"){
        sumAfterDiscount = countFlower * daliaPrice;
        if (countFlower > 90){
            sumAfterDiscount = (countFlower * daliaPrice) * 0.85;
        }
    } else if (flowerType === "Tulips"){
        sumAfterDiscount = countFlower * lalePrice;
        if (countFlower > 80){
            sumAfterDiscount = (countFlower * lalePrice) * 0.85;
        }
    } else if (flowerType === "Narcissus"){
        sumAfterDiscount = countFlower * narcisPrice;
        if (countFlower < 120){
        sumAfterDiscount = (countFlower * narcisPrice) * 1.15;
        }
    } else if (flowerType === "Gladiolus"){
        sumAfterDiscount = countFlower * gladiolaPrice
        if (countFlower < 80){
        sumAfterDiscount = (countFlower * gladiolaPrice) * 1.20;
        }
    }
    if (budget >= sumAfterDiscount){
        let remaining = budget - sumAfterDiscount
        console.log(`Hey, you have a great garden with ${countFlower} ${flowerType} and ${remaining.toFixed(2)} leva left.`)
    } else {
        let needed = sumAfterDiscount - budget
        console.log(`Not enough money, you need ${needed.toFixed(2)} leva more.`)
    }
}
// 
newHouse(["Gladiolus", "64", "164"])



// if (flowerType === "Roses" && countFlower > 80){
    //         sumAfterDiscount = (countFlower * 5.00) * 0.90
    //     } else if (flowerType === "Dahlias" && countFlower > 90){
    //         sumAfterDiscount = (countFlower * 3.80) * 0.85
    //     } else if (flowerType === "Tulips" && countFlower > 80){
    //         sumAfterDiscount = (countFlower * 2.80) * 0.85
    //     } else if (flowerType === "Narcissus" && countFlower < 120){
    //         sumAfterDiscount = (countFlower * 3.00) * 1.15
    //     } else if (flowerType === "Gladiolus" && countFlower < 80){
    //         sumAfterDiscount = (countFlower * 2.50) * 1.20
    //     } 
        
    //     let check = budget > sumAfterDiscount
    
    //     if (check){
    //         let remaining = budget - sumAfterDiscount
    //         console.log(`Hey, you have a great garden with ${countFlower} ${flowerType} and ${remaining.toFixed(2)} leva left.`)
    //     } else if (!check){
    //         let needed = sumAfterDiscount - budget;
    //         console.log(`Not enough money, you need ${needed.toFixed(2)} leva more.`)
    //     }
    // }