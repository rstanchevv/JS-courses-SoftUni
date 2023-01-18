function numberstatements(input){
    let number = Number(input[0]);

    if (number > 5 && number < 10 && number % 2 == 0){
        console.log(`true`)
    } else {
        console.log(`false`)
    }
}
numberstatements([])