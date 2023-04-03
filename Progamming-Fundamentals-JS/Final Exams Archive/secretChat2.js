function secretChar2(arr){
    let firstMessage = arr.shift();
    let commands = arr.slice();
    let command = commands.shift();
    while (command !== "Reveal"){
        let [currentCommand, value1, value2] = command.split(":|:");
        switch(currentCommand){
            case "InsertSpace":
                firstMessage = `${firstMessage.substring(0,value1)} ${firstMessage.substring(value1)}`
                console.log(firstMessage);
                break;
            case "Reverse":
                if (firstMessage.includes(value1)){
                    let reversedText = reverseStr(value1);
                    firstMessage = firstMessage.replace(value1, "");
                    firstMessage = `${firstMessage}${reversedText}`
                } else {
                    console.log(`error`);
                    break;
                }
                console.log(firstMessage);
                break;
            case "ChangeAll":
                let regex = new RegExp(value1, "g");
                if (firstMessage.includes(value1)){
                    firstMessage = firstMessage.replace(regex, value2);
                // firstMessage = firstMessage.split(value1);
                // firstMessage = firstMessage.join(value2);
                // }
                }
                console.log(firstMessage);
                break;
        }
        command = commands.shift();
    }
    console.log(`You have a new text message: ${firstMessage}`)
    function reverseStr(text){
        let newStr = '';
        for (let i = text.length - 1; i >= 0; i--){
            newStr += text[i];
        }
        return newStr;
    }
}
secretChar2([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  
  )