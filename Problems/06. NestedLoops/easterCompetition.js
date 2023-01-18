function easterCompetition(input){
    let index = 0;
    let numberOfBakers = Number(input[index]);
    index++
    let command = input[index];
    index++
    let max = Number.MIN_SAFE_INTEGER;
    let bestBaker = ""
    let stopCounter = 0;
    while (command != "Stop"){
        let sum = 0;
        while (command != "Stop"){
            let currentPoints = input[index];
            if (currentPoints === "Stop"){
                stopCounter++;
                index++
                break;
            }
            sum += Number(currentPoints);
            index++
           
        }
        console.log(`${command} has ${sum} points.`)
        if (sum > max){
            bestBaker = command;
            max = sum
            console.log(`${command} is the new number 1!`)
        }
        if (stopCounter === numberOfBakers){
            break;
        }        
        command = input[index];
        index++
    }
    console.log(`${bestBaker} won competition with ${max} points!`)
}
easterCompetition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])
