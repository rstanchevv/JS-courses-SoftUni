function depositCalculator(input){
    let depositSum = Number(input[0]);
    let deposittime = Number(input[1]);
    let rent = Number(input[2] / 100);
    console.log(depositSum + (deposittime * (depositSum * rent) / 12));
}
depositCalculator(["200", "3", "5.7"]);