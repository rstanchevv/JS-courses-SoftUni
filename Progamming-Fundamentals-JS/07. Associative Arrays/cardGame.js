function cardGame(input) {
    let peopeObj = {}
    let obj = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    }
    for (const line of input) {
        let tokens = line.split(": ");
        let name = tokens[0];
        let cards = tokens[1].split(", ")
        if (!peopeObj.hasOwnProperty(name)){
            peopeObj[name] = [];
        }
        for (const card of cards) {
            if (!peopeObj[name].includes(card)){
                peopeObj[name].push(card)
            }
        }
    }
    let entries = Object.entries(peopeObj);

    for (const [key,value] of entries) {
        let sum = 0;
        for (const cards of value){
            let cardInfo = cards.split("");
            let cardType = cardInfo.pop();
            let cardPower = cardInfo.join('')
            let result = obj[cardPower] * obj[cardType];
            sum += result
        }
        console.log(`${key}: ${sum}`)
    }
}
    cardGame([
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )