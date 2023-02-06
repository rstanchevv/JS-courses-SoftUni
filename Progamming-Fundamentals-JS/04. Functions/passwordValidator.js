function passwordValidator(str){
    let validationForLength = validatePasswordForLength(str);
    let validationFor2Diggits = validatePasswordFor2DiggitsAtLeast(str);
    let validationForDiggtsAndLetters = validatePasswordForLettersAndDiggitsOnly(str);

    if (validationForLength === true && validationFor2Diggits === true && validationForDiggtsAndLetters === true){
        console.log(`Password is valid`)
    }
    if (validationForLength === false){
        console.log(`Password must be between 6 and 10 characters`)
    }
    if (validationForDiggtsAndLetters === false){
        console.log(`Password must consist only of letters and digits`)
    }
    if (validationFor2Diggits === false){
        console.log(`Password must have at least 2 digits`)
    }
    function validatePasswordForLength(a){
        if (a.length >= 6 && a.length <= 10){
            return true;
        }
        return false;
    }
    function validatePasswordFor2DiggitsAtLeast(a){
        let diggitCounter = 0;
        for (let i = 0; i < a.length; i++){
            if (a[i].charCodeAt() >= 48 && a[i].charCodeAt() <=57){
                diggitCounter++;
            }
            if (diggitCounter === 2){
                return true;
            }
        }
        return false;
    }
    function validatePasswordForLettersAndDiggitsOnly(a){
            return /^[A-Za-z0-9]*$/.test(a);
    }
}
passwordValidator('Pa$s$s')
