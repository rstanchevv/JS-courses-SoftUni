function modernTime(text){
    let textSplit = text.split(" ");
    let words = '';
    let isSpecial = true;
    for (const word of textSplit) {
        if (word.startsWith("#") && word.length > 1){
            for (let i = 1; i < word.length; i++){
                if (!(word[i].charCodeAt() >= 65 && word[i].charCodeAt() <=90) && !(word[i].charCodeAt() >= 97 && word[i].charCodeAt() <= 122)){
                    isSpecial = false;
                    break;
                }
            }
            if(isSpecial){
            words += `${word.slice(1)}\n`;
            }
        }
        isSpecial = true;
    }
    console.log(words)
}
modernTime('Nowadays everyone uses ### to tag a #special word in #socialMedia')