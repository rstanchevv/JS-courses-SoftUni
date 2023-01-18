function repainting(input){
    let nailonKol = Number(input[0]);
    let paintKol = Number(input[1]);
    let razreditelZaBoyaKol = Number(input[2]);
    let hoursNeeded = Number(input[3]);
    let nailonPrice = Number("1.50");
    let paintPrice = Number("14.50");
    let razreditelZaBoyaPrice = Number("5.00");
    let additionalNailon = Number(2 * nailonPrice);
    let torbichki = Number("0.40")
    let nailonExpense = (nailonKol * nailonPrice) + additionalNailon;
    let additionalPaint = paintKol * 0.10;
    let paintExpense = (paintKol * paintPrice) + (additionalPaint * paintPrice);
    let razreditelZaBoyaExpense = razreditelZaBoyaKol * razreditelZaBoyaPrice
    let materialsExpense = nailonExpense + paintExpense + razreditelZaBoyaExpense + torbichki;
    let WorkExpense = ((nailonExpense + paintExpense + razreditelZaBoyaExpense + torbichki) * 0.30) * hoursNeeded;
    let overallExpense = materialsExpense + WorkExpense;
    console.log(overallExpense);
    
}
repainting(["10","11","4","8"]);
