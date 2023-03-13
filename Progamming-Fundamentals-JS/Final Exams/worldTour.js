function worldTour(tourArr){
    let initialStops = tourArr[0];
    let index = 1;
    let command = tourArr[index];
    index++
    while (command !== "Travel"){
        let currentCommand = command.split(":");
        switch(currentCommand[0]){
            case "Add Stop":
                let index = Number(currentCommand[1]);
                let destination = currentCommand[2];
                if (index > 0 && index < initialStops.length){
                    initialStops = `${initialStops.substring(0, index)}${destination}${initialStops.substring(index, initialStops.length)}`
                    console.log(initialStops)
                }
                break;
            case "Remove Stop":
                let startIndex = currentCommand[1];
                let endIndex = currentCommand[2];
                if (startIndex > 0 && startIndex < initialStops.length && endIndex > 0 && endIndex < initialStops.length){
                    initialStops = `${initialStops.substring(startIndex,endIndex)}${initialStops.substring(endIndex + 1 +initialStops.length)}` 
                }
                break;
        }
        command = tourArr[index]
        index++
    }









}
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]
)