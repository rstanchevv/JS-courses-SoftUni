function arrayManipulator(arrNumbers, arrStrings) {
    let index = 0;
    let command = arrStrings[index];
    index++
    while (command != "print") {
        let splitCommand = command.split(" ");
        switch (splitCommand[0]) {
            case "add":
                arrNumbers.splice(splitCommand[1], 0, Number(splitCommand[2]));
                break;
            case "addMany":
                for (let i = 2; i < splitCommand.length; i++) {
                    arrNumbers.splice(splitCommand[1], 0, Number(splitCommand[i]));
                    splitCommand[1]++
                }
                break;
            case "contains":
                console.log(arrNumbers.indexOf(Number(splitCommand[1])));
                break;
            case "remove":
                arrNumbers.splice(splitCommand[1], 1);
                break;
            case "shift":
                for (let i = 0; i < splitCommand[1]; i++) {
                    arrNumbers.push(arrNumbers.shift());
                }
                break;
            case "sumPairs":
                arrNumbers = sumPairs(arrNumbers);
        }
        command = arrStrings[index];
        index++
    }
    console.log(`[ ${arrNumbers.join(", ")} ]`)
    function sumPairs(arr){
        let sumOfTwoElements = 0;
        let newArr = [];
        for (let i = 0; i <= arr.length; i++){
            if (arr.length === 1){
                newArr.push(arr[0])
                break;
            }
            sumOfTwoElements = (arr.shift() + arr.shift());
            newArr.push(sumOfTwoElements);
            i = 0;
        }
        return newArr;
    }
}
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3],
    ["sumPairs", "shift 3", "sumPairs", "addMany 0 -1 -2 -3", "print"])

