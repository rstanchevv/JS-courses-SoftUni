function gladiatorInventory(arr) {
    let initialInventory = arr[0].split(" ");
    for (let i = 1; i < arr.length; i++) {
        let commandSplit = arr[i].split(" ");
        switch (commandSplit[0]) {
            case "Buy":
                if (!initialInventory.includes(commandSplit[1])) {
                    initialInventory.push(commandSplit[1]);
                }
                break;
            case "Trash":
                if (initialInventory.indexOf(commandSplit[1]) !== -1) {
                    initialInventory.splice(initialInventory.indexOf(commandSplit[1]), 1);
                }
                break;
            case "Repair":
                if (initialInventory.includes(commandSplit[1])) {
                    let temp = initialInventory[initialInventory.indexOf(commandSplit[1])];
                    initialInventory.splice(initialInventory.indexOf(commandSplit[1]), 1);
                    initialInventory.push(temp)
                }
                break;
            case "Upgrade":
                let secondCommandSplit = commandSplit[1].split("-");
                if (initialInventory.includes(secondCommandSplit[0])) {
                    let indexOfElement = initialInventory.indexOf(secondCommandSplit[0]);
                    initialInventory.splice(indexOfElement + 1, 0, `${secondCommandSplit[0]}:${secondCommandSplit[1]}`)
                }
                break;
        }
    }
    console.log(initialInventory.join(" "))
}
gladiatorInventory(['SWORD Shield Spear',

'Buy Bag',

'Trash Shield',

'Repair Spear',

'Upgrade SWORD-Steel'])