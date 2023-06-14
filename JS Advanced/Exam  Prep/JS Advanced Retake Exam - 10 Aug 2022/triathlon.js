class Triathlon {
    constructor(competitionName ){
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }
    addParticipant (participantName, participantGender){
        if (!this.participants.hasOwnProperty(participantName)){
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`
        }
        else {
            return `${participantName} has already been added to the list`
        }
    }
    completeness (participantName, condition){
        if (!this.participants.hasOwnProperty(participantName)){
            throw new Error (`${participantName} is not in the current participants list`)
        }
        if (condition < 30) {
            throw new Error (`${participantName} is not well prepared and cannot finish any discipline`)
        }
        let numberOfDisciplines = Math.floor(condition / 30);
        if (numberOfDisciplines === 1 || numberOfDisciplines === 2){
            return `${participantName} could only complete ${numberOfDisciplines} of the disciplines`
        } else {
            this.listOfFinalists.push({participantName, participantGender: this.participants[participantName]})
            delete this.participants[participantName];
            return `Congratulations, ${participantName} finished the whole competition`
        }
    }
    rewarding (participantName){
        let findParticipant = this.listOfFinalists.find(x => x.participantName === participantName);
        if (!findParticipant){
            return `${participantName} is not in the current finalists list`
        } else {
            return `${participantName} was rewarded with a trophy for his performance`
        }
    }
    showRecord (criteria){
        if (this.listOfFinalists.length === 0){
            return `There are no finalists in this competition`
        }
        if (criteria === 'all'){
            let result = `List of all ${this.competitionName} finalists:\n`
            let sortedArr = this.listOfFinalists.sort((a, b) => a.participantName.localeCompare(b.participantName));
            for (const finalist of sortedArr) {
                result += `${finalist.participantName}\n`
            }
            return result.trim()
        }
        let filteredArr = this.listOfFinalists.filter(x => x.participantGender === criteria);

        if (filteredArr.length === 0) {
            return `There are no ${participantGender}'s that finished the competition`
        } else {
            return `${filteredArr[0].participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`
        }
    }
}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));

