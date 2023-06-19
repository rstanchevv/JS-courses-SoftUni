class JobOffers{
    constructor(employer, position){
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }
    jobApplication(candidates){
        let result = 'You successfully added candidates: '
        candidates.forEach(line => {
            let [name,education,yearsExperience] = line.split('-');
            yearsExperience = Number(yearsExperience)
            let findPerson = this.jobCandidates.find(x => x.name === name);
            let indexOfPerson = this.jobCandidates.indexOf(findPerson);
            if (indexOfPerson === -1){
                this.jobCandidates.push({name, education, yearsExperience})
            } else {
                if (yearsExperience > this.jobCandidates[indexOfPerson].yearsExperience){
                    this.jobCandidates[indexOfPerson].yearsExperience = Number(yearsExperience)
                }
            } 
        })
        for (let i = 0; i < this.jobCandidates.length; i++) {
            if (i === this.jobCandidates.length - 1){
                result += `${this.jobCandidates[i].name}.`
            } else {
                result += `${this.jobCandidates[i].name}, `
            }
        }
        return result;
    }
    jobOffer(chosenPerson){
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience)
        let findPerson = this.jobCandidates.find(x => x.name === name);
        let indexOfPerson = this.jobCandidates.indexOf(findPerson);
        if (indexOfPerson === -1 ){
            throw new Error(`${name} is not in the candidates list!`)
        }
        if (minimalExperience > this.jobCandidates[indexOfPerson].yearsExperience){
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
        } else {
            this.jobCandidates[indexOfPerson].yearsExperience = 'hired';
            return `Welcome aboard, our newest employee is ${name}.`
        }
    }
    salaryBonus(name){
        let findPerson = this.jobCandidates.find(x => x.name === name);
        let indexOfPerson = this.jobCandidates.indexOf(findPerson);
        if (indexOfPerson === -1){
            throw new Error(`${name} is not in the candidates list!`)
        }
        if (this.jobCandidates[indexOfPerson].education === 'Bachelor'){
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        } else if (this.jobCandidates[indexOfPerson].education === 'Master'){
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    }
    candidatesDatabase(){
        if (this.jobCandidates.length === 0){
            throw new Error ('Candidate Database is empty!')
        }
        let result = 'Candidates list:\n'
        let sorted = this.jobCandidates.sort((a,b) => a.name.localeCompare(b.name));
        for (const candidatee of sorted) {
            result += `${candidatee.name}-${candidatee.yearsExperience}\n`
        }
        return result.trim()
    }
}