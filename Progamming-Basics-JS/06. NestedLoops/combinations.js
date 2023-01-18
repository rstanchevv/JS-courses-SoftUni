function combinations(input){
    let enteredNumber = Number(input[0]);
    let counter = 0;
    for (let x = 0; x <= enteredNumber; x++){
        for (let y = 0; y <= enteredNumber; y++){
            for (let z = 0; z <= enteredNumber; z++){
                if (x + y + z === enteredNumber){
                    counter++
                }
            }
        }
    }
    console.log(counter)
}
combinations(["5"])