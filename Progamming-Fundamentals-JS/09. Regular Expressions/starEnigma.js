function starEnigma(arr) {
    let numberOfKeys = arr.shift();
    let decrypterArr = [];
    let attackedArr = [];
    let destroyedArr = [];
    for (const key of arr) {
        let encryptRegex = /[STARstar]/g;
        let planetRegex = /(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>[\d]+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<count>[\d]+)/g
        let encryptNumber = Number(key.match(encryptRegex).length);
        let decryptedString = '';
        if (encryptRegex.test(key) === true) {
            for (const char of key) {
                let currentCharCode = char.charCodeAt();
                decryptedString += String.fromCharCode(currentCharCode - encryptNumber);
                decrypterArr.push(decryptedString);
            }
        } else {
            decrypterArr.push(decryptedString);
        }
        let match = planetRegex.match(decryptedString);
        if (match != null) {
            let match = planetRegex.exec(decryptedString);
            let planetName = match.groups.planet;
            let planetPopulation = match.groups.population;
            let planetAttackType = match.groups.attackType;
            let planetSoldierCount = match.groups.count;
            if (planetAttackType === "A") {
                attackedArr.push(planetName);
            } else {
                destroyedArr.push(planetName);
            }
        }
    }
}
attackedArr = attackedArr.sort((a, b) => a.localeCompare(b));
destroyedArr = destroyedArr.sort((a, b) => a.localeCompare(b));
console.log(`Attacked planets: ${attackedArr.length}`);
if (attackedArr.length > 0) {
    for (const planet of attackedArr) {
        console.log(`-> ${planet}`)
    }
}
console.log(`Destroyed planets: ${destroyedArr.length}`);
if (destroyedArr.length > 0) {
    for (const planet of destroyedArr) {
        console.log(`-> ${planet}`)
    }
}

starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
)