function theLift(arr) {
    let i = 0;
    let peopleWaitingForLift = Number(arr[0]);
    let liftSpace = arr[1].split(" ");
    let freeSpace = [];
    for (let i = 0; i < liftSpace.length; i++){
        liftSpace[i] = Number(liftSpace[i])
        let checkForFreeSpace = 4 - liftSpace[i];
        freeSpace.push(checkForFreeSpace);
    }
    while (peopleWaitingForLift > 0){
        if (i === liftSpace.length){
            break;
        }
        let temp = peopleWaitingForLift;
        peopleWaitingForLift -= freeSpace[i];
        if (peopleWaitingForLift === 0){
            liftSpace[i] += temp - peopleWaitingForLift;
            console.log(liftSpace.join(" "));
            return;
        }
        if (peopleWaitingForLift < 0){
            peopleWaitingForLift = 0;
        }
        liftSpace[i] += temp - peopleWaitingForLift;
        i++
    }
    console.log(peopleWaitingForLift > 0 ? `There isn't enough space! ${peopleWaitingForLift} people in a queue!` : `The lift has empty spots!`)
    console.log(liftSpace.join(" "))
}
theLift((["16", "0 0 0 0"]))

       // for (let i = 0; i < liftSpace.length; i++){
    //     let temp = peopleWaitingForLift;
    //     peopleWaitingForLift -= freeSpace[i];
    //     if (peopleWaitingForLift === 0){
    //         liftSpace[i] += temp - peopleWaitingForLift;
    //         console.log(liftSpace.join(" "))
    //         return;
    //     } else if(peopleWaitingForLift < 0){
    //         peopleWaitingForLift = 0;
    //         liftSpace[i] += temp - peopleWaitingForLift;
    //         break;
    //     }
    //     liftSpace[i] += temp - peopleWaitingForLift;
    // }
//    while (peopleWaitingForLift > 0){
//     if (peopleWaitingForLift > 0 && i > liftSpace.length -1){
//         console.log(`There isn't enough space! ${peopleWaitingForLift} people in a queue!`);
//         break;
//     }
//     if (peopleWaitingForLift >= 4){
//         peopleWaitingForLift -= 4;
//         liftSpace[i] = 4;
//     } else if (peopleWaitingForLift === 3){
//         peopleWaitingForLift -= 3;
//         liftSpace[i] = 3;
//     } else if (peopleWaitingForLift === 2){
//         peopleWaitingForLift -= 2;
//         liftSpace[i] = 2;
//     } else if (peopleWaitingForLift === 1){
//         peopleWaitingForLift -= 1;
//         liftSpace[i] = 1;
//     }
// i++    
// }
// console.log(`The lift has empty spaces!`)
// console.log(liftSpace.join(" "))
