function arrayModifier(arr){
    let i = 0;
    let newArr = arr[0].split(" ").map(Number);
    i++
    let command = arr[i];
    while (command != "end"){
        let splitCommand = command.split(" ");
        if (splitCommand.includes("swap")){
            let firstIndex = Number(splitCommand[1]);
            let secondIndex = Number(splitCommand[2]);
            let temp = newArr[secondIndex];
            newArr[secondIndex] = newArr[firstIndex];
            newArr[firstIndex] = temp;
        }
        else if(splitCommand.includes("multiply")){
            let firstIndex = Number(splitCommand[1]);
            let secondIndex = Number(splitCommand[2]);
            let multiply = newArr[firstIndex] * newArr[secondIndex];
            newArr[firstIndex] = multiply;
        }
        else if (splitCommand.includes("decrease")){
            for (let i = 0; i < newArr.length; i++){
                newArr[i] -= 1
            }
        }
        i++
        command = arr[i];
    }
    return newArr.join(", ");
}
console.log(arrayModifier( [
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  
  ))