// •	Брой магнолии – цяло число в интервала [0 … 50]
// •	Брой зюмбюли – цяло число в интервала [0 … 50]
// •	Брой рози – цяло число в интервала [0 … 50]
// •	Брой кактуси – цяло число в интервала [0 … 50]
// •	Цена на подаръка – реално число в интервала [0.00 … 500.00]



function flowershop(input){

    let countMagnolii = Number(input[0]);
    let countZumbuli = Number(input[1]);
    let countRozi = Number(input[2]);
    let countKaktusi = Number(input[3]);
    let presentPrice = Number(input[4]);

    let totalPurchaseAfterTax = (countMagnolii * 3.25 + countZumbuli * 4 + countRozi * 3.50 + countKaktusi * 8) * 0.95;

    if (totalPurchaseAfterTax >= presentPrice){
        let remaining = Math.floor(totalPurchaseAfterTax - presentPrice);
        console.log(`She is left with ${remaining} leva.`)
    } else{
        let needed = Math.ceil(presentPrice - totalPurchaseAfterTax);
        console.log(`She will have to borrow ${needed} leva.`)
    }





}
flowershop([15,7,5,10,100])