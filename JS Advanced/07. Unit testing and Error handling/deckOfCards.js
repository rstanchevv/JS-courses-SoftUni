function printDeckOfCards(cards){

    function playingCards(face,suit){
        const arrOfPossibleFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];
        if (!arrOfPossibleFaces.includes(face)){
            throw new Error('Invalid face')
        }
        if (!validSuits.includes(suit)){
            throw new Error('Invalid suit')
        }
        let cardsObj = {
            face,
            suit,
            toString: function () {
                switch (cardsObj.suit){
                    case 'S': this.suit = `\u2660`; break;
                    case 'H': this.suit = `\u2665`; break;
                    case 'D': this.suit = `\u2666`; break;
                    case 'C': this.suit = `\u2663`; break;
                }
                return (`${this.face}${this.suit}`)
            }
        };
        return cardsObj.toString();
    }

    let arr = [];


    for (const card of cards) {
        try {
        if (card.length === 3){
            let face = card.substring(0,2)
            let suit = card.substring(2,)
            arr.push(playingCards(face,suit))
        } else {
            let [face,suit] = card.split('');
            arr.push(playingCards(face,suit))
        }
    } catch (e){
        console.log(`Invalid card: ${card}`)
        return;
    }
    }
    console.log(arr.join(" "))
}
printDeckOfCards(['AS', '10D', 'KH', '2C'] )