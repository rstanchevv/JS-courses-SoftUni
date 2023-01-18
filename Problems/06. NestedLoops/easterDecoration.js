function easterDecoration(input){
    let index = 0;
    let numberOfClients = Number(input[index]);
    index++
    let command = input[index];
    index++
    let totalSum = 0;
    let averageBill = 0;
    let basketPrice = 1.50;
    let wreathPrice = 3.80;
    let chocolateBunnyPrice = 7;
    let finishCounter = 0;
    while (command != "Finish"){
        let sum = 0;
        let basketCount = 0;
        let wreathCount = 0;
        let chocolateBunnyCount = 0;
        for (let i = 0; i <= input.length;i++){
            if (command === "Finish"){
                finishCounter++
                break;
            } else if (command === "basket"){
                basketCount++;
            } else if (command === "wreath"){
                wreathCount++;
            } else if (command === "chocolate bunny"){
                chocolateBunnyCount++;
            }
            command = input[index];
            index++
        } 
        let sumCount = basketCount + wreathCount + chocolateBunnyCount;
        sum += basketCount * basketPrice + wreathCount * wreathPrice + chocolateBunnyCount * chocolateBunnyPrice;
        if (sumCount % 2 === 0){
            sum = sum * 0.80;
        }
        console.log(`You purchased ${basketCount + wreathCount + chocolateBunnyCount} items for ${sum.toFixed(2)} leva.`)
        totalSum += sum;
        if (finishCounter === numberOfClients){
            break;
        }
        command = input[index];
        index++
    }
    averageBill = totalSum / numberOfClients;
    console.log(`Average bill per client is: ${averageBill.toFixed(2)} leva.`)
}
easterDecoration(["1",
"basket",
"wreath",
"chocolate bunny",
"wreath",
"basket",
"chocolate bunny",
"Finish"])

