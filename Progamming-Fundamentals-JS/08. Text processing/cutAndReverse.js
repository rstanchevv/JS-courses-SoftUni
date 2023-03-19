function cutAndReverse(string){
    let stringLength = string.length;
    let firstWord = '';
    let secondWord = ''
    for (let i = stringLength / 2 - 1; i >= 0; i--){
        firstWord += string[i];
    }
    for (let i = stringLength - 1; i >= stringLength / 2; i--){
        secondWord += string[i]
    }
    console.log(firstWord)
    console.log(secondWord)
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')