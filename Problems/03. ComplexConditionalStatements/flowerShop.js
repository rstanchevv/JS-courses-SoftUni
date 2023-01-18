function flowerShop(input){
    let boughtHrizantemi = Number(input[0]);
    let boughrRozi = Number(input[1]);
    let boughtLaleta = Number(input[2]);
    let season = input[3];
    let holiday = input[4];
    let hrizantemiPrice = 0;
    let roziPrice = 0;
    let laletaPrice = 0;
    let sum = 0;
    let countFlowers = boughtHrizantemi + boughtLaleta + boughrRozi

    if (season === "Spring" || season === "Summer"){
        hrizantemiPrice = 2.00;
        roziPrice = 4.10;
        laletaPrice = 2.50;
        sum = boughrRozi * roziPrice + boughtHrizantemi * hrizantemiPrice + boughtLaleta * laletaPrice;
        if (holiday === "Y"){
            sum = sum * 1.15;
        }
        if (season === "Spring" && boughtLaleta > 7){
            sum = sum * 0.95;
        }
        if (countFlowers > 20){
            sum = sum * 0.80;
        }
        sum = sum + 2.00;
    } else if (season === "Winter" || season === "Autumn"){
        hrizantemiPrice = 3.75;
        roziPrice = 4.50;
        laletaPrice = 4.15;
        sum = boughrRozi * roziPrice + boughtHrizantemi * hrizantemiPrice + boughtLaleta * laletaPrice;
        if (holiday === "Y"){
            sum = sum * 1.15
        }
        if (season === "Winter" && boughrRozi >= 10){
            sum = sum * 0.90;
        }
        if (countFlowers > 20){
            sum = sum * 0.80;
        }
        sum = sum + 2.00;
    }
    console.log(`${sum.toFixed(2)}`)

}
flowerShop(["2","4","8","Spring","Y"])