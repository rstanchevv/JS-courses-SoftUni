function fOrM(input){
    let gender = input[1];
    let years = Number(input[0]);
    

    if (gender === "f"){
        if (years < 16){
            console.log(`Miss`)
        } else {
            console.log(`Ms.`)
        }
    } if (gender === "m"){
        if (years < 16){
            console.log(`Master`);
        } else {
            console.log(`Mr.`)
        }
    }
}
fOrM(["16", "m"])