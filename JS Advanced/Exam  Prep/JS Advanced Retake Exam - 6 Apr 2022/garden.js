class Garden{
    constructor(spaceAvailable){
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }
    addPlant (plantName, spaceRequired){
        if (spaceRequired > this.spaceAvailable){
            throw new Error(`Not enough space in the garden.`);
        }
        this.plants.push({plantName, spaceRequired, ripe: false, quantity: 10});
        this.spaceAvailable -= Number(spaceRequired);
        return `The ${plantName} has been successfully planted in the garden.`
    }
    ripenPlant(plantName, quantity){
        let findPlant = this.plants.find(x => x.plantName === plantName);
        let indexOfFindPlant = this.plants.indexOf(findPlant);
        if (indexOfFindPlant === -1){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (this.plants[indexOfFindPlant].ripe === true){
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0){
            throw new Error("The quantity cannot be zero or negative.")
        }
        this.plants[indexOfFindPlant].ripe = true;
        this.plants[indexOfFindPlant].quantity = quantity;
        if (quantity === 1){
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }
    harvestPlant(plantName) {
        let findPlant = this.plants.find(x => x.plantName === plantName);
        let indexOfFindPlant = this.plants.indexOf(findPlant);
        if (indexOfFindPlant === -1){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (this.plants[indexOfFindPlant].ripe === false){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        this.storage.push({plantName, quantity: this.plants[indexOfFindPlant].quantity});
        this.spaceAvailable += this.plants[indexOfFindPlant].spaceRequired;
        this.plants.splice(indexOfFindPlant, 1);

        return `The ${plantName} has been successfully harvested.`
    }
    generateReport(){
        let result = `The garden has ${this.spaceAvailable} free space left.\n`
        let sorted = this.plants.sort((a,b) => a.plantName.localeCompare(b.plantName));
        result += `Plants in the garden: `
        for (let i =0; i < sorted.length; i++) {
            if (i === sorted.length - 1){
                result += `${sorted[i].plantName}`
            } else {
            result += `${sorted[i].plantName}, `
            }
        }
        result.trim();
        result += `\n`;
        if (this.storage.length === 0){
            result += "Plants in storage: The storage is empty."
        } else {
            result += `Plants in storage: `
            for (let i =0; i < this.storage.length; i++) {
                if (i === this.storage.length - 1){
                    result += `${this.storage[i].plantName} (${this.storage[i].quantity})`
                } else {
                result += `${this.storage[i].plantName} (${this.storage[i].quantity}), `
                }
            }
        }
        return result;
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());







