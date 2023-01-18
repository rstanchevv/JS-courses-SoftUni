function usdToBg(input){
    let bg = Number(1.79549);
    let usd = Number(input[0]);
    let usdToBg = bg * usd;
    console.log(usdToBg);
}
usdToBg(["100"]);