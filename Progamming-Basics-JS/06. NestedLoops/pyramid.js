function pyramid(input){
    let number = Number(input[0]);
    let counter = 0;
    let current = 1;
    let isBigger = false;
    let currentPrintLine = ''
    
    for (let rows=1; rows <= number;rows++){
        for (let cows = 1; cows <= rows; cows++){
            if (current > number){
                isBigger = true;
                break;
            }
            currentPrintLine += current + " ";
            current++
        }
        console.log(currentPrintLine);
        currentPrintLine = "";
        if (isBigger){
            break;
        }
    }
}
pyramid(["7"])