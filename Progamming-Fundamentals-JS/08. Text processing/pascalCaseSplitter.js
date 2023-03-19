function pascalCaseSplitter(string){
    let newArr = [];
    let startIndex = 0;
    for (let i = startIndex; i < string.length; i++){
        let word  = ``;
        if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90)
        word += string[i];
        for (let j = i + 1; j < string.length; j++){
            if (j === string.length) {
                return;
            }
            let nextChar = string[j]
            if (nextChar.charCodeAt() >= 65 && nextChar.charCodeAt() <= 90){
                i = j - 1;
                break;
            } else {
                word += nextChar;
                i = j;
            }
        }
        newArr.push(word)
    }
    console.log(newArr.join(", "))
}
pascalCaseSplitter('ThisIsSoAnnoyingToDo')