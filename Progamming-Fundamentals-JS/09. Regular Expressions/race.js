function race(arr){
    let racers = arr.shift().split(", ");
    let obj = {};
    let regexAZ = /(?<letters>[A-Za-z])/g
    let regexNumbers = /(?<numbers>\d)/g
    for (const racer of racers) {
        obj[racer] = 0;
    }
    let command = arr.shift();
    while (command !== "end of race"){
        let matchName = command.match(regexAZ).join("");
        let matchPoints = command.match(regexNumbers).map(Number).reduce((a,b) => a + b , 0);
        if (obj.hasOwnProperty(matchName)){
            obj[matchName] += matchPoints;
        }
        command = arr.shift()
    }
    let sorted = Object.keys(obj).sort((a,b) => obj[b] - obj[a]);
    console.log(`1st place: ${sorted[0]}`);
    console.log(`2nd place: ${sorted[1]}`);
    console.log(`3rd place: ${sorted[2]}`);
}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',

'Mi*&^%$ch123o!#$%#nne787) ',

'%$$B(*&&)i89ll)*&) ',

'R**(on%^&ald992) ',

'T(*^^%immy77) ',

'Ma10**$#g0g0g0i0e',

'end of race'])
