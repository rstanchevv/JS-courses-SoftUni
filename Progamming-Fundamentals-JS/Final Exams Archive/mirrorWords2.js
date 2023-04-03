function mirrorWords2(text){
    let pattern = /([#|@])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;
    let arr = [];
    let match = pattern.exec(text);
    let counter = 0;
    while (match !== null){
        counter++
        if (match.groups.wordOne === match.groups.wordTwo.split("").reverse().join("")){
            arr.push(match.groups.wordOne);
            arr.push(match.groups.wordTwo);
        }
        match = pattern.exec(text);
    }
    if (counter === 0){
        console.log(`No word pairs found!`)
    } else {
        console.log(`${counter} word pairs found!`);
    }
    if (arr.length === 0){
        console.log(`No mirror words!`);
        return;
    }
    console.log(`The mirror words are: `)
    let buff = '';
    for (let i = 0; i < arr.length; i+=2){
        if (i === arr.length - 2){
            buff += `${arr[i]} <=> ${arr[i+1]}`;
            break;
        }
        buff += `${arr[i]} <=> ${arr[i+1]}, `
    }
    buff =  buff.trimEnd();
    console.log(buff)
}
mirrorWords2([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]
    
    )