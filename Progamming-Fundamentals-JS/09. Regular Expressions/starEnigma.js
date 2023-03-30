function starEnigma(arr){
    let numberOfMessages = arr.shift();
    let attackedPlanets = [];
    let DestroyedPlanets = [];
    let encryptedPattern = /[STARstar]/g;
    let validPlanetPattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[AD])[^@\-!:>]*!->(?<soldierCount>\d+)/
    for (let i = 0; i < arr.length; i ++){
        if (validPlanetPattern.test(arr[i]) === false){
            let encryptedMessage = encrypt(arr[i], (arr[i].match(encryptedPattern)).length);
        }
    }
        
    }
    function encrypt(message, number){
        let newText = '';
        for (const cr of message) {
            newText += String.fromCharCode(cr.charCodeAt() - number);
        }
        return newText;
    }
}

starEnigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR']
)