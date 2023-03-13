function aMinerTask(input){
    let obj = {};
    for (let i = 0; i < input.length; i+=2){
        let resource = input[i];
        let amount = Number(input[i+1]);
        if (obj.hasOwnProperty(resource)){
            obj[resource] += amount;
        } else {
            obj[resource] = amount
        }
    }
    let entries = Object.entries(obj);
    for (const [key, value] of entries) {
        console.log(`${key} -> ${value}`)
    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )