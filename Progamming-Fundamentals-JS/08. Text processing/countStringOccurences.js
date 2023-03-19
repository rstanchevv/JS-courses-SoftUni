// function countStringOccurences(string, word){
//     let obj = {};
//     obj[word] = 0;
//     let splitString = string.split(" ");
//     for (const el of splitString) {
//         if (el === word){
//             obj[word] += 1;
//         }
//     }
//     console.log(obj[word])
// }
// countStringOccurences('softuni is great place for learning new programming languages',

// 'softuni')

function countStringOccurences(string, word){
    let stringSplit = string.split(" ");
    let counter = 0;
    for (const el of stringSplit) {
        if (el === word){
            counter++
        }
    }
    console.log(counter)
}
countStringOccurences('This is a word and it also is a sentence',

'is')