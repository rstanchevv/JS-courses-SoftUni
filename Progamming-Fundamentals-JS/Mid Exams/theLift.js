function theLift(arr) {
    let peopleWaitingForLift = Number(arr[0]);
    let liftSpace = arr[1].split(" ").map(Number);
    for (let i = 0; i < liftSpace.length; i++) {
        let onboarded = 0;
        for (let j = 0; j < 4 - liftSpace[i]; j++) {
            onboarded++
            peopleWaitingForLift--
            if (peopleWaitingForLift === 0){
                liftSpace[i] += onboarded;
                console.log(`The lift has empty spots!`)
                console.log(liftSpace.join(" "));
                return;
            }
        }
        liftSpace[i] += onboarded;
    }
    if (liftSpace[liftSpace.length - 1] === 4 && peopleWaitingForLift === 0) {
        console.log(liftSpace.join(" "))
        return;
    }
    console.log(`There isn't enough space! ${peopleWaitingForLift} people in a queue!`);
    console.log(liftSpace.join(" "))
}
theLift([
    "20",
    "0 2 0"
   ]   
   )

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
