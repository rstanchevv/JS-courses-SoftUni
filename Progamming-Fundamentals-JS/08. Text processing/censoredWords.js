function censoredWords(text, censoredWord){
    let censoredText = text.replace(censoredWord, '*'.repeat(censoredWord.length))
    while (censoredText.includes(censoredWord)){
        censoredText = censoredText.replace(censoredWord, '*'.repeat(censoredWord.length))
    }
    console.log(censoredText)
}
censoredWords('Find the hidden word hidden hidden', 'hidden')