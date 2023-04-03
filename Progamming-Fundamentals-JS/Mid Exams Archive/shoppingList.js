function shoppingList(arr){
    let initialList = arr[0].split("!");
    let commands = arr.slice(1);
    let index = 0;
    let currentCommand = commands[index];
    index++
    while (currentCommand !== "Go Shopping!"){
        let currentCommandSplit = currentCommand.split(" ");
        switch (currentCommandSplit[0]){
            case "Urgent":
                if (findItem(currentCommandSplit[1], initialList) === false){
                    initialList.unshift(currentCommandSplit[1]);
                } else {
                    currentCommand =  commands[index];
                    index++
                    continue;
                }
                break;
            case "Unnecessary":
                if (findItem(currentCommandSplit[1], initialList) === true){
                    initialList.splice(initialList.indexOf(currentCommandSplit[1]), 1);
                } else{
                    currentCommand =  commands[index];
                    index++
                    continue;
                }
                break;
            case "Correct":
                if (findItem(currentCommandSplit[1], initialList) === true){
                    let itemIndex = initialList.indexOf(currentCommandSplit[1]);
                    initialList[itemIndex] = currentCommandSplit[2];
                } else{
                    currentCommand =  commands[index];
                    index++
                    continue;
                }
                break;
            case "Rearrange":
                if (findItem(currentCommandSplit[1], initialList) === true){
                    let itemIndex = initialList.indexOf(currentCommandSplit[1]);
                    initialList.splice(itemIndex,1);
                    initialList.push(currentCommandSplit[1]);
                } else {
                    currentCommand =  commands[index];
                    index++
                    continue;
                }
                break;
        }
        currentCommand =  commands[index];
        index++
    }
    function findItem (item,arr){
        for (let i = 0; i < arr.length; i++){
            if (arr[i] === item){
                return true;
            } 
        }
        return false;
    }
    console.log(initialList.join(", "))
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

