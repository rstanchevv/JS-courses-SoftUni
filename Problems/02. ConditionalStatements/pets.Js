// •	Първи ред – брой дни – цяло число в интервал [1…5000]
// •	Втори ред – оставена храна в килограми – цяло число в интервал [0…100000]
// •	Трети ред – храна на ден за кучето в килограми – реално число в интервал [0.00…100.00]
// •	Четвърти ред – храна на ден за котката в килограми– реално число в интервал [0.00…100.00]
// •	Пети ред – храна на ден за костенурката в грамове – реално число в интервал [0.00…10000.00]

function petfood(input){
    let days = Number(input[0]);
    let countFood = Number(input[1]);
    let dogFoodKg = Number(input[2]);
    let catfoodKg = Number(input[3]);
    let turtleFoodG = Number(input[4]);

    let dogFoodforPeriod = dogFoodKg * days;
    let catFoodforPeriod = catfoodKg * days;
    let tutrleFoodforPeriod = (turtleFoodG * days) / 1000;

    let totalFood = dogFoodforPeriod + catFoodforPeriod + tutrleFoodforPeriod;

    if (countFood >= totalFood){
        let remaining = Math.floor(countFood - totalFood);
        console.log(`${remaining} kilos of food left.`)
    } else{
        let needed = Math.ceil(totalFood - countFood);
        console.log(`${needed} more kilos of food are needed.`)
    }




}
petfood([5, 10, 2.1, 0.8, 321])