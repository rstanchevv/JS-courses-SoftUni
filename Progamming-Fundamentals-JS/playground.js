// function checkForPalindromeWord(){
//     let word = 'madam'
//     let reversedWord = '';
//     for (let i = word.length - 1; i >= 0; i--){
//         reversedWord += word[i];
//     }
//     word.replace(" ", "") === reversedWord.replace(" ", "") ? console.log(`palindrome`) : console.log(`not palindrome`)
// }
// checkForPalindromeWord()

// function generateAllCombinationsOfAstring(str){
//     let output = ""
//     for (let i = 0; i < str.length; i++){
//         for (let j = i; j < str.length;j ++){
//             output += str[j];
//             console.log(output)
//         }
//         output = "";
//     }
// }

// generateAllCombinationsOfAstring(`dog`)

// function sortLetters(string){
//     let newString = string.split("").sort((a,b) => a.localeCompare(b)).join("");
//     console.log(newString)


// }
// sortLetters(`webmaster`)

// function convertToUpperCase(string){
//     let regex = new RegExp("[a-z]+", "g")
//     let match = string.match(regex)
//     for (let i = 0; i < match.length; i++){
//         let firstLetterToUpperCase = match[i][0].toUpperCase();
//         match[i] = `${firstLetterToUpperCase}${match[i].substring(1, )}`
        
//     }
//     let newString = match.join(" ");
//     console.log(newString)
// }
// convertToUpperCase(`the quick brown fox`)

// function findLongestWord(text){
//     let max = Number.MIN_SAFE_INTEGER;
//     let textSplit = text.split(" ");
//     let longestWord = '';
//     for (const word of textSplit) {
//         if (word.length > max){
//             max = word.length;
//             longestWord = word;
//         }
//     }
//     console.log(longestWord)
// }
// findLongestWord(`Web Development dawdawdasdawdada`)

// function primeOrNot(number){
//     let isPrime = true;
//     if (number < 1) {
//         isPrime = false;
//     }
//     for (let i = 2; i < number; i++){
//         if (number % i === 0){
//             isPrime = false;
//             break;
//         }
//     }
//     isPrime === true ? console.log(`the number is prime`) : console.log(`the number is not prime`)
// }
// primeOrNot(3)

// function checkForInputType(data){
//     console.log(typeof data)
// }
// checkForInputType(['abc'])

// function uniqueCharacters(string){
//     let newString = '';
//     for (const cr of string) {
//         if (!newString.includes(cr)){
//             newString += cr;
//         }
//     }
//     console.log(newString)
// }
// uniqueCharacters(`thequickbrownfoxjumpsoverthelazydog`)

// function numberOfOccurences(str){
//     let uniquestr = ''
//     let currentCr = '';
//     let counter = 0;
//     for (let i = 0; i < str.length; i++){
//         if (!uniquestr.includes(str[i])){
//         uniquestr += str[i];
//         }
//     }
//     for (let i = 0; i < uniquestr.length; i++){
//         for (let j = 0 ; j < str.length; j++){
//             currentCr = uniquestr[i];
//             if (str[j] === currentCr){
//                 counter++
//             }
//         }
//         console.log(`${currentCr} = ${counter} occurences`);
//         currentCr = '';
//         counter = 0;
//     }
// }
// numberOfOccurences(`qsha`)

let arr = ['z', 's', 'a', 'd'];
arr.sort((a,b) => b.localeCompare(a))
console.log(arr)

