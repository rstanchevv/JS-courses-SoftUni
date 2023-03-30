function winningTicket(input) {
    let inputArr = input.split(/\s*,\s*/);
    let pattern = /(\@{6,10}|\${6,10}|\^{6,10}|\#{6,10})/
    for (const word of inputArr) {
        if (word.length !== 20) {
            console.log(`invalid ticket`);
            continue;
        }
        let match = pattern.exec(word);
        if (match === null) {
            console.log(`ticket "${word}" - no match`);
            continue;
        }
        if (match !== null) {
            if (match[0] === match[1]) {
                let symbol = match[0][0];
                if (match[0].length === 10) {
                    console.log(`ticket "${word}" - ${match[0].length}${symbol} Jackpot!`)
                } else {
                    console.log(`ticket "${word}" - ${match[0].length}${symbol}`)
                }
            }
        }
    }
}
    winningTicket(`Cash$$$$$$Ca$$$$$$sh`)