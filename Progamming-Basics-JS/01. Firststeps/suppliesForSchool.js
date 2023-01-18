function suppliesForSchool(input){
    let penPrice = Number("5.80");
    let markerPrice = Number("7.20");
    let chemicalsPriceLiter = Number("1.20")
    let numofPen = (Number(input[0]));
    let numofMarker = (Number(input[1]));
    let litreschemical = (Number(input[2]));
    let discount = Number(input[3] / 100);
    let chemicalPrice = litreschemical * chemicalsPriceLiter;
    let MoneyNeededWithoutDiscount = ((penPrice * numofPen) + (markerPrice * numofMarker) + chemicalPrice);
    let DiscountAmmount = MoneyNeededWithoutDiscount * discount;
    let finalAmount = MoneyNeededWithoutDiscount - DiscountAmmount
    console.log(finalAmount);
}
suppliesForSchool(["2","3","4","25"]);