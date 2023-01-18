function cinema(input){
    let projection = input[0];
    let row = Number(input[1]);
    let column = Number(input[2]);

    let income = row * column;
    switch (projection){
        case "Premiere":
            console.log(`${(income * 12.00).toFixed(2)} leva.`);
            break;
        case "Normal":
            console.log(`${(income * 7.50).toFixed(2)} leva.`);
            break;
        case "Discount":
            console.log(`${(income * 5.00).toFixed(2)} leva.`);
            break;
    }
}
cinema(["Normal", "21", "13"])