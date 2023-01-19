function triplesOfLatinLetters(n){
    for (let i = 0; i < n; i++){
        let firstLetter = String.fromCharCode(97+i);
        for (let j = 0; j < n; j++){
            let secondLetter = String.fromCharCode(97+j);
            for (let k = 0;k < n; k++){
                let thirdLetter = String.fromCharCode(97+k)
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`)
            }
        }
    }
}
triplesOfLatinLetters('3')