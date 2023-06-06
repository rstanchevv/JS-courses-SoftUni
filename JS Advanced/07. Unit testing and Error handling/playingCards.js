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
        toString: () => {
            switch (cardsObj.suit){
                case 'S': cardsObj.suit = `\u2660`; break;
                case 'H': cardsObj.suit = `\u2665`; break;
                case 'D': cardsObj.suit = `\u2666`; break;
                case 'C': cardsObj.suit = `\u2663`; break;
            }
            return (`${cardsObj.face}${cardsObj.suit}`)
        }
    };
    return cardsObj;
}
let p = playingCards('10', 'H');
p.toString()