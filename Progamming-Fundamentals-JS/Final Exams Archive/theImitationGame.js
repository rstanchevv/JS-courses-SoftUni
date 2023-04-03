function theImitationGame(input){
    let decodedMessage = input[0];
    let commands = input.slice(1);
    let command = commands.shift();
    while (command !== "Decode"){
        let commandSplit = command.split("|");
        switch(commandSplit[0]){
            case "ChangeAll":
                for(let i = 0; i < decodedMessage.length; i++){
                    if (decodedMessage[i] === commandSplit[1]){
                        decodedMessage = decodedMessage.replace(decodedMessage[i], commandSplit[2])
                    }
                }
                break;
            case "Move":
                let messageSplit = decodedMessage.split("");
                for (let i = 0; i < commandSplit[1]; i++){
                    let letter = messageSplit.shift();
                    messageSplit.push(letter)
                }
                messageSplit = messageSplit.join("");
                decodedMessage = messageSplit;
                break;
            case "Insert":
                let splitMessage = decodedMessage.split("");
                splitMessage.splice(commandSplit[1], 0, commandSplit[2]);
                splitMessage = splitMessage.join("");
                decodedMessage = splitMessage;
        }
        command = commands.shift();
    }
    console.log(`The decrypted message is: ${decodedMessage}`)
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  
  )