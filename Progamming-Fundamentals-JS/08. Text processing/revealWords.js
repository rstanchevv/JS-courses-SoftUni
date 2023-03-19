function revealWords(words, text) {
    let textSplit = text.split(" ");
    let wordsSplit = words.split(", ")
    let newText = ''
    for (const el of textSplit) {
        for (const word of wordsSplit) {
            if (el.length === word.length && el.includes('*')) {
                newText = text.replace(el, word);
                text = newText;
            }
        }
    }
    console.log(newText)
}
    revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')