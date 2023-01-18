function toysstore(input){

    let tripcost = Number(input[0]);
    let numberpuzzles = Number(input[1]);
    let numbertalkingkitties = Number(input[2]);
    let numberteddybears = Number(input[3]);
    let numberminions = Number(input[4]);
    let numbertrucktoys = Number(input[5]);

    let income = numberpuzzles * 2.60 + numbertalkingkitties * 3 + numberteddybears * 4.10 + numberminions * 8.20 + numbertrucktoys * 2;
    let numberoftoys = numberminions + numberpuzzles + numbertalkingkitties + numberteddybears + numbertrucktoys;

    if (numberoftoys >= 50){
        income = income * 0.75
    }

    let FinalIncome = income * 0.90;

    if (tripcost <= FinalIncome){
        let remaining = (FinalIncome - tripcost).toFixed(2);
        console.log(`Yes! ${remaining} lv left.`)
    } else {
        let needed = (tripcost - FinalIncome).toFixed(2);
        console.log(`Not enough money! ${needed} lv needed.`)
    }

}
toysstore([40.8, 20, 25, 30, 50 ,10])