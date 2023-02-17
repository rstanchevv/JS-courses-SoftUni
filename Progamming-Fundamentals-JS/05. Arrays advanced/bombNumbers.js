function bombNumbers(sequence, bombNumber){
    let specialBombNumber = bombNumber[0];
    let occurence = Math.abs(bombNumber[1]);

    while(sequence.indexOf(specialBombNumber) !== -1){
        let indexOfBombNumber = sequence.indexOf(specialBombNumber);
        sequence.splice(Math.max(0, indexOfBombNumber - occurence), occurence * 2 + 1)
    }
    return sequence.reduce((sum, element) => sum += element,0);
}
console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]))