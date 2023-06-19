class SummerCamp{
    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }
    registerParticipant (name, condition, money){
        if (!Object.keys(this.priceForTheCamp).includes(condition)){
            throw new Error("Unsuccessful registration at the camp.")
        }
        if (this.listOfParticipants.includes(name)){
            return `The ${name} is already registered at the camp.`
        }
        if (money < this.priceForTheCamp[condition]){
            return `The money is not enough to pay the stay at the camp.`
        } 
        this.listOfParticipants.push({name, condition, power: 100, wins: 0});
        return `The ${name} was successfully registered.`
    }
    unregisterParticipant (name){
        let findName = this.listOfParticipants.find(x => x.name === name);
        let indexOf = this.listOfParticipants.indexOf(findName);
        if (indexOf === -1){
            throw new Error(`The ${name} is not registered in the camp.`)
        } else {
            this.listOfParticipants.splice(indexOf,1)
            return `The ${name} removed successfully.`
        }
    }
    timeToPlay (typeOfGame, participant1, participant2){
        if (typeOfGame === 'WaterBalloonFights'){
            let findFirstParticipant = this.listOfParticipants.find(x => x.name === participant1)
            let indexOfFirstParticipant = this.listOfParticipants.indexOf(findFirstParticipant)
            let findSecondParticipant = this.listOfParticipants.find(x => x.name === participant2)
            let indexOfSecondParticipant = this.listOfParticipants.indexOf(findSecondParticipant)
            if(indexOfFirstParticipant === -1 || indexOfSecondParticipant === -1){
                throw new Error(`Invalid entered name/s.`)
            }
            if (this.listOfParticipants[indexOfFirstParticipant].condition !== this.listOfParticipants[indexOfSecondParticipant].condition){
                throw new Error(`Choose players with equal condition.`)
            }
            if (this.listOfParticipants[indexOfFirstParticipant].power > this.listOfParticipants[indexOfSecondParticipant].power){
                this.listOfParticipants[indexOfFirstParticipant].wins += 1;
                return `The ${this.listOfParticipants[indexOfFirstParticipant].name} is winner in the game ${typeOfGame}.`
            } else if (this.listOfParticipants[indexOfSecondParticipant].power > this.listOfParticipants[indexOfFirstParticipant].power){
                this.listOfParticipants[indexOfSecondParticipant].wins += 1;
                return `The ${this.listOfParticipants[indexOfSecondParticipant].name} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`;
            }
        } else if (typeOfGame === 'Battleship'){
            let findFirstParticipant = this.listOfParticipants.find(x => x.name === participant1)
            let indexOfFirstParticipant = this.listOfParticipants.indexOf(findFirstParticipant)
            if(indexOfFirstParticipant === -1){
                throw new Error(`Invalid entered name/s.`)
            }
            this.listOfParticipants[indexOfFirstParticipant].power += 20;
            return `The ${this.listOfParticipants[indexOfFirstParticipant].name} successfully completed the game ${typeOfGame}.`
        }
    }
    toString () {
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`
        let sorted = this.listOfParticipants.sort((a,b) => b.wins - a.wins);
        for (const player of sorted) {
            result += `${player.name} - ${player.condition} - ${player.power} - ${player.wins}\n`
        }
        return result.trim()
    }
}
let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');

console.log(camp.registerParticipant('Petar Petarson', 'student', 300))

console.log(camp.registerParticipant('Sara Dickinson', 'child', 200))
console.logcamp.unregisterParticipant('Sara Dickinson')
camp.unregisterParticipant('John Petarson')


