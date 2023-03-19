function hardWords(arr){
    let text = arr[0];
    let words = arr[1];
    let splitText = arr[0].split(" ");
    let newArr = [];
    for (let word of splitText) {
        if (word.includes("_")){
            let wordLength = word.length;
            let symbol = word[wordLength - 1];
            if (word[wordLength - 1] !== "_"){
                word = word.substring(0, wordLength - 1)
            }
            for (let keyWord of words) {
                if (word.length === keyWord.length){
                    let indexOfKeyword = words.indexOf(keyWord);
                    words.splice(indexOfKeyword, 1)
                    if (symbol !== "_"){
                        keyWord = `${keyWord}${symbol}`;
                    }
                    newArr.push(keyWord);
                    
                    break;
                }
            }
        } else {
            newArr.push(word)
        }
    }
    console.log(newArr.join(" "))
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)