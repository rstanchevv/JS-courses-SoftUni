function basketballEquipment(input){
    let annualTax = Number(input[0]);
    let shoesPrice = annualTax - annualTax * 0.40;
    let clothesPrice = shoesPrice - (shoesPrice * 0.20);
    let ballPrice = clothesPrice * 0.25;
    let accessories = ballPrice * 0.20;
    let Expenses = shoesPrice + clothesPrice + ballPrice + accessories + annualTax;
    console.log(Expenses);
}
basketballEquipment(["365"])