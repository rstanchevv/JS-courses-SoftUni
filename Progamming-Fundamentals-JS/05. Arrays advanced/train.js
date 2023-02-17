function train(arr){
    let wagonsArray = arr[0].split(" ").map(Number);
    let maxCapacityOfEachWagon = Number(arr[1]);
    for (let i = 2; i < arr.length; i++){
        let command = arr[i];
        if (command.includes("Add")){
            let splitCommand = command.split(" ")
            wagonsArray.push(splitCommand[1]);
        } else {
            let filterPossibleWagonsOnly = wagonsArray.filter(x,)
            for (let j = 0; j <= arr.length; j++){
                let passengers = Number(arr[i]);
                if (passengers + wagonsArray[j] <= maxCapacityOfEachWagon){
                    wagonsArray[j] += passengers;
                    break;
                } else{
                    continue;
                }
            }
        }
    }
    return wagonsArray.join(" ")
}
console.log(train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
))