function ladyBugs(arr){
    let fieldSize = arr[0];
    let ladyBugsPositions = arr[1].split(" ");
    let initialField = Array(fieldSize).fill(0);

    for (let i = ladyBugsPositions[0]; i <= ladyBugsPositions.length; i++){
        initialField[i] = 1;
    }
}
ladyBugs([ 3, '1 2',
'0 right 1',
'2 right 1' ])
