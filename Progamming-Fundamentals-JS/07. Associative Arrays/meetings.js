function meetings(input){
    let obj = {}
    for (const el of input) {
        let tokens = el.split(" ");
        let weekDay = tokens[0];
        let name = tokens[1];
        if (!obj.hasOwnProperty(weekDay)){
        obj[weekDay] = name;
        console.log(`Scheduled for ${weekDay}`);
        } else {
            console.log(`Conflict on ${weekDay}!`)
        }
    }
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`)
    }
}
meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])