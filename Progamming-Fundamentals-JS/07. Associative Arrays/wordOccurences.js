// function wordOccurences(input){
//     let map = new Map ();
//     for (const word of input) {
//         if (!map.has(word)){
//             map.set(word, 1);
//         } else{
//             let courrentCount = map.get(word);
//             map.set(word, courrentCount + 1)
//         }
//     }
//     let entries = [...map.entries()].sort((a,b) => b[1] - a[1]);
//     for (const [word, counter] of entries) {
//         console.log(`${word} -> ${counter} times`)
//     }
// }
function wordOccurences(input){
    let obj = {};
    for (const word of input) {
        if (!obj.hasOwnProperty(word)){
            obj[word] = 1;
        } else {
            obj[word] += 1;
        }
    }
    let entries = Object.entries(obj).sort(([random1, counter], [random, counter2]) => counter2 - counter)
    for (const [word, counter] of entries) {
        console.log(`${word} -> ${counter} times`)
    }
}
wordOccurences(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])