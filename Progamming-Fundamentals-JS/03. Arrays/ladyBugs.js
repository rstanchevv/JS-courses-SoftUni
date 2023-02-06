function ladyBugs(arr) {
    let bugHasLanded = false;
    let fieldSize = arr[0];
    arr.shift();
    let newArr = new Array(fieldSize).fill(0);
    let ladyBugsLocation = arr[0].split(" ");
    for (let i = 0; i < ladyBugsLocation.length; i++) {
        const element = Number(ladyBugsLocation[i]);
        newArr[element] = 1;
    }
    arr.shift()
    for (let i = 0; i < arr.length; i++) {
        const movement = arr[i].split(" ")
        let startIndex = Number(movement[0]);
        let moveIndex = Number(movement[2]);
        if (startIndex >= fieldSize || startIndex < 0) {
            break;
        }
        if (movement.includes("right")) {
            if (newArr[startIndex] === 1) {
                for (let j = startIndex; j < fieldSize; j+=moveIndex) {
                    if (newArr[j] === 0) {
                        newArr[j] = 1;
                        newArr[startIndex] = 0;
                    } else{
                        newArr[startIndex] = 0;
                    }
                }
            }
        } else {
            if (newArr[startIndex] === 1) {
                for (let j = startIndex; j >= 0; j-=moveIndex) {
                    bugHasLanded = false;
                    if (newArr[j] === 0) {
                        newArr[j] = 1;
                        newArr[startIndex] = 0;
                        bugHasLanded = true;
                        if (bugHasLanded = true){
                            break;
                        }
                    }
                }
            }
        }
    }
    console.log(newArr.join(" "))
}
    ladyBugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1'])