function piccolo(arr){
    let obj = {}
    for (const command of arr) {
        let [direction, carNumber] = command.split(", ")
        let number = Number(carNumber.slice(2,6))
        if(direction === "IN"){
            obj[carNumber] = number;
        } else {
            delete obj[carNumber]
        }
    }
    if (Object.keys(obj).length < 1){
        console.log(`Parking Lot is Empty`)
        return;
    }
    let sorting = Object.keys(obj).sort();
    for (const key of sorting) {
        console.log(key)
    }
}
piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])