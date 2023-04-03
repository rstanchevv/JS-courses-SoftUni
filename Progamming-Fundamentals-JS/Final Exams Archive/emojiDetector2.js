function emojiDetector2(arr){
    let numbersPattern = /\d/g
    let coolEmojisArr = [];
    let emojisPattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})(\1)/g
    let coolTreshHold = arr[0].match(numbersPattern).map(Number).reduce((a,b) => a*b, 1);
    let match = emojisPattern.exec(arr[0]);
    let counter = 0;
    while (match !== null){
        counter++
        let emojiCoolness = 0;
        for (const cr of match.groups.emoji) {
            emojiCoolness += Number(cr.charCodeAt());
        }
        if (emojiCoolness > coolTreshHold){
            coolEmojisArr.push(match[0])
        }
        match = emojisPattern.exec(arr[0]);
    }
    console.log(`Cool threshold: ${coolTreshHold}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`)
    for (const emoji of coolEmojisArr) {
        console.log(emoji)
    }
}
emojiDetector2(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])