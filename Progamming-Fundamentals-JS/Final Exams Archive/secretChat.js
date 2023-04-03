function secretChat(arr){
    let concealedMessage = arr.shift();
    let commands = arr.slice();
    let command = commands.shift();
    while (command !== "Reveal"){
        let commandSplit = command.split(":|:");
        switch (commandSplit[0]){
            case "InsertSpace":
                let insertIndex = commandSplit[1];
                concealedMessage = `${concealedMessage.substring(0, insertIndex)}${String.fromCharCode(32)}${concealedMessage.substring(insertIndex, concealedMessage.length)}`;
                console.log(concealedMessage)
                break;
            case "Reverse":
                let subString = commandSplit[1];
                if (concealedMessage.includes(subString)){
                    let subStringReverse = subString.split("").reverse().join("");
                    concealedMessage = concealedMessage.replace(subString,"");
                    concealedMessage = `${concealedMessage}${subStringReverse}`
                    console.log(concealedMessage)
                } else {
                    console.log(`error`)
                }
                break;
            case "ChangeAll":
                let changeSubstring = commandSplit[1];
                let replacementText = commandSplit[2];
                while (concealedMessage.includes(changeSubstring)){
                    concealedMessage = concealedMessage.replace(changeSubstring, replacementText);
                }
                console.log(concealedMessage);
                break;
        }
        command = commands.shift();
    }
    console.log(`You have a new text message: ${concealedMessage}`)
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  )