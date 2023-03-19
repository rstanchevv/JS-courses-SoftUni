function stringSubstring(word, text){
    let splitText = text.split(" ");
    for (const el of splitText) {
        if (el.toLowerCase() === word.toLowerCase()){
            console.log(word);
            return;
        }        
    }
    console.log(`${word} not found!`)
}
stringSubstring('python',

'JavaScript is the best programming language')