function passwordReset(arr){
    let string = arr.shift();
    let commands = arr.slice();
    let command = commands.shift();
    while (command !== "Done"){
        let [currentCommand, value, value2] = command.split(" ");
        switch(currentCommand){
            case "TakeOdd":
                let tempStr = ''
                for (let i = 0; i < string.length; i++){
                    if (i % 2 !== 0){
                    tempStr += string[i];
                    }
                }
                string = tempStr;
                console.log(string);
                break;
            case "Cut":
                let index = Number(value);
                let length = Number(value2);
                let substring = string.substring(index, index + length);
                string = string.replace(substring, "")
                console.log(string);
                break;
            case "Substitute":
                let replaceSubstring = value;
                let substitute = value2;
                if (string.includes(replaceSubstring)){
                    while (string.includes(replaceSubstring)){
                        string = string.replace(replaceSubstring, substitute);
                    }
                    console.log(string)
                } else {
                    console.log(`Nothing to replace!`)
                }
                break;
        }
        command = commands.shift()
    }
    console.log(`Your password is: ${string}`)
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

