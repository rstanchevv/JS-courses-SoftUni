function movingTarget(arr){
    let targetsArr = arr[0].split(" ").map(Number);
    let i = 1;
    let command = arr[i];
    i++
    while(command != "End"){
        let commandSplit = command.split(" ");
        if (commandSplit.includes("Shoot")){
            let index = Number(commandSplit[1]);
            let power = Number(commandSplit[2]);
            if (index >= 0 && index < targetsArr.length){
                targetsArr[index] -= power;
                if (targetsArr[index] <= 0){
                    targetsArr.splice(index, 1)
                }
            }
        } else if (commandSplit.includes("Add")){
            let index = Number(commandSplit[1]);
            let value =  Number(commandSplit[2]);
            if (index >=0 && index < targetsArr.length){
                targetsArr.splice(index, 0, value);
            } else {
                console.log(`Invalid placement!`)
            }
        } else if (commandSplit.includes("Strike")){
            let index = Number(commandSplit[1]);
            let radius = Number(commandSplit[2]);
            if (index - radius >= 0 && index + radius < targetsArr.length){
                targetsArr.splice(index - radius, radius * 2 + 1);
            } else {
                console.log(`Strike missed!`)
            }
        }
        command = arr[i];
        i++
    }
    console.log(targetsArr.join("|"))
}
movingTarget(["52 74 23 44 96 110",
"Add 2 4",
"Strike 2 2",
"Shoot 5 10",
"Shoot 1 80",
"Add 2 4",
"End"])

