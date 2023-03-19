function emojiDetector(arr){
    let text = arr[0];
    let coolEmojisArr = [];
    let regexNumbers = /\d/g;
    let regexEmojis = /(:{2}|\*{2})([A-Z][a-z]{2,})(\1)/g
    let coolTreshhold = text.match(regexNumbers).map(Number).reduce((a,b) => a * b, 1);
    let match = regexEmojis.exec(text);
    let counter = 0;
    while (match !== null){
        counter++
        let currentEmojiTreshHold = 0;
        for (const char of match[2]) {
            currentEmojiTreshHold += char.charCodeAt();
        }
        if (currentEmojiTreshHold > coolTreshhold){
            coolEmojisArr.push(match[0])
        }
        match = regexEmojis.exec(text);
    }
    console.log(`Cool threshold: ${coolTreshhold}`);
    console.log(`${counter} emojis found in the text. The cool ones are:
${coolEmojisArr.join(`\n`)}`);
}
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])