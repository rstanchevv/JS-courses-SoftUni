function flightSchedule(mainArr) {
    let flightsArr = mainArr[0];
    let statuses = mainArr[1];
    let flightStatus = mainArr[2][0];
    let isCancelled = false;
    let flightsObj = {};
    let cancelledArr = [];
    let readyToFlyArr = [];
    for (let flightLine of flightsArr){
        let [flightID, ... destination] = flightLine.split(" ");
        destination = destination.join(" ")
        flightsObj[flightID] = destination;
    }
    for (let statusLine of statuses){
        let flightID = statusLine.split(" ")[0];
        if (flightStatus === "Cancelled"){
            isCancelled = true;
            if (flightsObj.hasOwnProperty(flightID)){
                let tempObj = {};
                tempObj.Destination = flightsObj[flightID];
                tempObj.Status = "Cancelled";
                cancelledArr.push(tempObj);
            }
            cancelledArr = cancelledArr.sort((a,b) => a.Destination.localeCompare(b.Destination));
        } else {
            if (flightsObj.hasOwnProperty(flightID)){
                delete flightsObj[flightID];
            }
        }
    }
    if (isCancelled){
        for (let cancelledFlight of cancelledArr){
            console.log(cancelledFlight)
        }
    } else {
        for (key of Object.keys(flightsObj)){
            let tempObj = {};
            tempObj.Destination = flightsObj[key];
            tempObj.Status = "Ready to fly";
            console.log(tempObj)
        }
    }
}
flightSchedule([['WN269 Delaware',

    'FL2269 Oregon',

    'WN498 Las Vegas',

    'WN3145 Ohio',

    'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'], ['Cancelled']])