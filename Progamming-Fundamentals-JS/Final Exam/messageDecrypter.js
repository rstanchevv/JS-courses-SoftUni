function messageDecrypter(arr){
    let numberOfMessages = Number(arr.shift());
    let pattern = /^([$%])(?<tag>[A-Z][a-z]{2,})\1:\s{1}(\[\d+\]\|){3}$/g;
    let numbersPattern = /\d+/g;
    for (let i =0; i < numberOfMessages; i++){
        let match = pattern.exec(arr[i]);
        if (match === null){
            console.log(`Valid message not found!`);
        }
        while (match !== null){
            let decryptedMessage = '';
            let numbersMatch = arr[i].match(numbersPattern)
            for (const number of numbersMatch) {
                decryptedMessage += String.fromCharCode(number);
            }
            console.log(`${match[2]}: ${decryptedMessage}`)
            match = pattern.exec(arr[i]);
        }
    }
}
messageDecrypter(["3",
"This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
"$tAGged$: [97][97][97]|",
"$Request$: [73]|[115]|[105]|true"])
