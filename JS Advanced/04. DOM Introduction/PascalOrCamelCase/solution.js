function solve(){
    let textInput = document.getElementById('text').value;
    let namingConventionInput = document.getElementById('naming-convention').value;
    let resultElement = document.getElementById('result');
    switch (namingConventionInput) {
        case "Camel Case":
            let textSplit = textInput.split(" ");
            for (let i = 0; i < textSplit.length; i++){
                if (i === 0){
                    textSplit[i] = textSplit[i].toLowerCase();
                    continue;
                }
                let firstLetterToUpperCase = textSplit[i][0].toUpperCase();
                let toLowerCase = textSplit[i].toLowerCase();
                console.log(firstLetterToUpperCase);
                console.log(toLowerCase)
                toLowerCase = toLowerCase.replace(toLowerCase[0], firstLetterToUpperCase);
                textSplit[i] = toLowerCase;
            }
            resultElement.textContent = textSplit.join("");
            break;
        case "Pascal Case":
            let textToArray = textInput.split(" ");
            for (let i = 0; i < textToArray.length; i++){
                let firstLetterToUpper = textToArray[i][0].toUpperCase();
                let textToLowerCase = textToArray[i].toLowerCase();
                textToLowerCase = textToLowerCase.replace(textToLowerCase[0], firstLetterToUpper);
                textToArray[i] = textToLowerCase;
            }
            resultElement.textContent = textToArray.join("");
            break;
        default:
            resultElement.textContent = 'Error!'
    }
}