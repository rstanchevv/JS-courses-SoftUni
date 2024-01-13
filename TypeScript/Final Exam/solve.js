function solve(arr){
    let adults = 0;
    let kids = 0;
    const toyPrice = 5;
    const sweaterPrice = 15;
    let index = 0;
    while (arr[index] !== 'Christmas'){
        let yearsOfMember = Number(arr[index]);
        if (yearsOfMember <= 16){
            kids++
        } else {
            adults++
        }
        index++
    }
    let totalSumForToys = kids * toyPrice
    let totalSumForSweaters = adults * sweaterPrice

    console.log(`Number of adults: ${adults}`)
    console.log(`Number of kids: ${kids}`)
    console.log(`Money for toys: ${totalSumForToys}`)
    console.log(`Money for sweaters: ${totalSumForSweaters}`)
}

solve(["16",
"16",
"16",
"16",
"16",
"Christmas"])
