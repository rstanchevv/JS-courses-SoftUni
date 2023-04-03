function stringManipulator(arr){
    let myString = arr.shift();
    let commands = arr.slice();
    let command = commands.shift();
    while (command !== "End"){
        let [currentCommand, ...rest] = command.split(" ");
        switch(currentCommand){
            case "Translate":
                let [char, replacement] = rest;
                let regex = new RegExp(char, "g");
                myString = myString.replace(regex, replacement);
                console.log(myString);
                break;
            case "Includes":
                let [substring] = rest;
                myString.includes((substring)) ? console.log(`True`) : console.log(`False`)
                break;
            case "Start":
                let [string] = rest;
                myString.startsWith(string) ? console.log(`True`) : console.log(`False`)
                break;
            case "Lowercase":
                myString = myString.toLowerCase();
                console.log(myString);
                break;
            case "FindIndex":
                let [findChar] = rest;
                console.log(myString.lastIndexOf(findChar))
                break;
            case "Remove":
                let [startIndex, count] = rest;
                let subStringForReplacement = myString.substring(Number(startIndex), Number(startIndex) + Number(count));
                myString = myString.replace(subStringForReplacement, "");
                console.log(myString);
        }
        command = commands.shift();
    }
}
stringManipulator(["//Thi5 I5 MY 5trING!//",
"Translate 5 s",
"Includes string",
"Start //This",
"Lowercase",
"FindIndex i",
"Remove 0 10",
"End"])

console.log(`----------------------------`)

stringManipulator(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])



