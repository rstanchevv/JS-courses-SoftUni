function christmasTournament(input) {
    let index = 0;
    let tournamentlenght = Number(input[index]);
    index++
    let command = input[index];
    index++
    let totalMoney = 0;
    let allWonGamesCount = 0;
    let allLostGamesCount = 0;
    let finishcounter = 0;
    while (command != "Finish") {
        let wonMoney = 0;
        let wonGamesCounter = 0;
        let lostGamesCounter = 0;
        for (let counter = 0; counter <= input.length; counter++) {
            command = input[index];
            index++
            if (command === "Finish") {
                finishcounter++
                break;
            }
            if (command === "win") {
                wonMoney += 20;
                wonGamesCounter++
            } else if (command === "lose") {
                lostGamesCounter++
            }
        }
        if (wonGamesCounter > lostGamesCounter) {
            wonMoney = wonMoney * 1.10;
        }
        allWonGamesCount += wonGamesCounter;
        allLostGamesCount += lostGamesCounter;
        totalMoney += wonMoney
        if (finishcounter === tournamentlenght) {
            break;
        }
        command = input[index];
    }
    if (allWonGamesCount > allLostGamesCount) {
        totalMoney = totalMoney * 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    } else{
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    }
}
christmasTournament(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"])
