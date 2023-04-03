function worldTour(arr){
    let initialTour = arr[0];
    let copyArr = arr.slice(1);
    let command = copyArr.shift();
    while (command !== "Travel"){
        let commandSplit = command.split(":");
        switch (commandSplit[0]){
            case "Add Stop":
                let stopIndex = Number(commandSplit[1]);
                let stopString = commandSplit[2];
                if (stopIndex >= 0 && stopIndex < initialTour.length){
                    initialTour = `${initialTour.substring(0, stopIndex)}${stopString}${initialTour.substring(stopIndex, initialTour.length)}`;
                }
                console.log(initialTour);
                break;
            case "Remove Stop":
                let removeStartIndex = Number(commandSplit[1]);
                let removeEndIndex = Number(commandSplit[2]);
                if ((removeStartIndex >= 0 && removeStartIndex < initialTour.length) && (removeEndIndex >= 0 && removeEndIndex < initialTour.length)){
                    let initialTourSplit = initialTour.split("");
                    initialTourSplit.splice(removeStartIndex, (removeEndIndex - removeStartIndex + 1))
                    initialTour = initialTourSplit.join("")
                }
                console.log(initialTour);
                break;
            case "Switch":
                let oldString = commandSplit[1];
                let newString = commandSplit[2];
                // while (initialTour.includes(oldString)){
                //     initialTour = initialTour.replace(oldString, newString);
                // }
                if (initialTour.includes(oldString)){
                    initialTour = initialTour.replace(oldString, newString)
                }
                console.log(initialTour);
                break;
        }
        command = copyArr.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${initialTour}`)
}

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])