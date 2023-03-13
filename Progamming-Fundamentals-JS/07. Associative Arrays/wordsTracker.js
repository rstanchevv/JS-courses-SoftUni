function wordsTracker(arr){
    let thisSentenceObj = {};
    let sentence = arr[0].split(" ");
    for (const word of sentence) {
        thisSentenceObj[word] = 0;
    }
    for (const words of arr.slice(1)) {
        if(thisSentenceObj.hasOwnProperty(words)){
            thisSentenceObj[words] += 1;}
    }
    let entries = Object.entries(thisSentenceObj).sort(([keyA, valueA],[keyB, valueB]) => valueB - valueA);
    for (const [key, value] of entries) {
        console.log(`${key} - ${value}`)
    }
}
wordsTracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'])