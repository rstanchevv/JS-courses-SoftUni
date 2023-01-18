function TrekkingMania(input){
    let countGroups = Number(input[0]);
    let sumOfPeople = 0;
    let Musala = 0;
    let Monblan = 0;
    let Kilimandjaro = 0;
    let K2 = 0;
    let Everest = 0;
    for (let i = 1; i < input.length; i++){
        sumOfPeople = sumOfPeople + Number(input[i]);
        if (input[i] < 6){
            Musala = Musala + Number(input[i]);
        } else if (input[i] < 13){
            Monblan = Monblan + Number(input[i]);
        } else if (input[i] < 26){
            Kilimandjaro = Kilimandjaro + Number(input[i]);
        } else if (input[i] < 41){
            K2 = K2 + Number(input[i]);
        } else if (input[i] >= 41){
            Everest = Everest + Number(input[i]);
        }
    }
    let musalaInPercent = (Musala / sumOfPeople) * 100;
    let MonblanInPercent = (Monblan / sumOfPeople) * 100;
    let KilimandjaroInPercent = (Kilimandjaro / sumOfPeople) * 100;
    let K2InPercent = (K2 / sumOfPeople) * 100;
    let EverestInPercent = (Everest / sumOfPeople) * 100;

    console.log(`${musalaInPercent.toFixed(2)}%`)
    console.log(`${MonblanInPercent.toFixed(2)}%`)
    console.log(`${KilimandjaroInPercent.toFixed(2)}%`)
    console.log(`${K2InPercent.toFixed(2)}%`)
    console.log(`${EverestInPercent.toFixed(2)}%`)
}
TrekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
