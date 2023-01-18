function TennisRanklist(input){
    let countTournaments = Number(input[0]);
    let startPoints = Number(input[1]);
    let W = 0;
    let F = 0;;
    let SF = 0;
    let wins = 0;
    let wonPoints = 0;
    for (let i = 2; i < input.length; i++){
        if (input[i] === "W"){
            wins += 1
            wonPoints += 2000;
        } else if (input[i] === "F"){
            wonPoints += 1200;
        } else if (input[i] === "SF"){
            wonPoints += 720;
        }
    }
    let sumPoints = startPoints + wonPoints
    let average = wonPoints / countTournaments;
    let countWins = wins / countTournaments * 100;
    console.log(`Final points: ${sumPoints}`);
    console.log(`Average points: ${Math.floor(average)}`);
    console.log(`${countWins.toFixed(2)}%`)
}
TennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


