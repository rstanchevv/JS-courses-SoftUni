function theImitationGame2(arr) {
    let encryptedMessage = arr.shift();
    let commands = arr.slice();
    let command = commands.shift();
    while (command !== "Decode") {
        let [currentCommand, value1, value2] = command.split("|");
        switch (currentCommand) {
            case "Move":
                encryptedMessage = encryptedMessage.split("");
                for (let i = 0; i < value1; i++) {
                    encryptedMessage.push(encryptedMessage.shift());
                }
                encryptedMessage = encryptedMessage.join("");
                break;
            case "Insert":
                encryptedMessage = `${encryptedMessage.substring(0, value1)}${value2}${encryptedMessage.substring(value1, encryptedMessage.length)}`;
                break;
            case "ChangeAll":
                while (encryptedMessage.includes(value1)) {
                    encryptedMessage = encryptedMessage.replace(value1, value2);
                }
                break;
        }
        command = commands.shift()
    }
    console.log(`The decrypted message is: ${encryptedMessage}`)
}
theImitationGame2([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]
)