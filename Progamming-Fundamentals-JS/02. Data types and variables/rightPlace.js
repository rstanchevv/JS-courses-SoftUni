function rightPlace(word, char, validationWord){
    let res = word.replace("_",char);
    if (res === validationWord){
        console.log(`Matched`)
    } else {
        console.log(`Not matched`)
    }



}
rightPlace('Str_ng', 'i', 'String')