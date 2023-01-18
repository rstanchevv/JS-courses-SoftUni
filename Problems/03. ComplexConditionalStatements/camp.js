function camp(input){
    let season = input[0];
    let gender = input[1];
    let countStudents = Number(input[2]);
    let countNights = Number(input[3]);
    let discounts = countStudents > 50 || (countStudents >= 20 && countStudents) < 50 || (countStudents >= 10 && countStudents < 20)

    let typeSport = "";
    if (season === "Winter" && gender === "girls"){
        typeSport = "Gymnastics"
        let sum = countStudents * countNights * 9.60;
        switch (discounts){
            case countStudents > 50:
                sum = sum * 0.50
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            case countStudents >= 20 && countStudents < 50:
                sum = sum * 0.85
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            case countStudents >= 10 && countStudents < 20:
                sum = sum * 0.95
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            default:
                let sumdef = countStudents * countNights * 9.60;
                console.log(`${typeSport} ${sumdef.toFixed(2)} lv.`)
        }
    } else if (season === "Winter" && gender === "boys"){
        typeSport = "Judo"
        let sum = countStudents * countNights * 9.60;
        switch (discounts){
            case countStudents > 50:
                sum = sum * 0.50
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            case countStudents >= 20 && countStudents < 50:
                sum = sum * 0.85
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            case countStudents >= 10 && countStudents < 20:
                sum = sum * 0.95
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            default:
                let sumdef = countStudents * countNights * 9.60;
                console.log(`${typeSport} ${sumdef.toFixed(2)} lv.`)
        }
    } else if (season === "Winter" && gender === "mixed"){
        typeSport = "Ski"
        let sum = countStudents * countNights * 10;
        switch (discounts){
            case countStudents > 50:
                sum = sum * 0.50
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            case countStudents >= 20 && countStudents < 50:
                sum = sum * 0.85
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            case countStudents >= 10 && countStudents < 20:
                sum = sum * 0.95
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            default:
                let sumdef = countStudents * countNights * 10;
                console.log(`${typeSport} ${sumdef.toFixed(2)} lv.`)
        }
    }  else if (season === "Spring" && gender === "girls"){
        typeSport = "Athletics"
        let sum = countStudents * countNights * 7.20;
        switch (discounts){
            case countStudents > 50:
                sum = sum * 0.50
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            case countStudents >= 20 && countStudents < 50:
                sum = sum * 0.85
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            case countStudents >= 10 && countStudents < 20:
                sum = sum * 0.95
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            default:
                let sumdef = countStudents * countNights * 7.20;
                console.log(`${typeSport} ${sumdef.toFixed(2)} lv.`)
        }
    } else if (season === "Spring" && gender === "boys"){
        typeSport = "Tennis"
        let sum = countStudents * countNights * 7.20;
        switch (discounts){
            case countStudents > 50:
                sum = sum * 0.50
                console.log(`${typeSport} ${sum.toFixed(2)}`);
                break;
            case countStudents >= 20 && countStudents < 50:
                sum = sum * 0.85
                console.log(`${typeSport} ${sum.toFixed(2)}`);
                break;
            case countStudents >= 10 && countStudents < 20:
                sum = sum * 0.95
                console.log(`${typeSport} ${sum.toFixed(2)}`);
                break;
            default:
                let sumdef = countStudents * countNights * 7.20;
                console.log(`${typeSport} ${sumdef.toFixed(2)} lv.`)
        }
    } else if (season === "Spring" && gender === "mixed"){
        typeSport = "Cycling"
        let sum = countStudents * countNights * 9.50;
        switch (discounts){
            case countStudents > 50:
                sum = sum * 0.50
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            case countStudents >= 20 && countStudents < 50:
                sum = sum * 0.85
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            case countStudents >= 10 && countStudents < 20:
                sum = sum * 0.95
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            default:
                let sumdef = countStudents * countNights * 9.50;
                console.log(`${typeSport} ${sumdef.toFixed(2)} lv.`)
        }
    } else if (season === "Summer" && gender === "girls"){
        typeSport = "Volleyball"
        let sum = countStudents * countNights * 15.00;
        switch (discounts){
            case countStudents > 50:
                sum = sum * 0.50
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            case countStudents >= 20 && countStudents < 50:
                sum = sum * 0.85
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            case countStudents >= 10 && countStudents < 20:
                sum = sum * 0.95
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            default:
                let sumdef = countStudents * countNights * 15.00;
                console.log(`${typeSport} ${sumdef.toFixed(2)} lv.`)
        }
    } else if (season === "Summer" && gender === "boys"){
        typeSport = "Football"
        let sum = countStudents * countNights * 15.00;
        switch (discounts){
            case countStudents > 50:
                sum = sum * 0.50
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            case countStudents >= 20 && countStudents < 50:
                sum = sum * 0.85
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            case countStudents >= 10 && countStudents < 20:
                sum = sum * 0.95
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            default:
                let sumdef = countStudents * countNights * 15.00;
                console.log(`${typeSport} ${sumdef.toFixed(2)} lv.`)
        }
    } else if (season === "Summer" && gender === "mixed"){
        typeSport = "Swimming"
        let sum = countStudents * countNights * 20;
        switch (discounts){
            case countStudents > 50:
                sum = sum * 0.50
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            case countStudents >= 20 && countStudents < 50:
                sum = sum * 0.85
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            case countStudents >= 10 && countStudents < 20:
                sum = sum * 0.95
                console.log(`${typeSport} ${sum.toFixed(2)} lv.`);
                break;
            default:
                let sumdef = countStudents * countNights * 20;
                console.log(`${typeSport} ${sumdef.toFixed(2)} lv.`)
        }
    }
}
camp(["Winter", "mixed", "9", "15"])