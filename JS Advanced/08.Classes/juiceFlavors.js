function juiceFlavors(arr){
    let map = new Map()
    let obj = {};
    arr.forEach(x => {
        let [juice, amount] = x.split(' => ');
        if(!obj.hasOwnProperty(juice)){
            obj[juice] = 0;
        }
        obj[juice] += Number(amount);
        if(obj[juice] >= 1000){
            let bottles = Math.floor(obj[juice] / 1000);
            if (!map.has(juice)){
                map.set(juice, 0)
            }
            let currentBottles = map.get(juice);
            let newNumberOfBottles = currentBottles += bottles;
            map.set(juice, newNumberOfBottles)
            obj[juice] = obj[juice] % 1000;
        }
    })
    let mapEntries = map.entries();
    for (const [juice, bottles] of mapEntries) {
        console.log(`${juice} => ${bottles}`)
    }
}
juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)