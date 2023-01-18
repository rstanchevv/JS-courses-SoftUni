function foodDelivery(input){
    let numChickenMenus = Number(input[0]);
    let numFishMenus = Number(input[1]);
    let numVegMenus = Number(input[2]);

    let chickenMenuPrice = Number("10.35");
    let fishMenuPrice = Number("12.40");
    let vegMenuPrice = Number("8.15");
    let chickenMenuExpense = numChickenMenus * chickenMenuPrice;
    let fishMenuExpense = numFishMenus * fishMenuPrice;
    let vegMenuExpense = numVegMenus * vegMenuPrice;
    let dessert = (chickenMenuExpense + fishMenuExpense + vegMenuExpense) * 0.20;
    let menuExpenses = chickenMenuExpense + fishMenuExpense + vegMenuExpense;
    let deliveryTax = Number("2.50")
    let TotalExpense = menuExpenses + dessert + deliveryTax;
    console.log(TotalExpense)

}
foodDelivery(["2","4","3"]);