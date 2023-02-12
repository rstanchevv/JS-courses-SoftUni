function shootForTheWin(arr){
    let targetsArr = arr[0].split(" ").map(Number);
    let index = 1;
    let shotCounter = 0;
    let command = arr[index];
    index++
    while (command != "End"){
        let currentShot = Number(command);
        if (currentShot >= 0 && currentShot < targetsArr.length){
            shotCounter++
            let temp = targetsArr[currentShot];
            targetsArr[currentShot] = -1;
            for (let i = 0; i < targetsArr.length; i++){
                if (targetsArr[i] === -1){
                    continue;
                }
                if (targetsArr[i] > temp){
                    targetsArr[i] -= temp;
                } else {
                    targetsArr[i] += temp;
                }
            }
        }
        command = arr[index];
        index++
    }
    console.log(`Shot targets: ${shotCounter} -> ${targetsArr.join(" ")}`)
}
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

