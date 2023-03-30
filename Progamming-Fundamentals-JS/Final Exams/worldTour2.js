function worldTour2(arr){
    let allStops = arr.shift()
    let commands = arr.slice();
    let command = commands.shift();
    while (command !== "Travel"){
        let [currentCommand, value1, value2] = command.split(":");
        switch (currentCommand){
            case "Add Stop":
                if (Number(value1) >= 0 && Number(value1) < allStops.length){
                    allStops = `${allStops.substring(0, value1)}${value2}${allStops.substring(value1)}`;
                }
                console.log(allStops)
                break;
            case "Remove Stop":
                if ((Number(value1) >= 0 && Number(value1) < allStops.length) && (Number(value2) >= 0 && Number(value2) < allStops.length)){
                    let substirng = allStops.substring(Number(value1), (Number(value2) + 1));
                    allStops = allStops.replace(substirng,"");
                }
                console.log(allStops)
                break;
            case "Switch":
                if (allStops.includes(value1)){
                    allStops = allStops.replace(value1, value2);
                }
                console.log(allStops)
                break;
        }
        command = commands.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${allStops}`)
}
worldTour2(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])

