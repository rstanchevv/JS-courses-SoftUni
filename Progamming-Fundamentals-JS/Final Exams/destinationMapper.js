function destinationMapper(string){
    let tourArr = [];
    let regex = /(?<delimiter>[=|\/])(?<country>[A-Z][A-Za-z]{2,})\k<delimiter>/g
    let match = regex.exec(string);
    while (match != null){
        if(!tourArr.includes(match[2])){
        tourArr.push(match[2])
        }
        match = regex.exec(string);
    }
    if (tourArr.length === 0){
        console.log(`Destinations:`);
    } else {
        console.log(`Destinations: ${tourArr.join(", ")}`);
    }
    function travelPoints(arr){
        if (arr.length === 0){
            return 0;
        } else {
            let sum = 0;
            for (const el of arr) {
                sum += el.length
            }
            return sum;
        }
    }
    console.log(`Travel Points: ${travelPoints(tourArr)} `)
}
destinationMapper("=Invalid/invalid==i5valid=/I5valid/=i=")