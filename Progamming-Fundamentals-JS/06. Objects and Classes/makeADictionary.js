function makeADictionary(arr){
    let myCollection = {};
    for (const line of arr) {
        let parseToObject = JSON.parse(line);
        let keys = Object.keys(parseToObject);
        let key = keys;
        myCollection[key] = parseToObject[key]
    }
    let sortKeys = Object.keys(myCollection).sort((a,b) => a.localeCompare(b));

    for (const key of sortKeys) {
        console.log(`Term: ${key} => Definition: ${myCollection[key]}`)
    }
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    
    ])