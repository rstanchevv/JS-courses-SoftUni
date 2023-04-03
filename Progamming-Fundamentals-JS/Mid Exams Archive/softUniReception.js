function softUniReception(arr){
    let firstEmployeeStudentsPerHour = Number(arr[0]);
    let secondEmployeeStudentsPerHour = Number(arr[1]);
    let thirdEmployeeStudentsPerHour = Number(arr[2]);
    let allStudentsWaiting = Number(arr[3])
    let hoursCounter = 0;
    let allEmployyesPerHour = firstEmployeeStudentsPerHour + secondEmployeeStudentsPerHour + thirdEmployeeStudentsPerHour;
    while (allStudentsWaiting > 0){
        hoursCounter++;
        if (hoursCounter % 4 === 0 ){
            continue;
        }
        allStudentsWaiting -= allEmployyesPerHour;
    }
    console.log(`Time needed: ${hoursCounter}h.`);
}
softUniReception(['1','2','3','45'])