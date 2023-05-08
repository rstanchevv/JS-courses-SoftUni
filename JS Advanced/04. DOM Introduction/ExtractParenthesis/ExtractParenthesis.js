function extract(id){
    let textBehindId = document.getElementById(id);
    let wordsArr = [];
    let word = ''
    for (let i = 0; i < textBehindId.textContent.length; i++){
        if (textBehindId.textContent[i] === "("){
            for (let j = i + 1; j < textBehindId.textContent.length; j++){
                if (textBehindId.textContent[j] === ")"){
                    wordsArr.push(word);
                    break;
                } else {
                    word += textBehindId.textContent[j];
                }
            }
        }
        word = ''
    }
    return wordsArr.join("; ")
}