function vegetableMarket(input){
    let zelenchukCena = Number(input[0]);
    let plodCena = Number(input[1]);
    let zelenchukgKg = Number(input[2]);
    let plodKg = Number(input[3]);
    let prihod = (zelenchukCena * zelenchukgKg) + (plodCena * plodKg)
    let inEuro = prihod / 1.94;
    console.log(inEuro.toFixed(2));




}
vegetableMarket([0.194,19.4,10,10])