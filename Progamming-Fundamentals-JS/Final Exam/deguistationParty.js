function deguistationParty(arr) {
    let obj = {};
    let dislikedArr = [];

    for (const line of arr) {
        let [action, guest, meal] = line.split("-");
        switch (action) {
            case "Like":
                if (!obj.hasOwnProperty(guest)){
                    obj[guest] = [];
                }
                if (!obj[guest].includes(meal)){
                    obj[guest].push(meal);
                }
                break;
            case "Dislike":
                if (!obj.hasOwnProperty(guest)){
                    console.log(`${guest} is not at the party.`)
                    break;
                }
                if (obj[guest].includes(meal)){
                    let indexOfMeal = obj[guest].indexOf(meal);
                    obj[guest].splice(indexOfMeal, 1);
                    dislikedArr.push(meal);
                    console.log(`${guest} doesn't like the ${meal}.`)
                } else {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`)
                }
                break;
        }
    }
    let keys = Object.keys(obj);
    for (const guest of keys) {
        console.log(`${guest}: ${obj[guest].join(", ")}`)
    }
    console.log(`Unliked meals: ${dislikedArr.length}`)
}
deguistationParty(["Like-Krisi-shrimps",
"Dislike-Vili-carp",
"Dislike-Krisi-salad",
"Stop"])


