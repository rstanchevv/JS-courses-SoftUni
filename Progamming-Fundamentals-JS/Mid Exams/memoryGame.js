function memoryGame(arr){
    let movescounter = 0;
    let index = 1;
    let numbersArray = arr[0].split(" ")
    let command = arr[index];
    index++
    while (command != "end"){
        movescounter++
        let currentCommandSplit = command.split(" ");
        if (currentCommandSplit[0] === currentCommandSplit[1] || Number(currentCommandSplit[0]) < 0 || Number(currentCommandSplit[1]) < 0
            || Number(currentCommandSplit[0]) > numbersArray.length - 1 || Number(currentCommandSplit[1]) > numbersArray.length - 1){
                console.log(`Invalid input! Adding additional elements to the board`)
                numbersArray.splice(numbersArray.length / 2,0, `-${movescounter}a`, `-${movescounter}a`);
                command = arr[index];
                index++
                continue;
            }
        let firstIndexNumber = numbersArray[currentCommandSplit[0]];
        let secondIndexNumber = numbersArray[currentCommandSplit[1]];
        if (firstIndexNumber == secondIndexNumber){
            console.log(`Congrats! You have found matching elements - ${firstIndexNumber}!`)
            numbersArray.splice(currentCommandSplit[0], 1);
            let findIndexOfElement = numbersArray.indexOf(firstIndexNumber);
            numbersArray.splice(findIndexOfElement,1)
        } else {
            console.log(`Try again!`)
        }
        if (numbersArray.length < 1){
            console.log(`You have won in ${movescounter} turns!`);
            return;
        }
        command = arr[index];
        index++
    }
    console.log(`Sorry you lose :(`);
    console.log(numbersArray.join(" "))
}
memoryGame ([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]       
    )
    