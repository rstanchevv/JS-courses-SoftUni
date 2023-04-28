function wordsUpperCase(string){
    let pattern = /\w+/g;
    let wordsArr = [];
    let match = pattern.exec(string)
    while (match !== null){
        wordsArr.push(match[0].toUpperCase());
        match = pattern.exec(string);
    }
    console.log(wordsArr.join(", "))
}
wordsUpperCase(`hello`)