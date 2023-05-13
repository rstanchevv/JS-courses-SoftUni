function townsToJSON(arr){
    let newArr = [];
    let obj = {};
    let pattern = /\w+\.?\s*\w+/g
    let headings = arr.shift().match(/\s\w+/g)
    for (let i = 0; i < headings.length; i++) {
        obj[headings[i].trimStart()] = 0;
    }
    for (const row of arr) {
        let copyObj = JSON.parse(JSON.stringify(obj))
        let info = row.match(pattern)
        let Latitude = Number(info[1]);
        let Longitude = Number(info[2]);
        copyObj.Town = info[0];
        copyObj.Latitude = Number(Latitude.toFixed(2))
        copyObj.Longitude = Number(Longitude.toFixed(2))
        newArr.push(copyObj)
    }
    return JSON.stringify(newArr)
}
console.log(townsToJSON(['| Town | Latitude | Longitude |',

'| Veliko Turnovo | 43.0757 | 25.6172 |',

'| Monatevideo | 34.50 | 56.11 |']))