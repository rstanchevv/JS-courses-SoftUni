function mirrorWords(arr){
    let obj = {};
    let string = arr[0];
    let regex = /(?<delimiter>[@#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g
    let match = regex.exec(string);
    let counterWordPairs = 0;
    while (match != null){
        let firstWord = match[2];
        let secondWord = match[3].split("").reverse().join("");
        if (firstWord === secondWord){
            obj[firstWord] = match[3];
        }
        counterWordPairs++
        match = regex.exec(string)
    }
    let mirrorWordsString = ''
    let keys = Object.keys(obj);
    console.log(counterWordPairs > 0 ? `${counterWordPairs} word pairs found!` : `No word pairs found!`)
    if (keys.length === 0){
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`)
        for (let i = 0; i < keys.length; i++) {
            if (i === keys.length - 1){
                mirrorWordsString += `${keys[i]} <=> ${obj[keys[i]]}`
                break;
            }
            mirrorWordsString += `${keys[i]} <=> ${obj[keys[i]]}, `
        }
        console.log(mirrorWordsString)
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )