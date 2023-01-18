function theImitationGame(input){
    let index = 0;
    let changeAll = "ChangeAll";
    let Insert = "Insert";
    let Move = "Move";
    let encryptedMessage = "";
    let firstMessage = input[index];
    index++
    let decryptedMessage = input[index];
    index++
    while (decryptedMessage !== "Decode"){
        if (decryptedMessage.includes(changeAll)){
            let foundAt = decryptedMessage.indexOf("|");
            let switchLetter = decryptedMessage.substring(foundAt + 1, foundAt + 2);
            let realLetter = decryptedMessage.substring(foundAt + 3, decryptedMessage.length);
            encryptedMessage += firstMessage.replaceAll(switchLetter, realLetter)
            firstMessage = encryptedMessage;
        }
        else if(decryptedMessage.includes(Insert)){
            let foundAt = decryptedMessage.indexOf("|");
            let switchLetter = Number(decryptedMessage.substring(foundAt + 1, foundAt + 2));
            let realLetter = decryptedMessage.substring(foundAt + 3, decryptedMessage.length);
            encryptedMessage = firstMessage.slice(0, switchLetter) + realLetter + firstMessage.slice(switchLetter);
            firstMessage = encryptedMessage;
        }
        else if(decryptedMessage.includes(Move)){
            let foundAt = decryptedMessage.indexOf("|");
            let moveNumber = Number(decryptedMessage.substring(foundAt +1, decryptedMessage.length))
            let stringForReplacement = firstMessage.slice(0,moveNumber)
            encryptedMessage = firstMessage.slice(moveNumber, firstMessage.length) + stringForReplacement;
            firstMessage = encryptedMessage;
        }
        decryptedMessage = input[index];
        index++
    }
    console.log(`The decrypted message is: ${encryptedMessage}`)
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  )