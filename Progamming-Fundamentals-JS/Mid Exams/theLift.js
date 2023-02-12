function theLift(arr) {
    let peopleWaitingForLift = arr[0];
    let liftStatus = arr[1].split(" ");
    let availableSpace = liftStatus.map((a) => 4 - a);
    for (let i = 0; i < liftStatus.length; i++) {
        for (let j = 0; j < availableSpace[i]; j++) {
            liftStatus[i]++;
            peopleWaitingForLift--
            if (peopleWaitingForLift === 0) {
                if (liftStatus[liftStatus.length -1] === 4) {
                    console.log(liftStatus.join(" "));
                    return;
                }
                console.log(`The lift has empty spots!`);
                console.log(liftStatus.join(" "));
                return;
            }
        }
    }
console.log(`There isn't enough space! ${peopleWaitingForLift} people in a queue!`);
console.log(liftStatus.join(" "))
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
