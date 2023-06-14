class footballTeam {
    constructor (clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers){
        for (const player of footballPlayers) {
            let [name,age,playerValue] = player.split('/');
            let footballPlayerObj = {name, age, playerValue: Number(playerValue)};
            let findObj = this.invitedPlayers.find(x => x.name === name);
            if (findObj){
                let indexOf = this.invitedPlayers.indexOf(findObj);
                if (playerValue >= this.invitedPlayers[indexOf].playerValue){
                    this.invitedPlayers[indexOf].playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push(footballPlayerObj);
            }
        }
        let result = 'You successfully invite ';
        for (let i = 0; i < this.invitedPlayers.length; i++) {
            if(i === this.invitedPlayers.length - 1){
                result += `${this.invitedPlayers[i].name}.`
                break;
            }
            result += `${this.invitedPlayers[i].name}, `
        }
        return result;
    }
    signContract(selectedPlayer){
        let [name, playerOffer] = selectedPlayer.split('/')
        let findObj = this.invitedPlayers.find(x => x.name === name);
        if (!findObj){
            throw new Error(`${name} is not invited to the selection list!`)
        }
        let indexOf = this.invitedPlayers.indexOf(findObj);
        if (this.invitedPlayers[indexOf].playerValue > Number(playerOffer)) {
            let difference = this.invitedPlayers[indexOf].playerValue - Number(playerOffer);
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${difference} million more are needed to sign the contract!`)
        }
        this.invitedPlayers[indexOf].playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }
    ageLimit(name, age){
        let findObj = this.invitedPlayers.find(x => x.name === name);
        if (!findObj){
            throw new Error(`${name} is not invited to the selection list!`)
        }
        let indexOf = this.invitedPlayers.indexOf(findObj);
        if (this.invitedPlayers[indexOf].age < age){
            let ageDifference = age - this.invitedPlayers[indexOf].age;
            if(ageDifference < 5){
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        } else {
            return `${name} is above age limit!`
        }
    }
    transferWindowResult(){
        let result = `Players list:\n`
        for (const footballPlayer of this.invitedPlayers) {
            result += `Player ${footballPlayer.name}-${footballPlayer.playerValue}\n`
            
        }
        return result.trim()
    }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());


