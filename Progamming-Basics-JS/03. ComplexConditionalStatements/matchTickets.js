function matchTickets(input){
    let budget = Number(input[0]);
    let typeOfTicket = input[1];
    let numberOfPeople = Number(input[2]);

    let VIP = 499.99;
    let Normal = 249.99;
    let firstGroup = numberOfPeople >= 1 && numberOfPeople <= 4;
    let secondGroup = numberOfPeople >= 5 && numberOfPeople <= 9;
    let thirdGroup = numberOfPeople >= 10 && numberOfPeople <= 24;
    let fourthGroup = numberOfPeople >= 25 && numberOfPeople <= 49;
    let fifthGroup = numberOfPeople > 50;

    let transportFirstGroup = budget * 0.75;
    let transportSecondGroup = budget * 0.60;
    let transportThirdGroup = budget * 0.50;
    let transportFourthGroup = budget * 0.40;
    let transportFifthGroup = budget * 0.25

    if (firstGroup && typeOfTicket === "Normal"){
    let bill = budget > (numberOfPeople * Normal + transportFirstGroup);
        switch (bill){
            case true:
                let remaining = budget - (numberOfPeople * Normal + transportFirstGroup)
                console.log(`Yes! You have ${remaining.toFixed(2)} leva left.`)
                break;
            case false:
                let needed = (numberOfPeople * Normal + transportFirstGroup) - budget
                console.log(`Not enough money! You need ${needed.toFixed(2)} leva.`)
        }
    } else if (firstGroup && typeOfTicket === "VIP"){
        let bill = budget > (numberOfPeople * VIP + transportFirstGroup);
        switch (bill){
            case true:
                let remaining1 = budget - (numberOfPeople * VIP + transportFirstGroup)
                console.log(`Yes! You have ${remaining1.toFixed(2)} leva left.`)
                break;
            case false:
                let needed1 = (numberOfPeople * VIP + transportFirstGroup) - budget
                console.log(`Not enough money! You need ${needed1.toFixed(2)} leva.`)
                break;
        }
    } else if (secondGroup && typeOfTicket === "Normal"){
        let bill = budget > (numberOfPeople * Normal + transportSecondGroup);
        switch (bill){
            case true:
                let remaining2 = budget - (numberOfPeople * Normal + transportSecondGroup)
                console.log(`Yes! You have ${remaining2.toFixed(2)} leva left.`)
                break;
            case false:
                let needed2 = (numberOfPeople * Normal + transportSecondGroup) - budget
                console.log(`Not enough money! You need ${needed2.toFixed(2)} leva.`)
                break;
        }
    } else if (secondGroup && typeOfTicket === "VIP"){
        let bill = budget > (numberOfPeople * VIP + transportSecondGroup);
        switch (bill){
            case true:
                let remaining3 = budget - (numberOfPeople * VIP + transportSecondGroup)
                console.log(`Yes! You have ${remaining3.toFixed(2)} leva left.`)
                break;
            case false:
                let needed3 = (numberOfPeople * VIP + transportSecondGroup) - budget
                console.log(`Not enough money! You need ${needed3.toFixed(2)} leva.`)
                break;
        }
    } else if (thirdGroup && typeOfTicket === "Normal"){
        let bill = budget > (numberOfPeople * Normal + transportThirdGroup);
        switch (bill){
            case true:
                let remaining4 = budget - (numberOfPeople * Normal + transportThirdGroup)
                console.log(`Yes! You have ${remaining4.toFixed(2)} leva left.`)
                break;
            case false:
                let needed4= (numberOfPeople * Normal + transportThirdGroup) - budget
                console.log(`Not enough money! You need ${needed4.toFixed(2)} leva.`)
                break;
        }
    } else if (thirdGroup && typeOfTicket === "VIP"){
        let bill = budget > (numberOfPeople * VIP + transportThirdGroup);
        switch (bill){
            case true:
                let remaining5 = budget - (numberOfPeople * VIP + transportThirdGroup)
                console.log(`Yes! You have ${remaining5.toFixed(2)} leva left.`)
                break;
            case false:
                let needed5 = (numberOfPeople * VIP + transportThirdGroup) - budget
                console.log(`Not enough money! You need ${needed5.toFixed(2)} leva.`)
                break;
        }
    } else if (fourthGroup && typeOfTicket === "Normal"){
        let bill = budget > (numberOfPeople * Normal + transportFourthGroup);
        switch (bill){
            case true:
                let remaining6 = budget - (numberOfPeople * Normal + transportFourthGroup)
                console.log(`Yes! You have ${remaining6.toFixed(2)} leva left.`)
                break;
            case false:
                let needed6 = (numberOfPeople * Normal + transportFourthGroup) - budget
                console.log(`Not enough money! You need ${needed6.toFixed(2)} leva.`)
                break;
        }
    } else if (fourthGroup && typeOfTicket === "VIP"){
        let bill = budget > (numberOfPeople * VIP + transportFourthGroup);
        switch (bill){
            case true:
                let remaining7 = budget - (numberOfPeople * VIP + transportFourthGroup)
                console.log(`Yes! You have ${remaining7.toFixed(2)} leva left.`)
                break;
            case false:
                let needed7 = (numberOfPeople * VIP + transportFourthGroup) - budget
                console.log(`Not enough money! You need ${needed7.toFixed(2)} leva.`)
                break;
        }
    } else if (fifthGroup && typeOfTicket === "Normal"){
        let bill = budget > (numberOfPeople * Normal + transportFifthGroup);
        switch (bill){
            case true:
                let remaining8 = budget - (numberOfPeople * Normal + transportFifthGroup)
                console.log(`Yes! You have ${remaining8.toFixed(2)} leva left.`)
                break;
            case false:
                let needed8 = (numberOfPeople * Normal + transportFifthGroup) - budget
                console.log(`Not enough money! You need ${needed8.toFixed(2)} leva.`)
                break;
        }
    } else if (fourthGroup && typeOfTicket === "VIP"){
        let bill = budget > (numberOfPeople * VIP + transportFifthGroup);
        switch (bill){
            case true:
                let remaining9 = budget - (numberOfPeople * VIP + transportFifthGroup)
                console.log(`Yes! You have ${remaining8.toFixed(2)} leva left.`)
                break;
            case false:
                let needed9 = (numberOfPeople * VIP + transportFifthGroup) - budget
                console.log(`Not enough money! You need ${needed9.toFixed(2)} leva.`)
                break;
        }
    }
}   
matchTickets(["30000", "VIP", "49"])
