function destinationMapper2(text){
    let pattern = /([=\/])([A-Z][A-Za-z]{2,})\1/g
    let arr = [];
    let match = pattern.exec(text);
    let travelPoints = 0;
    while (match !== null){
        arr.push(match[2]);
        match = pattern.exec(text);
    }
    console.log(`Destinations: ${arr.join(", ")}`);
    if (arr.length > 0){
        for (const town of arr) {
            travelPoints += town.length;
        }
    }
    console.log(`Travel Points: ${travelPoints}`)
}
destinationMapper2('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')