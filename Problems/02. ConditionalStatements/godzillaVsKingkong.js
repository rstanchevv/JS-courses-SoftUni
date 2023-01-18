// 1.	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
// 2.	Брой на статистите – цяло число в интервала [1 … 500]
// 3.	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]



function godzillavskong(input){
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let PriceforClothes = Number(input[2]);

    let decor = budget * 0.10;

    if (statists > 150)
    PriceforClothes = PriceforClothes * 0.90

    let FullExpense = decor + PriceforClothes * statists;

    if (FullExpense > budget){
        let insufficient = (FullExpense - budget).toFixed(2);
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${insufficient} leva more.`)
    } else if (FullExpense <= budget){
        let remaining = (budget - FullExpense).toFixed(2);
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${remaining} leva left.`)
    }


}
godzillavskong([9587.88, 222, 55.68])