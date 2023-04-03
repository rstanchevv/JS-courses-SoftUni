function heartDelivery(arr){
    let neighborhood = arr[0].split("@");
    let jumpCommands = arr.slice(1);
    let jumpCounter = 0;
    let index = 0;
    let currentPosition = 0;
    let currentCommand = jumpCommands[index];
    index++
    while (currentCommand !== "Love!"){
        jumpCounter++
        let currentComandSplit = currentCommand.split(" ");
        let jumpLength = Number(currentComandSplit[1]);
        currentPosition += jumpLength;
        if (currentPosition > neighborhood.length - 1){
            currentPosition = 0;
        }
        if (neighborhood[currentPosition] === 0){
            console.log(`Place ${currentPosition} already had Valentine's day.`)
            currentCommand = jumpCommands[index];
            index++
            continue;
        }
        neighborhood[currentPosition] -= 2;
        if (neighborhood[currentPosition] === 0){
            console.log(`Place ${currentPosition} has Valentine's day.`)
        }
        currentCommand = jumpCommands[index];
        index++
    }
    let failedHouses = neighborhood.filter(a => a !== 0);
    console.log(`Cupid's last position was ${currentPosition}.`);
    if (failedHouses.length === 0){
        console.log(`Mission was successful.`);
    } else{
        console.log(`Cupid has failed ${failedHouses.length} places.`)
    }
}
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])

