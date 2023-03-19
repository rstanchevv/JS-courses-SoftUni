function passwordGenerator(arr){
    let firstWord = arr[0];
    let secondWord = arr[1];
    let thirdWord = arr[2].split("")
    let thirdWordCopy = thirdWord.slice();

    let concatenatedString = firstWord.concat(secondWord);
    let splitString = concatenatedString.split("");
    for (let i = 0; i < splitString.length; i++) {
        let toLowerCase = splitString[i].toLowerCase();
        if (toLowerCase.charCodeAt() === 97 || toLowerCase.charCodeAt() === 101 || toLowerCase.charCodeAt() === 105 || toLowerCase.charCodeAt() === 111 || toLowerCase.charCodeAt() === 117){
            if (thirdWordCopy.length < 1){
                thirdWordCopy = thirdWord.slice()
            }
            splitString[i] = thirdWordCopy.shift().toUpperCase()
        }
    }
    let finalPassword = splitString.reverse().join("")
    console.log(`Your generated password is ${finalPassword}`)
}
passwordGenerator([

    'easymoneyeazylife',
    
    'atleasttencharacters',
    
    'absolute'
    
    ])