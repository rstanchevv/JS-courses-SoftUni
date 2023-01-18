function YardGreening(input){
    let area = (Number(input[0]));
    let price = (Number("7.61"));
    let discountpercent = 18 / 100;
    let discount = (area * price) * discountpercent
    let pricewithoutdiscount = (area * price) - discount
    console.log(`The final price is: ${pricewithoutdiscount} lv.`)
    console.log(`The discount is: ${discount} lv.`)

}
YardGreening(["500"]);