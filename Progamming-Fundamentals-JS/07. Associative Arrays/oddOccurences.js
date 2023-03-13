function oddOccurences(string){
    let map = new Map();
    let stringToArray = string.split(" ");
    for (const word of stringToArray) {
        let currentWord = word.toLowerCase();
        if (!map.has(currentWord)){
            map.set(currentWord, 1)
        } else {
            let currentCount = map.get(currentWord);
            map.set(currentWord, currentCount + 1)
        }
    }
    let filter = [...map.entries()].filter(([key, value]) => value % 2 !== 0);
    
    let buffString = ``
    for (const [key] of filter) {
        buffString += ` ${key}`
    }
    console.log(buffString)
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')